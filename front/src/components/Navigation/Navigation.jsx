import React from 'react';
import {NavLink} from "react-router-dom";

import styles from './Navigation.module.scss';
import UserIcon from "../UserIcon/UserIcon";

const Navigation = () => {
    return (
        <div>
            <ul className={styles["main-nav-item"]}>
                <NavLink to="/login">
                    <UserIcon />
                    <li className={styles["main-nav"]}>Sign In</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;