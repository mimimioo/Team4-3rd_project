// src/components/Main.js

import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

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

const StyledLink = styled.a`
  color: white;
  margin-right: 20px;
  text-decoration: none;
  font-family: 'OA';

  &:hover {
    text-decoration: underline;
  }
`;

const Main = () => {
  return (
    <StyledContainer>
      <VideoBackground autoPlay loop muted>
        <source src={process.env.PUBLIC_URL + '/videos/fish.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <StyledNav>
        <StyledLinkContainer>
          <StyledLink href="#">선상예약</StyledLink>
          <StyledLink href="#">커뮤니티</StyledLink>
          <StyledLink href="#">중고마켓</StyledLink>
          <StyledLink href="#">공지사항</StyledLink>
        </StyledLinkContainer>
        <StyledText>낚시의민족낚았소</StyledText>
        <StyledLinkContainer>
          <StyledLink href="#">낚시터찾기</StyledLink>
          <StyledLink href="#">로그인</StyledLink>
        </StyledLinkContainer>
      </StyledNav>
    </StyledContainer>
  );
};

export default Main;
