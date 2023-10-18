import React, {useEffect, useState} from 'react';
import Data from "../../assets/accounts.json"
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";
import Button from "../../components/Button/Button";

import styles from './Profile.module.scss'
import Account from "../../containers/Account/Account";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setUser} from "../../redux/authSlice";
import {useNavigate} from "react-router-dom";
import EditForm from "../../containers/EditForm/EditForm";
import ErrorNotifier from "../../components/ErrorNotifier/ErrorNotifier";
import LoadingObject from "../../components/LoadingObject/LoadingObject";

const Profile = () => {
    const accountsData = Data.accounts;
    const token = useSelector(state => state.auth.token) || localStorage.getItem('authToken')
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isEditing, setIsEditing] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [apiError, setApiError] = useState(null)

    useEffect(() => {
        if (token) {
            axios.post('http://localhost:3001/api/v1/user/profile', {}, {
                headers: { Authorization: `Bearer ${token}` }
            })
                .then(response => {
                    dispatch(setUser(response.data.body))
                    setIsLoading(false)
                })
                .catch(error => {
                    setApiError(true)
                    setTimeout(() => {
                        setApiError(null)
                        navigate('/')
                        setIsLoading(false)
                    }, 5000)
                });
        } else {
            navigate('/login');
            setIsLoading(false)
        }
    }, [token, dispatch, navigate]);

    const handleEditClick = () => {
        if (!isEditing) {
            setIsEditing(true)
        } else {
            setIsEditing(false)
        }

    }

    return (
        <div className={styles["profile-container"]}>
            <Header />
            {isLoading ? (
                <LoadingObject />
            ) : (
                <div className={styles["profile-wrapper-content"]}>
                    {isEditing ? (
                        <EditForm onCancel={handleEditClick} setIsEditing={setIsEditing}/>
                    ) : (
                        <>
                            <h2 className={styles["profile-title"]}>
                                Welcome back <span>{user ? `${user.firstName} ${user.lastName}!` : <LoadingObject />}</span>
                            </h2>
                            <div className={styles["button-display"]}>
                                <Button label={"Edit Name"} onClick={handleEditClick}/>
                            </div>
                        </>
                    )}
                    <ul className={styles["account-display"]}>
                        {accountsData.map((acc) => (
                            <Account key={acc.id} title={acc.title} amount={acc.amount} desc={acc.desc}/>
                        ))}
                    </ul>
                </div>
            )}
            <Footer />
            {apiError && <ErrorNotifier />}
        </div>
    );
};

export default Profile;