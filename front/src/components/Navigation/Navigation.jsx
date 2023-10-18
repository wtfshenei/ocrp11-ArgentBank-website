import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import styles from './Navigation.module.scss';
import UserIcon from "../UserIcon/UserIcon";
import {useDispatch, useSelector} from "react-redux";
import {logout, setToken, setUser} from "../../redux/authSlice";
import axios from "axios";
import SignOutIcon from "../SignOutIcon/SignOutIcon";
import ErrorNotifier from "../ErrorNotifier/ErrorNotifier";

const Navigation = () => {
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const registeredToken = localStorage.getItem('authToken')
    const validToken = localStorage.getItem('authTokenValidity')
    const [apiError, setApiError] = useState(null)

    useEffect(() => {
        const isTokenValid = () => {
            if (!validToken) {
                return false
            }
            const currentTime = new Date().getTime()
            return currentTime < parseInt(validToken)
        }

        if (!user && registeredToken && isTokenValid()) {
            axios.post('http://localhost:3001/api/v1/user/profile', {}, {
                headers: { Authorization: `Bearer ${registeredToken}` }
            })
                .then(response => {
                    dispatch(setUser(response.data.body));
                    dispatch(setToken(registeredToken))
                })
                .catch(error => {
                    setApiError(true)
                    setTimeout(() => setApiError(null), 5000)
                    localStorage.removeItem('authToken');
                });
        }
    }, [user, registeredToken, dispatch]);

    const handleLogout = () => {
        localStorage.removeItem('authToken')
        dispatch(logout())
        navigate('/')
    }

    return (
        <div>
            <ul className={styles["main-nav-item"]}>
                {user ? (
                    <>
                        <NavLink to={'/profile'}>
                            <UserIcon />
                            <li className={styles["main-nav"]}>{user.userName}</li>
                        </NavLink>
                        <NavLink to="#" onClick={handleLogout}>
                            <SignOutIcon />
                            <li className={styles["main-nav"]}>Sign Out</li>
                        </NavLink>
                    </>
                ) : (
                    // L'utilisateur n'est pas connecté
                    <NavLink to="/login">
                        <UserIcon />
                        <li className={styles["main-nav"]}>Sign In</li>
                    </NavLink>
                )}
                {apiError && <ErrorNotifier />}
            </ul>
        </div>
    );
};

export default Navigation;