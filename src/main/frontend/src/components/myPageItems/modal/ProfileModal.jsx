import React, {useContext} from 'react';
import styled from "styled-components";
import ModalLayout from "./ModalLayout";
import ProfileImage from "../profileItems/ProfileImage";
import {useSelector} from "react-redux";

const ProfileModal = () => {
    const userInfo = useSelector(state => state.user)

    return (
        <ModalLayout>
            <h3 style={{margin: "15px auto", fontSize:"19px"}}>프로필 수정</h3>
            <EditForm>
                <RowBox>
                    <ProfileImage />
                    <ColumnBox>
                        <Text>{userInfo.userName}님 반갑습니다.</Text>
                        <Text>닉네임</Text>
                        <Input type={"text"} name={"NickName"} defaultValue={userInfo.userNickname || ""} />
                    </ColumnBox>
                </RowBox>
                <ColumnBox>
                    <Text>소개글</Text>
                    <TextArea defaultValue={userInfo.userIntroduce || ""} />
                    <Btn>수정하기</Btn>
                </ColumnBox>
            </EditForm>
        </ModalLayout>
    );
};
export default ProfileModal;

const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 10%;
  margin-bottom: 20px;
  
  & input {
    padding: 10px;
  }
`
const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  margin: auto 0 0 0;
  
  & input {
    padding: 10px;
  }
`
const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  resize: none;
  padding: 10px;
  line-height: 1.2;
`
const EditForm = styled.form`
  width: 100%;
  padding: 3%;
`
const Text = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
  margin-left: 10px;
`
const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
`
const Btn = styled.button`
  width: 20%;
  background-color: dodgerblue;
  border: 2px solid dodgerblue;
  color: #fff;
  padding: 7px;
  outline: none;
  transition: 0.2s ease-in;
  border-radius: 5px;
  margin: 25px 0 0 auto;
  white-space: nowrap;
  
  &:hover {
    background-color: white;
    color: dodgerblue;
  }
`