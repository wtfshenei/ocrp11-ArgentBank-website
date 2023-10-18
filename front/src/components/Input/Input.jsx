import React from 'react';

import styles from './Input.module.scss'

const Input = ({ label, type, value, onChange, disabled }) => {
    return (
        <div className={styles["input-wrapper"]}>
            <label htmlFor={`input-${type}`}>{label}</label>
            <input type={`${type}`} id={`input-${type}`} value={value} onChange={onChange} disabled={disabled} />
        </div>
    );
};

export default Input;