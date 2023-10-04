import React from 'react';
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";
import Button from "../../components/Button/Button";

const Profile = () => {
    return (
        <div>
            <Header />
            <div>
                <h2>Welcome back <span>NAME</span></h2>
                <Button label={"Edit Name"} />
            </div>
            <Footer />
        </div>
    );
};

export default Profile;