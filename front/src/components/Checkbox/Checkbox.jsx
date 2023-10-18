import React from 'react';

import styles from './Checkbox.module.scss'

const Checkbox = ({ label, checked, onChange }) => {
    return (
        <div className={styles["input-remember"]}>
            <input type={"checkbox"} id={"remember-me"} checked={checked} onChange={onChange} />
            <label htmlFor={"remember-me"}>{label}</label>
        </div>
    );
};

export default Checkbox;