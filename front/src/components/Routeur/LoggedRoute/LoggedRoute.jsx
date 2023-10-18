import React from 'react';
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const LoggedRoute = ({ children }) => {
    const token = useSelector(state => state.auth.token)
    const registeredToken = localStorage.getItem('authToken')
    const validToken = localStorage.getItem('authTokenValidity')

    const isTokenValid = () => {
        if (!validToken) {
            return false
        }
        const currentTime = new Date().getTime()
        return currentTime < parseInt(validToken)
    }

    if (token) {
        return <Navigate to={"/profile"} replace />
    } else if (registeredToken) {
        if (isTokenValid()) {
            return <Navigate to={"/profile"} replace />
        } else {
            localStorage.removeItem('authToken')
            localStorage.removeItem('authTokenValidity')
            return children
        }
    } else {
        return children
    }
};

export default LoggedRoute;