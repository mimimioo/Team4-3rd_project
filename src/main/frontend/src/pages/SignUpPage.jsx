import React from 'react';
import BackgroundVideo from "../components/BackgroundVideo";
import SignPageLayout from "../components/SignPageItems/SignPageLayout";
import SignUpBox from "../components/SignPageItems/SignUpBox";

const SignUpPage = () => {
    return (
        <SignPageLayout>
            <BackgroundVideo />
            <SignUpBox />
        </SignPageLayout>
    );
};

export default SignUpPage;