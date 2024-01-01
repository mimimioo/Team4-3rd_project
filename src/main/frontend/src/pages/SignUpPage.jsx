import React, {useContext, useEffect} from 'react';
import BackgroundVideo from "../components/BackgroundVideo";
import SignPageLayout from "../components/SignPageItems/SignPageLayout";
import SignUpBox from "../components/SignPageItems/SignUpBox";
import LoginContext from "../context/user/LoginContext";
import {useNavigate} from "react-router-dom";

const SignUpPage = () => {
    const {isLogin, dispatchLogin} = useContext(LoginContext);
    const navigate = useNavigate();
    useEffect(() => {
        if(isLogin) {
            navigate('/')
        }
    }, [isLogin]);
    return (
        <SignPageLayout>
            <BackgroundVideo />
            <SignUpBox />
        </SignPageLayout>
    );
};

export default SignUpPage;