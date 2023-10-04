import React from 'react';
import Logo from "../../components/Logo/Logo";
import Navigation from "../../components/Navigation/Navigation";
import {NavLink} from "react-router-dom";

import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles["main-nav"]}>
            <NavLink to="/">
                <Logo />
            </NavLink>
            <Navigation />
        </header>
    );
};

export default Header;