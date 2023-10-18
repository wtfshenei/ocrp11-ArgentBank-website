import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../../pages/Home/Home";
import Profile from "../../pages/Profile/Profile";
import Login from "../../pages/Login/Login";
import LoggedRoute from "./LoggedRoute/LoggedRoute";

const Routeur = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={
                    <LoggedRoute>
                        <Login />
                    </LoggedRoute>} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routeur;