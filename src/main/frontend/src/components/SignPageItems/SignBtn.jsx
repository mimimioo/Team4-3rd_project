import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const SignBtn = (props) => {
    if(props.to) {
        return (
            <PageLink to={props.to}>
                {props.children}
            </PageLink>
        );
    } else {
        return (
            <Btn>
                {props.children}
            </Btn>
        );
    }
};

export default SignBtn;

const PageLink = styled(Link)`
  width: 70%;
  max-width: 350px;
  margin-bottom: 10px;
  text-align: center;
  background-color: #fff;
  outline: none;
  border: none;
  color: dodgerblue;
  font-weight: bold;
  font-size: 14px;
  padding: 10px 0;
  border-radius: 10px;
  transition: 0.3s ease;
  text-decoration: none;

  &:active {
    background-color: #dedede; /* 버튼이 눌러진 상태일 때 배경 색상 변경 */
  }
`
const Btn = styled.button`
  width: 70%;
  max-width: 350px;
  margin-bottom: 10px;
  text-align: center;
  background-color: dodgerblue;
  outline: none;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  padding: 10px;
  border-radius: 10px;
  transition: 0.3s ease;
  text-decoration: none;

  &:active {
    background-color: #197bd9; /* 버튼이 눌러진 상태일 때 배경 색상 변경 */
  }
`