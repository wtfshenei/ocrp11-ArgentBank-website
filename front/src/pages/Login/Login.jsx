import React from 'react';
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";
import Form from "../../containers/Form/Form";

import styles from "./Login.module.scss"

const Login = () => {
    return (
        <div className={styles["login-container"]}>
            <Header />
            <main className={styles["bg-dark"]}>
                <Form />
            </main>
            <Footer />
        </div>
    );
};

export default Login;