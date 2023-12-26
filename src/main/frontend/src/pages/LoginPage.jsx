import React from 'react';
import styled from "styled-components";
import LoginBox from "../components/LoginPageItems/LoginBox";
import BackgroundVideo from "../components/BackgroundVideo";



const LoginPage = () => {
    return (
        <LoginPageLayout>
            <BackgroundVideo />
            <LoginBox />
        </LoginPageLayout>
    );
};
export default LoginPage;

// 스타일
const LoginPageLayout = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`