
import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledNav = styled.nav`
  position: relative;
  z-index: 1;
  background-color: transparent;
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: space-between; /* 좌우 간격을 최대로 설정 */
  align-items: center;
`;

const StyledText = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
  font-family: 'OA';
  color: white;
  margin-right: 100px;
`;

const StyledLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: white;
  margin-right: 20px;
  text-decoration: none;
  font-family: 'OA';

  &:hover {
    text-decoration: underline;
  }
`;


const Nav = () => {
    return (
        <StyledNav>
          <StyledLinkContainer>
            <StyledLink href="#">선상예약</StyledLink>
            <StyledLink href="#">커뮤니티</StyledLink>
            <StyledLink to={"/UsedMarket"}>중고마켓</StyledLink>
            <StyledLink href="#">공지사항</StyledLink>
          </StyledLinkContainer>
          <StyledText>낚시의민족낚았소</StyledText>
          <StyledLinkContainer>
            <StyledLink href="#">낚시터찾기</StyledLink>
            <StyledLink to={"/login"}>로그인</StyledLink>
          </StyledLinkContainer>
        </StyledNav>
    );
};

export default Nav;