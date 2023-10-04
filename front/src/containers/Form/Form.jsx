import React from 'react';
import Input from "../../components/Input/Input";
import Checkbox from "../../components/Checkbox/Checkbox";
import Button from "../../components/Button/Button";
import UserIcon from "../../components/UserIcon/UserIcon";

import styles from './Form.module.scss'

const Form = () => {
    return (
        <div className={styles["form-content"]}>
            <UserIcon />
            <h2>Sign In</h2>
            <Input label={"Username"} type={"text"} />
            <Input label={"Password"} type={"password"} />
            <Checkbox label={"Remember me"} />
            <Button label={"Sign In"} />
        </div>
    );
};

export default Form;