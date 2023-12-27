import React from 'react';
import styled from "styled-components";

const InputBox = (props) => {
    return (
        <InputWrapper>
            <Input />
            <InputText>{props.message}</InputText>
        </InputWrapper>
    );
};
export default InputBox;

const InputWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    width: 70%;
    margin-bottom: 20px;
    text-align: center;
    max-width: 350px;
`
const Input = styled.input`
  outline: none;
  border-radius: 7px;
  border: 1px solid #aaa;
  width: calc(100% - 22px);
  max-width: 400px;
  padding: 10px;
  transition: 0.5s ease;

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0);;
    box-shadow: 0 0 3px 2px dodgerblue;
  }
`
const InputText = styled.div`
    color: #aaa;
    position: absolute;
    background-color: #fff;
    border-radius: 3px;
    padding: 1px;
    z-index: 10;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    margin-left: 10px;
    transition: 0.5s ease;
    font-size: 14px;

    ${Input}:focus ~ & {
      left: 5px;
      top: -15%;
      transform: translateY(0);
      color: dodgerblue;
      font-size: 10px;
      //box-shadow: 0 0 3px 1px dodgerblue;
    }
`