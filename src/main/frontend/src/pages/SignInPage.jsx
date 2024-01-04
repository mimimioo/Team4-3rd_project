import React, {useContext, useEffect} from 'react';
import SignInBox from "../components/SignPageItems/SignInBox";
import BackgroundVideo from "../components/BackgroundVideo";
import SignPageLayout from "../components/SignPageItems/SignPageLayout";
import LoginContext from "../context/user/LoginContext";
import {useNavigate} from "react-router-dom";

const SignInPage = () => {
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
            <SignInBox />
        </SignPageLayout>
    );
};
export default SignInPage;