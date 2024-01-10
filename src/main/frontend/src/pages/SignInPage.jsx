import React, {useContext, useEffect} from 'react';
import SignInBox from "../components/SignPageItems/SignInBox";
import BackgroundVideo from "../components/BackgroundVideo";
import SignPageLayout from "../components/SignPageItems/SignPageLayout";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Nav from "../components/Nav/Nav";

const SignInPage = () => {
    const isLogin = useSelector(state => state.login.isLogin)
    const navigate = useNavigate();
    useEffect(() => {
        if(isLogin) {
            navigate('/')
        }
    }, [isLogin]);
    return (
        <>
            <SignPageLayout>
                <BackgroundVideo />
                <Nav />
                <div className="signInBox">
                    <SignInBox />
                </div>
            </SignPageLayout>
        </>
    );
};
export default SignInPage;