import React from 'react';

import styles from './Checkbox.module.scss'

const Checkbox = ({ label }) => {
    return (
        <div className={styles["input-remember"]}>
            <input type={"checkbox"} id={"remember-me"} />
            <label htmlFor={"remember-me"}>{label}</label>
        </div>
    );
};

export default Checkbox;