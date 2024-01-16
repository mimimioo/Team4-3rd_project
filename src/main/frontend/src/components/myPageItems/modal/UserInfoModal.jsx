import React from 'react';
import ModalBaseLayout from "./ModalBaseLayout";
import styled from "styled-components";
import ModalLayout from "./ModalLayout";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {DELETE_USER_INFO} from "../../../redux/userSlice";
import {SET_LOGOUT} from "../../../redux/loginSlice";

const UserInfoModal = (props) => {
    const userInfo = useSelector(state => state.user)
    const dispatch = useDispatch();
    const deleteUser = async () => {
        try {
            const response = await axios.post("/user/deleteUser")
            if(response.data.result) {
                alert(response.data.message);
                dispatch(DELETE_USER_INFO());
                dispatch(SET_LOGOUT());
            } else {
                alert(response.data.message);
                props.setCurrentModal(null);
            }
        } catch (e) {

        }

    }

    return (
        <ModalLayout>
            <h3 style={{margin: "15px auto", fontSize:"19px"}}>회원정보 관리</h3>
            <Wrapper>
                <Text>이름</Text>
                <Content>{userInfo.userName}</Content>
            </Wrapper>
            <Wrapper>
                <Text>이메일</Text>
                <Content>{userInfo.userEmail}</Content>
            </Wrapper>
            <Wrapper>
                <Text>전화번호</Text>
                <Content>{userInfo.userPhone}</Content>
            </Wrapper>
            <Wrapper>
                <Btn onClick={deleteUser}>회원 탈퇴하기</Btn>
            </Wrapper>
        </ModalLayout>
    );
};

export default UserInfoModal;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const Text = styled.p`
  flex: 4;
  text-align: center;
  font-weight: bold;
`
const Content = styled.p`
  flex: 6;
`
const Btn = styled.button`
  outline: none;
  border: 1px solid red;
  background-color: red;
  color: #fff;
  font-weight: bold;
  padding: 15px;
  border-radius: 10px;
  width: 50%;
  margin: 20px;

  &:active {
    background-color: #ec0000;
  }
`