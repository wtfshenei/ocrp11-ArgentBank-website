import React from 'react';

import styles from './Button.module.scss'

const Button = ({ label, onClick }) => {
    return (
        <div>
            <button className={styles["button"]} onClick={onClick} >{label}</button>
        </div>
    );
};

export default Button;