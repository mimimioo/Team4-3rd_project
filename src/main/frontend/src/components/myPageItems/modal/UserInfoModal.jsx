import React from 'react';
import ModalBaseLayout from "./ModalBaseLayout";
import styled from "styled-components";
import ModalLayout from "./ModalLayout";

const UserInfoModal = (props) => {

    return (
        <ModalLayout>
            gkgkgk
        </ModalLayout>
    );
};

export default UserInfoModal;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  
  & input {
    padding: 10px;
  }
`
const TextArea = styled.textarea`
  width: 70%;
  height: 200px;
  resize: none;
  padding: 10px;
  line-height: 1.2;
`