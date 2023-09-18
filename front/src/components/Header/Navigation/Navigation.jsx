import React from 'react';
import UserIcon from './circle-user-solid.svg';
import {NavLink} from "react-router-dom";

import styles from './Navigation.module.scss';

const Navigation = () => {
    return (
        <div>
            <ul className={styles["main-nav-item"]}>
                <NavLink to="/login">
                    <img src={UserIcon} alt="User Icon" className={styles["nav-user-icon"]} />
                    <li className={styles["main-nav"]}>Sign In</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;