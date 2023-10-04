import React from 'react';

import styles from './Input.module.scss'

const Input = ({ label, type }) => {
    return (
        <div className={styles["input-wrapper"]}>
            <label htmlFor={`input-${type}`}>{label}</label>
            <input type={`${type}`} id={`input-${type}`} />
        </div>
    );
};

export default Input;