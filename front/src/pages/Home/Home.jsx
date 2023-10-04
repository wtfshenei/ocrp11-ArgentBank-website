import React from 'react';
import Data from '../../assets/features.json';
import Header from "../../containers/Header/Header";
import Banner from "../../components/Banner/Banner";
import Features from "../../components/Features/Features";
import Footer from "../../containers/Footer/Footer";

import styles from './Home.module.scss';

const Home = () => {
    const featuresData = Data.features;

    return (
        <div className={styles["home-container"]}>
            <Header />
            <Banner />
            <ul className={styles["features-display"]}>
                {featuresData.map((feat) =>(
                    <Features key={feat.id} imgSrc={feat.imgSrc} imgAlt={feat.imgAlt} title={feat.title} txt={feat.txt} />
                ))}
            </ul>
            <Footer />
        </div>
    );
};

export default Home;