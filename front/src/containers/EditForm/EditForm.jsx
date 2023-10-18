import React, {useState} from 'react';
import Input from "../../components/Input/Input";
import {useDispatch, useSelector} from "react-redux";

import styles from './EditForm.module.scss'
import Button from "../../components/Button/Button";
import axios from "axios";
import {setUser} from "../../redux/authSlice";

const EditForm = ({ onCancel, setIsEditing }) => {
    const user = useSelector(state => state.auth.user)
    const token = useSelector(state => state.auth.token)
    const [userName, setUserName] = useState(user.userName)
    const dispatch = useDispatch()

    const handleUserNameChange = (e) => {
        setUserName(e.target.value)
    }

    const isValidUsername = (editName) => {
        if (!editName || editName.length === 0) {
            return false
        }
        const regex = /^[a-zA-Z0-9]/
        return regex.test(editName)
    }

    const handleSave = async (e) => {
        e.preventDefault()

        if (!isValidUsername(userName)) {
            console.error("Invalid username !")
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
            console.error("API call failed:", error.response ? error.response.data : "No response data")
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
            <div className={styles["buttons-display"]}>
                <Button label={"Save"} onClick={handleSave} />
                <Button label={"Cancel"} onClick={onCancel} />
            </div>
        </form>
    );
};

export default EditForm;