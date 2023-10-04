import React from 'react';
import LogoImg from './argentBankLogo.png';

import styles from './Logo.module.scss';

const Logo = () => {
    return (
        <div className={styles["main-nav-logo"]}>
            <img src={LogoImg} alt="Argent Bank Logo" className={styles["main-nav-logo-image"]} />
            <h1 className={styles["sr-only"]}>Argent Bank</h1>
        </div>
    );
};

export default Logo;