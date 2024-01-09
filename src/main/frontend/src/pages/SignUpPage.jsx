import React, {useContext, useEffect} from 'react';
import BackgroundVideo from "../components/BackgroundVideo";
import SignPageLayout from "../components/SignPageItems/SignPageLayout";
import SignUpBox from "../components/SignPageItems/SignUpBox";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const SignUpPage = () => {
    const isLogin = useSelector(state => state.login.isLogin)
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