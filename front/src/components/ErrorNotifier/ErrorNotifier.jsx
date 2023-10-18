import React from 'react';

import styles from './ErrorNotifier.module.scss'

const ErrorNotifier = () => {
    return (
        <div className={styles['error-notifier-message']}>
            <p>An error has occurred, please try again later !</p>
        </div>
    );
};

export default ErrorNotifier;