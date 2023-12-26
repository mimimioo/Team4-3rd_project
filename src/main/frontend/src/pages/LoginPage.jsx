import React from 'react';
import styled from "styled-components";



const LoginPage = () => {
    return (
        <LoginPageLayout>
            테스트입니다.
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