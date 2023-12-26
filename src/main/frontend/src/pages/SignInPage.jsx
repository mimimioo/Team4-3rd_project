import React from 'react';
import LoginBox from "../components/LoginPageItems/LoginBox";
import BackgroundVideo from "../components/BackgroundVideo";
import SignPageLayout from "../components/LoginPageItems/SignPageLayout";



const SignInPage = () => {
    return (
        <SignPageLayout>
            <BackgroundVideo />
            <LoginBox />
        </SignPageLayout>
    );
};
export default SignInPage;