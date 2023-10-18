import React, {useState} from 'react';
import Input from "../../components/Input/Input";
import Checkbox from "../../components/Checkbox/Checkbox";
import Button from "../../components/Button/Button";
import UserIcon from "../../components/UserIcon/UserIcon";

import styles from './Form.module.scss'
import axios from "axios";
import {useDispatch} from "react-redux";
import {setToken} from "../../redux/authSlice";
import {useNavigate} from "react-router-dom";

const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const checkRememberMe = !!localStorage.getItem('remembered')
    const [rememberMe, setRememberMe] = useState(checkRememberMe)

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/api/v1/user/login', {
                email,
                password
            });

            if (response.data && response.data.body.token) {
                dispatch(setToken(response.data.body.token));

                if (rememberMe) {
                    const expirationToken = new Date().getTime() + 30 * 60 * 1000
                    localStorage.setItem('authToken', response.data.body.token)
                    localStorage.setItem('authTokenValidity', expirationToken.toString())
                    localStorage.setItem('remembered', 'true')
                } else {
                    localStorage.removeItem('authToken')
                    localStorage.removeItem('authTokenValidity')
                    localStorage.removeItem('remembered')
                }
            }

            navigate('/profile')
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <form className={styles["form-content"]} onSubmit={handleSubmit}>
            <UserIcon />
            <h2>Sign In</h2>
            <Input label={"Username"} type={"email"} value={email} onChange={(e) => {
                setEmail(e.target.value);
            }} />
            <Input label={"Password"} type={"password"} value={password} onChange={(e) => {
                setPassword(e.target.value);
            }}  />
            <Checkbox label={"Remember me"} checked={rememberMe} onChange={(e) =>
                setRememberMe(e.target.checked)
            } />
            <Button label={"Sign In"} type={"submit"} />
        </form>
    );
};

export default Form;