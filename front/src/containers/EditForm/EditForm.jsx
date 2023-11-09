import React, {useState} from 'react';
import Input from "../../components/Input/Input";
import {useDispatch, useSelector} from "react-redux";

import styles from './EditForm.module.scss'
import Button from "../../components/Button/Button";
import axios from "axios";
import {setUser} from "../../redux/authSlice";
import ErrorNotifier from "../../components/ErrorNotifier/ErrorNotifier";

const EditForm = ({ onCancel, setIsEditing }) => {
    const user = useSelector(state => state.auth.user)
    const token = useSelector(state => state.auth.token)
    const [userName, setUserName] = useState(user.userName)
    const dispatch = useDispatch()
    const [userNameError, setUserNameError] = useState(null)
    const [apiError, setApiError] = useState(null)

    const handleUserNameChange = (e) => {
        setUserName(e.target.value)
    }

    const isValidUsername = (editName) => {
        if (!editName || editName.length === 0) {
            return false
        }
        const regex = /^[a-zA-Z0-9]+$/ // Le pseudo doit commencer par une lettre ou un chiffre et les espaces sont interdits (+$)
        return regex.test(editName)
    }

    const handleSave = async (e) => {
        e.preventDefault()

        if (!isValidUsername(userName)) {
            setUserNameError('Only letters and numbers are allowed !')
            return
        }

        try {
            const response = await axios.put('http://localhost:3001/api/v1/user/profile', {
                userName: userName,
            }, {
                headers: { Authorization: `Bearer ${token}` }
            })
            dispatch(setUser(response.data.user || { ...user, userName: userName }))
            setIsEditing(false)
        } catch (error) {
            setApiError(true)
            setTimeout(() => setApiError(null), 5000)
        }
    }

    return (
        <form className={styles["form-content"]}>
            <h2>Edit user info</h2>
            <div className={styles["input-display"]}>
                <Input label={`User name: `} value={userName} type={"text"} onChange={handleUserNameChange} />
            </div>
            <div className={styles["input-display"]}>
                <Input label={`First name: `} value={user.firstName} type={"text"} disabled={true} />
            </div>
            <div className={styles["input-display"]}>
                <Input label={`Last name: `} value={user.lastName} type={"text"} disabled={true} />
            </div>
            {userNameError && <p className={styles["error-username-message"]}>{userNameError}</p> }
            <div className={styles["buttons-display"]}>
                <Button label={"Save"} onClick={handleSave} />
                <Button label={"Cancel"} onClick={onCancel} />
            </div>
            {apiError && <ErrorNotifier />}
        </form>
    );
};

export default EditForm;