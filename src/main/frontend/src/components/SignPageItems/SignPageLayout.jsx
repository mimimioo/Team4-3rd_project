import React from 'react';
import styled from "styled-components";

const SignPageLayout = ({ children }) => {
    return (
        <Layout>
            { children }
        </Layout>
    );
};

export default SignPageLayout;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`