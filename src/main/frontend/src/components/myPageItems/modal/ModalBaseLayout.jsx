import React from 'react';
import styled from "styled-components";

const ModalBaseLayout = (props) => {
    const modalControl = (event) => {
        if(event.target === event.currentTarget) {
            props.setCurrentModal(false)
        }
    }

    return (
        <Layout onClick={modalControl}>
            {props.currentModal}
        </Layout>
    );
};

export default ModalBaseLayout;

const Layout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`