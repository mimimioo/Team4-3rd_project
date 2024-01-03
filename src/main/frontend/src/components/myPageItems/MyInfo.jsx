import React, {useState} from 'react';
import styled from "styled-components";
import ProfileModal from "./modal/ProfileModal";
import UserInfoModal from "./modal/UserInfoModal";
import ModalBaseLayout from "./modal/ModalBaseLayout";


const MyInfo = () => {
    const [currentModal, setCurrentModal] = useState(false);

    return (
        <Layout>
            <RowFlexLayout1>
                <ProfileImage />
                <ProfileInfoLayout>
                    <ProfileHeader>닉네임 : nickname</ProfileHeader>
                    <ProfileHeader>소개글</ProfileHeader>
                    <ProfileText>소개글 : introduce</ProfileText>
                </ProfileInfoLayout>
            </RowFlexLayout1>
            <RowFlexLayout2>
                <ProfileUpdateBtn onClick={() => {setCurrentModal(ProfileModal)}}>프로필 수정</ProfileUpdateBtn>
                <UserInfoUpdateBtn onClick={() => {setCurrentModal(UserInfoModal)}}>회원정보 관리</UserInfoUpdateBtn>
            </RowFlexLayout2>
            {currentModal && <ModalBaseLayout currentModal={currentModal} setCurrentModal={setCurrentModal} />}
        </Layout>
    );
};

export default MyInfo;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const RowFlexLayout1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 75%;
  font-size: 16px;
  height: 200px;
`
const RowFlexLayout2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
  font-size: 16px;
  height: 150px;
`
const ProfileImage = styled.img`
  background-color: #ff6363;
  width: 200px;
  min-width: 200px;
  height: 200px;
  border-radius: 50%;
`
const ProfileInfoLayout = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 1rem;
  max-width: calc(100% - 200px);
  height: 100%;
  padding: 10px;
`
const ProfileText = styled.div`
  word-wrap: break-word;
  width: 100%;
  overflow: scroll;
  max-height: 70%;
  margin-bottom: 15px;
`
const ProfileHeader=styled.h3`
  margin: 0;
  padding: 0;
  margin-top: 15px;
`
const ProfileUpdateBtn = styled.button`
  outline: none;
  margin: 0 auto;
  border: 2px solid dodgerblue;
  background-color: dodgerblue;
  color: #fff;
  font-weight: bold;
  padding: 14px;
  border-radius: 10px;
  width: 45%;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: dodgerblue;
  }
`
const UserInfoUpdateBtn = styled.button`
  outline: none;
  margin: 0 auto;
  border: 2px solid #FA016D;
  background-color: #FA016D;
  color: #fff;
  font-weight: bold;
  padding: 14px;
  border-radius: 10px;
  width: 45%;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #FA016D;
  }
`