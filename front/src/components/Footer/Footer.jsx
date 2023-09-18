import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles["footer"]}>
            <p className={styles["footer-text"]}>Copyright 2020 Argent Bank</p>
        </div>
    );
};

export default Footer;