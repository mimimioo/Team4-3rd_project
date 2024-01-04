
import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import LoginContext from "../../context/user/LoginContext";

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

    const {isLogin, dispatchLogin} = useContext(LoginContext);

    return (
<<<<<<< HEAD
      <StyledNav>
      <StyledLinkContainer>
        <StyledLink to="#">선상예약</StyledLink>
        <StyledLink to="/Community">커뮤니티</StyledLink>
        <StyledLink to="/UsedMarket">중고마켓</StyledLink>
        <StyledLink to="#">공지사항</StyledLink>
      </StyledLinkContainer>
        <StyledText>낚시의민족낚았소</StyledText>
        <StyledLinkContainer>
        <StyledLink to="#">낚시터찾기</StyledLink>
        {isLogin? <StyledLink to={"/mypage"}>마이페이지</StyledLink> : <StyledLink to={"/login"}>로그인</StyledLink>}
        {isLogin? <StyledLink to={"/logout"}>로그아웃</StyledLink> : false}
      </StyledLinkContainer>
    </StyledNav>
=======
        <StyledNav>
          <StyledLinkContainerLeft>
            <StyledLink to="#">선상예약</StyledLink>
            <StyledLink to="/Community">커뮤니티</StyledLink>
            <StyledLink to="#">중고마켓</StyledLink>
            <StyledLink to="#">공지사항</StyledLink>
          </StyledLinkContainerLeft>
            <StyledText to={"/"}>낚시의민족낚았소</StyledText>
            <StyledLinkContainerRight>
                <StyledLink to="#">낚시터찾기</StyledLink>
                {isLogin? <StyledLink to={"/mypage"}>마이페이지</StyledLink> : <StyledLink to={"/login"}>로그인</StyledLink>}
                {isLogin? <StyledLink to={"/logout"}>로그아웃</StyledLink> : false}
          </StyledLinkContainerRight>
        </StyledNav>
>>>>>>> de231d2d0195aa0ececb68b92799de5b6f660bb8
    );
};

export default Nav;