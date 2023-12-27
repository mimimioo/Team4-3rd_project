import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const SignBtn = (props) => {
    return (
        <Btn to={props.to}>
            {props.children}
        </Btn>
    );
};

export default SignBtn;

const Btn = styled(Link)`
  width: 70%;
  max-width: 350px;
  margin-bottom: 10px;
  text-align: center;
  background-color: dodgerblue;
  outline: none;
  border: none;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
  transition: 0.3s ease;
  text-decoration: none;

  &:active {
    background-color: #197bd9; /* 버튼이 눌러진 상태일 때 배경 색상 변경 */
  }
`