
import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {useSelector} from "react-redux";

const StyledNav = styled.nav`
  background-color: transparent;
  padding: 30px 5%;
  text-align: center;
  display: flex;
  justify-content: space-between; /* 좌우 간격을 최대로 설정 */
  align-items: center;
`;

const StyledText = styled(Link)`
  font-size: 1.5rem;
  font-family: 'OA';
  text-decoration: none;
  color: white;
  text-align: center;
  margin: auto;
`;

const StyledLinkContainerLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 30%;
  gap: 5%;
`;
const StyledLinkContainerRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 30%;
  gap: 5%;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: 'OA';
  white-space: nowrap;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;


const Nav = () => {
    const isLogin = useSelector((state) => state.login.isLogin);
    console.log(isLogin)


    return (
        <StyledNav>
          <StyledLinkContainerLeft>
            <StyledLink to="#">선상예약</StyledLink>
            <StyledLink to="/Community">커뮤니티</StyledLink>
            <StyledLink to="/UsedMarket">중고마켓</StyledLink>
            <StyledLink to="#">공지사항</StyledLink>
          </StyledLinkContainerLeft>
            <StyledText to={"/"}>낚시의민족낚았소</StyledText>
            <StyledLinkContainerRight>
                <StyledLink to="#">낚시터찾기</StyledLink>
                {isLogin? <StyledLink to={"/mypage"}>마이페이지</StyledLink> : <StyledLink to={"/login"}>로그인</StyledLink>}
                {isLogin? <StyledLink to={"/logout"}>로그아웃</StyledLink> : null}
          </StyledLinkContainerRight>
        </StyledNav>
    );
};

export default Nav;