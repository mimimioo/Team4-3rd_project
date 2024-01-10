// src/components/Main.js

import React from 'react';
import styled from 'styled-components';
import BackgroundVideo from '../components/BackgroundVideo';
import Nav from '../components/Nav/Nav';
import Footer from "../components/Footer";

const Main = () => {

  return (
    <StyledContainer>
      <BackgroundVideo />
      <Nav />

        <div className="styledContainer">
            <div id="main">메인</div>
            <div id="reserve">선상예약</div>
            <div id="community">
                커뮤니티
                {/*<Community01 />*/}
                {/*<Community02 />*/}
            </div>
            <div id="secondhand">중고마켓</div>
            <div id="notice">공지사항</div>
        </div>

        <Footer />
    </StyledContainer>
  );
};

export default Main;




const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  //overflow: hidden;
`;