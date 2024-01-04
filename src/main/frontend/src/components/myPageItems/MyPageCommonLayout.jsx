import React from 'react';
import styled from "styled-components";

const MyPageCommonLayout = (props) => {
    return (
        <Layout>
            {/*props.currentMenu 값은 컴포넌트이고, 메뉴에 따라 다른 컴포넌트를 렌더링함.*/}
            <props.currentMenu />
        </Layout>
    );
};

export default MyPageCommonLayout;

const Layout = styled.div`
  width: 90%;
  max-width: 1440px;
  background-color: #fff;
  border-radius: 50px;
  padding: 5%;
`