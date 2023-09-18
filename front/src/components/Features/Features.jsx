import React from 'react';

import styles from './Features.module.scss';

const Features = ( { imgSrc, imgAlt, title, txt }) => {
    return (
        <li className={styles["features"]}>
            <div className={styles["feature-item"]}>
                <h2 className={styles["sr-only"]}>Features</h2>
                <img className={styles["feature-icon"]} src={imgSrc} alt={imgAlt} />
                <h3 className={styles["feature-item-title"]}>{title}</h3>
                <p>{txt}</p>
            </div>
        </li>
    );
};

export default Features;