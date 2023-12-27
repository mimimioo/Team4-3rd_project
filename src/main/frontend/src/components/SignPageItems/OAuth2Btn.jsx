import React from 'react';
import styled from "styled-components";

const OAuth2Btn = (props) => {
    return (
        <Button $styles = {props.config.styles}>
            <Image src={props.config.imageAddress} alt={""}/>
            <ButtonText>{props.config.oauthText || "!!ERROR!!"}</ButtonText>
        </Button>
    );
};

export default OAuth2Btn;

const Image = styled.img`
  display: inline-block;
  vertical-align: middle;
  height: 22px;
  width: 22px;
  margin-right: 10px;
  padding: 0;
  pointer-events: none;
`
const Button = styled.button`
  margin-bottom: 15px;
  width: 70%;
  max-width: 350px;
  background-color: ${(props) => props.$styles.bgcColor || "#fff"};
  text-align: start;
  outline: none;
  border: none;
  color: ${(props) => props.$styles.textColor || "#fff"};
  font-weight: bold;
  padding: 10px 19%;
  border-radius: 10px;
  transition: 0.3s ease;

  &:active {
    background-color: ${(props) => props.$styles.activeBgcColor};
  }
`
const ButtonText = styled.span`
  display: inline-block;
  vertical-align: middle;
  pointer-events: none;
`