import React from 'react';
import BackgroundVideo from "../components/BackgroundVideo";
import SignPageLayout from "../components/LoginPageItems/SignPageLayout";
import LoginBox from "../components/LoginPageItems/LoginBox";

const SignUpPage = () => {
    return (
        <SignPageLayout>
            <BackgroundVideo />
            <SignUpBox />
        </SignPageLayout>
    );
};

export default SignUpPage;