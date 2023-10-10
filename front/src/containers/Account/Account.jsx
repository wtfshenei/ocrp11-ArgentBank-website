import React from 'react';
import Button from "../../components/Button/Button";

import styles from "./Account.module.scss"

const Account = ({ title, amount, desc }) => {
    return (
        <div className={styles["account-card"]}>
            <div className={styles["account-infos"]}>
                <h3 className={styles["account-title"]}>{title}</h3>
                <p className={styles["account-amount"]}>{amount}</p>
                <p className={styles["account-desc"]}>{desc}</p>
            </div>
            <div>
                <Button label={"View transactions"} />
            </div>
        </div>
    );
};

export default Account;