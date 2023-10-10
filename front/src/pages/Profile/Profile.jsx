import React, {useEffect} from 'react';
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

const Profile = () => {
    const accountsData = Data.accounts;
    const token = useSelector(state => state.auth.token)
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            axios.post('http://localhost:3001/api/v1/user/profile', {}, {
                headers: { Authorization: `Bearer ${token}` }
            })
                .then(response => {
                    dispatch(setUser(response.data.body))
                })
                .catch(error => {
                    console.error("API call failed:", error.response ? error.response.data : "No response data");
                });
        } else {
            navigate('/');
        }
    }, [token]);

    return (
        <div className={styles["profile-container"]}>
            <Header />
            <div className={styles["profile-wrapper-content"]}>
                <h2 className={styles["profile-title"]}>Welcome back <span>{user ? `${user.firstName} ${user.lastName}!` : "Loading..."}</span></h2>
                <div className={styles["button-display"]}>
                    <Button label={"Edit Name"} />
                </div>
                <ul className={styles["account-display"]}>
                    {accountsData.map((acc) =>(
                        <Account key={acc.id} title={acc.title} amount={acc.amount} desc={acc.desc} />
                    ))}
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;