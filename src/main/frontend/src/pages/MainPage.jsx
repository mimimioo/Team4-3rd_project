// src/components/Main.js

import React from 'react';
import styled from 'styled-components';
import BackgroundVideo from '../components/BackgroundVideo';
import Nav from '../components/Nav/Nav';

const Main = () => {
  return (
    <StyledContainer>
      <BackgroundVideo />
      <Nav/>  
    </StyledContainer>
  );
};

export default Main;




const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;