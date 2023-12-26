// src/components/Main.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background-color: #3498db;
  padding: 10px;
  text-align: center;
`;

const StyledText = styled.div`
  font-size: 24px;
  color: #fff;
  margin-bottom: 10px;


`;

const Main = () => {
  return (
    <StyledNav>
      <StyledText>낚시의민족낚았소</StyledText>
    </StyledNav>
  );
};

export default Main;
