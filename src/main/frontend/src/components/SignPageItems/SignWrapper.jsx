import React from 'react';
import styled from "styled-components";

const SignWrapper = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

export default SignWrapper;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  width: 450px;
  padding: 30px 0;
  background-color: rgba(255, 255, 255, 0.7);
  
  &:last-child(SignBtn) {
    margin-bottom: 0;
  }
`