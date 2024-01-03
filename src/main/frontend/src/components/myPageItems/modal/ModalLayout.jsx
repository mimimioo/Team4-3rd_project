import React from 'react';
import styled from "styled-components";

const ModalLayout = (props) => {
    return (
        <Layout>
            {props.children}
        </Layout>
    );
};
export default ModalLayout;

const Layout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #fff;
  border-radius: 10px;
`