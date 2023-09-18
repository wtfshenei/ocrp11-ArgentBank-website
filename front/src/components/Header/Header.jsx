import React from 'react';
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import {NavLink} from "react-router-dom";

import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles["main-nav"]}>
            <NavLink to="/">
                <Logo />
            </NavLink>
            <Navigation />
        </div>
    );
};

export default Header;