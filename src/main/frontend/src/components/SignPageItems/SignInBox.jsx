import React, {useState} from 'react';
import styled from "styled-components";
import InputBox from "./InputBox";
import OAuth2Btn from "./OAuth2Btn";
import SignBoxWrapper from "./SignBoxWrapper";
import SignBtn from "./SignBtn";

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
const SignInBox = () => {
    const [userID, setUserID] = useState('');
    const [userPW, setUserPW] = useState('');
    const [result, setResult] = useState('');

    const handleInput = (type, data) => {
        if (type === 'id') {
            setUserID(data);
            console.log(userID);
        } else if (type === 'pw') {
            setUserPW(data);
            console.log(userPW);
        } else {
            throw new Error('Input type mismatch');
        }
    };


    return (
        <SignBoxWrapper>
            <h1 style={{marginTop: "0"}}>로그인</h1>
            <InputBox message={"아이디를 입력해주세요."} type={"id"} onDataFromInput={handleInput}/>
            <InputBox message={"패스워드를 입력해주세요."} type={"pw"} onDataFromInput={handleInput}/>
            <SignBtn request={"signIn"} id={userID} pw={userPW} result={setResult}>로그인</SignBtn>
            <SignBtn to={"/Signup"}>회원가입</SignBtn>
            <Line></Line>
            <OAuth2Btn config={googleButtonConfig}></OAuth2Btn>
            <OAuth2Btn config={naverButtonConfig}></OAuth2Btn>
            <OAuth2Btn config={kakaoButtonConfig}></OAuth2Btn>
        </SignBoxWrapper>
    );
};

export default SignInBox;

const Line = styled.div`
  margin: 30px 0;
  width: 70%;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.5);
`
