import React from 'react';

import styles from './Button.module.scss'

const Button = ({ label }) => {
    return (
        <div>
            <button className={styles["button"]}>{label}</button>
        </div>
    );
};

export default Button;