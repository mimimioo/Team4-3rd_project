// src/UsedMarket/UsedBoard.js

import React from 'react';
import styled from 'styled-components';
import ToastTextEditor from '../commons/ToastTextEditor';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const BoardContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 20px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const UsedBoard = () => {
  return (
    <Container>
      <BoardContainer>
        <ToastTextEditor />
        <button>제출</button>
      </BoardContainer>
    </Container>
  );
};

export default UsedBoard;