
import React, {useRef} from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {useSelector} from "react-redux";

const StyledNav = styled.nav`
  width: 100%;
  background-color: #222;
  padding: 15px 5%;
  text-align: center;
  display: flex;
  justify-content: space-between; /* 좌우 간격을 최대로 설정 */
  align-items: center;
  position: fixed;
  z-index: 100;
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
  text-decoration: none;
  font-family: 'OA';
  white-space: nowrap;
  font-size: 1rem;

  &:hover {
    //text-decoration: underline;
    color: #fff;
    background-color: #ff0000;
    border: 1px solid #ff0000;
  }
`;



const Nav = () => {
    const isLogin = useSelector((state) => state.login.isLogin);
    console.log(isLogin)

    const reserveRef = useRef<HTMLDivElement>(null);
    const communityRef = useRef<HTMLDivElement>(null);
    const secondhandRef = useRef<HTMLDivElement>(null);
    const noticeRef = useRef<HTMLDivElement>(null);
    const onReserveClick = () => {
        reserveRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    const onCommunityClick = () => {
        communityRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    const onSecondhandClick = () => {
        secondhandRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    const onNoticeClick = () => {
        noticeRef.current?.scrollIntoView({ behavior: 'smooth' });
    }



    return (
            <StyledNav>
                <StyledLinkContainerLeft>
                    {/*    <StyledLink to="#">선상예약</StyledLink>    */}
                    {/*    <StyledLink to="/Community">커뮤니티</StyledLink>    */}
                    {/*    <StyledLink to="/UsedMarket">중고마켓</StyledLink>    */}
                    {/*    <StyledLink to="#">공지사항</StyledLink>    */}
                    <ul className="styledLinkContainerLeft">
                        <li className="reserve"><a href='#reserve'>선상예약</a></li>
                        <li className="community"><a href='#community'>커뮤니티</a></li>
                        <li className="secondhand"><a href='#secondhand'>중고마켓</a></li>
                        <li className="notice"><a href='#notice'>공지사항</a></li>
                    </ul>
                </StyledLinkContainerLeft>

                <StyledText to={"/"} className="styledTitle">낚시의민족낚았소</StyledText>

                <StyledLinkContainerRight>
                    <StyledLink to="#" className="findingFishingSpot">낚시터찾기</StyledLink>
                    {isLogin? <StyledLink to={"/mypage"}>마이페이지</StyledLink> : <StyledLink to={"/login"} className="login">로그인</StyledLink>}
                    {isLogin? <StyledLink to={"/logout"}>로그아웃</StyledLink> : null}
                </StyledLinkContainerRight>
            </StyledNav>
    );
};

export default Nav;