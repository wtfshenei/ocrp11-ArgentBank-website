import React from 'react';
import BannerImg from './bank-tree.jpeg';

import styles from './Banner.module.scss';

const Banner = () => {
    return (
        <div className={styles["hero"]}>
            <div className={styles["hero-content"]}>
                <h2 className={styles["sr-only"]}>Promoted Content</h2>
                <p className={styles["subtitle"]}>No fees.</p>
                <p className={styles["subtitle"]}>No minimum deposit.</p>
                <p className={styles["subtitle"]}>High interest rates.</p>
                <p className={styles["text"]}>Open a savings account with Argent Bank today!</p>
            </div>
        </div>
    );
};

export default Banner;