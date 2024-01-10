import React, {useContext, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import ModalLayout from "./ModalLayout";
import ProfileImage from "../profileItems/ProfileImage";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {UPDATE_USER_PROFILE, UPDATE_USER_PROFILE_NOT_IMAGE} from "../../../redux/userSlice";

const ProfileModal = (props) => {
    const BASE_IMG_ADDRESS = "https://firebasestorage.googleapis.com/v0/b/team-project-test-k14-4.appspot.com/o/propfileImg%2FbaseProfile.png?alt=media&token=fe92656d-30c9-4c0c-8164-17b840bfc232";
    const userInfo = useSelector(state => state.user)
    const [imgAddress, setImgAddress] = useState(userInfo.userProfileImg);
    const inputNickNameRef = useRef();
    const inputIntroduceRef = useRef();
    const dispatch = useDispatch();

    const axiosData = async () => {
        const requestNickname = inputNickNameRef.current.value;
        const requestIntroduce = inputIntroduceRef.current.value;
        const requestImgAddress = imgAddress===BASE_IMG_ADDRESS? null : imgAddress;
        try {
            const response = await axios.post('/user/info/update', {
                nickname: requestNickname,
                userIntroduce: requestIntroduce,
                userProfileImg: requestImgAddress,
            }, {withCredentials : true})
            if(response.data.result === true) {
                requestImgAddress ?
                    dispatch(UPDATE_USER_PROFILE({
                        userNickname: response.data.userDto.nickname,
                        userIntroduce: response.data.userDto.userIntroduce,
                        userProfileImg: response.data.userDto.userProfileImg}))
                    :dispatch(UPDATE_USER_PROFILE_NOT_IMAGE({
                        userNickname: response.data.userDto.nickname,
                        userIntroduce: response.data.userDto.userIntroduce}))
            }
        } catch (e) {
            console.log(`error!!`, e)
        }
    }

    const updateProfile = async (e) => {
        e.preventDefault();
        axiosData()
            .then(() => {
                props.setCurrentModal(null);
            })
    }

    return (
        <ModalLayout>
            <h3 style={{margin: "15px auto", fontSize:"19px"}}>프로필 수정</h3>
            <EditForm>
                <RowBox>
                    <ProfileImage imgAddress={imgAddress} setImgAddress={setImgAddress}/>
                    <ColumnBox>
                        <Text>{userInfo.userName}님 반갑습니다.</Text>
                        <Text>닉네임</Text>
                        <Input ref={inputNickNameRef} type={"text"} name={"NickName"} defaultValue={userInfo.userNickname || ""} />
                    </ColumnBox>
                </RowBox>
                <ColumnBox>
                    <Text>소개글</Text>
                    <TextArea ref={inputIntroduceRef} defaultValue={userInfo.userIntroduce || ""} />
                    <Btn onClick={updateProfile}>수정하기</Btn>
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