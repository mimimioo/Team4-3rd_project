import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import MyPageCommonLayout from "../components/myPageItems/MyPageCommonLayout";
import BackgroundVideo from "../components/BackgroundVideo";
import MyInfo from "../components/myPageItems/MyInfo";
import MyBoard from "../components/myPageItems/MyBoard";
import MyRes from "../components/myPageItems/MyRes";
import MyLike from "../components/myPageItems/MyLike";
import Nav from "../components/Nav/Nav";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const MyPage = () => {
    const isLogin = useSelector((state) => state.login.isLogin)
    const navigate = useNavigate();
    const manus = ['내 정보 관리', '게시물 관리', '예약 관리', '관심글 보기'];
    const [currentMenu, setCurrentMenu] = useState(() => MyInfo);


    useEffect(() => {
        if(isLogin === false) {
            alert("마이페이지는 로그인 후 접근 가능합니다.")
            navigate("/login")
        }
    }, [isLogin]);

    const showMenu = (index) => {
        switch (index) {
            case 0 :
                setCurrentMenu(() => MyInfo);
                break;
            case 1 :
                setCurrentMenu(() => MyBoard);
                break;
            case 2 :
                setCurrentMenu(() => MyRes);
                break;
            case 3 :
                setCurrentMenu(() => MyLike);
                break;
            default :
                setCurrentMenu(() => MyInfo);
        }
    }
    return (
        <StyledContainer>
            <Nav/>
            <BackgroundVideo></BackgroundVideo>
            <Layout>
                <Wrapper>
                    <MenuLayout>
                        {manus.map((item, index) => (
                            <MenuList key={index} onClick={() => showMenu(index)}>
                                {item}
                            </MenuList>
                        ))}
                    </MenuLayout>
                </Wrapper>
                <MyPageCommonLayout currentMenu={currentMenu}/>
            </Layout>
        </StyledContainer>
    );
};
export default MyPage;

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
`
const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2%;
  width: 100vw;
  max-width: 1440px;
  padding: 2%;
  margin: 0 0 0 auto;
`
const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: 5px;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 15%;
  height: auto;
`
const MenuLayout = styled.ul`
  display: flex;
  flex-direction: column;
  position: sticky;
  border-radius: 5px;
  list-style: none;
  margin: 0 auto;
  padding: 10% 0 0 0;
  width: 100%;
  left: 0;
  top: 0;
`
const MenuList = styled.li`
  position: relative;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  padding: 5px;
  margin: 10px auto;
  font-size: 25px;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.1s;
  color: #fff;
  
  &:hover {
    color: #FCCF31;
  }
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    border-radius: 1px;
    bottom: 10%;
    left: 50%;
    background-color: #FCCF31;
    transition: 0.3s;
  }
  &:hover::before {
    width: 100%;
    left: 0;
  }
`
