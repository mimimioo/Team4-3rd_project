import React from 'react';
import styled from "styled-components";
import UserInfoModal from "./UserInfoModal";
import ProfileModal from "./ProfileModal";

const ModalBaseLayout = (props) => {
    const modalControl = (event) => {
        if(event.target === event.currentTarget) {
            props.setCurrentModal("")
        }
    }

    return (
        <Layout onClick={modalControl}>
            {props.currentModal==="ProfileModal" && <ProfileModal />}
            {props.currentModal==="UserInfoModal" && <UserInfoModal />}
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