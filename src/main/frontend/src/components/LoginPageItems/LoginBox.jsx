import React from 'react';
import styled from "styled-components";
import InputBox from "./InputBox";
import OAuth2Btn from "./OAuth2Btn";

const googleButtonConfig = {
    oauthText: "Google로 계속하기",
    imageAddress: "./symbol/google_logo.png",
    styles: {
        bgcColor: "#fff",
        textColor: "#000",
        activeBgcColor : "#e5e5e5"
    }
}
const naverButtonConfig = {
    oauthText: "네이버로 계속하기",
    imageAddress: "./symbol/naver_symbol.png",
    styles: {
        bgcColor: "#2DB400",
        textColor: "#fff",
        activeBgcColor : "#289b01"
    }
}
const kakaoButtonConfig = {
    oauthText: "카카오로 계속하기",
    imageAddress: "./symbol/kakao_symbol.png",
    styles: {
        bgcColor: "#FEE500",
        textColor: "#191919",
        activeBgcColor : "#d9c200"
    }
}
const LoginBox = () => {
    return (
        <LoginWrapper>
            <h1 style={{marginTop: "0"}}>로그인</h1>
            <InputBox message={"아이디를 입력해주세요."}/>
            <InputBox message={"패스워드를 입력해주세요."}/>
            <SignBtn>로그인</SignBtn>
            <SignBtn>회원가입</SignBtn>
            <Line></Line>
            <OAuth2Btn config={googleButtonConfig}></OAuth2Btn>
            <OAuth2Btn config={naverButtonConfig}></OAuth2Btn>
            <OAuth2Btn config={kakaoButtonConfig}></OAuth2Btn>
        </LoginWrapper>
    );
};

export default LoginBox;

const LoginWrapper = styled.div`
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
const SignBtn = styled.button`
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

  &:active {
    background-color: #197bd9; /* 버튼이 눌러진 상태일 때 배경 색상 변경 */
  }
`
const Line = styled.div`
  margin: 30px 0;
  width: 70%;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.5);
`
