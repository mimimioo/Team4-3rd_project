// src/components/Main.js

import React from 'react';
import styled from 'styled-components';
import BackgroundVideo from '../components/BackgroundVideo';
import Nav from '../components/Nav/Nav';
import SeaApi from '../components/API/SeaApi';

const Main = () => {

  return (
    <StyledContainer>
      <BackgroundVideo />
      <Nav />
      <StyledSeaApiContainer>
        <SeaApi />
      </StyledSeaApiContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const StyledSeaApiContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export default Main;
