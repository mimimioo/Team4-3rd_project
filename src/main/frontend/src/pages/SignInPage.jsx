import React from 'react';
import SignInBox from "../components/SignPageItems/SignInBox";
import BackgroundVideo from "../components/BackgroundVideo";
import SignPageLayout from "../components/SignPageItems/SignPageLayout";



const SignInPage = () => {
    return (
        <SignPageLayout>
            <BackgroundVideo />
            <SignInBox />
        </SignPageLayout>
    );
};
export default SignInPage;