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
  height: 100vh;
  width: 100%;
`