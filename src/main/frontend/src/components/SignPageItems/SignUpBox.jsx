import React, {useState} from 'react';
import InputBox from "./InputBox";
import SignBoxWrapper from "./SignBoxWrapper";
import SignBtn from "./SignBtn";
import styled from "styled-components";

const SignUpBox = (props) => {
    const initialValue = {
        id : '',
        pw : ''
    }
    const [requestData, setRequestData] = useState(initialValue);
    const [userID, setUserID] = useState('');
    const [userPW, setUserPW] = useState('');
    const [userCPW, setUserCPW] = useState('');
    const [result, setResult] = useState('');

    const handleInput = (type, data) => {
        if (type === 'id') {
            setUserID(data);
            console.log(userID);
        } else if (type === 'pw') {
            setUserPW(data);
            console.log(userPW);
        } else if (type === 'cpw') {
            setUserCPW(data);
            console.log(userCPW);
        }
        else {
            throw new Error('Input type mismatch');
        }
    };
    return (
        <SignBoxWrapper>
            <h1 style={{marginTop: "0"}}>회원가입</h1>
            <InputBox message={"이메일을 입력해주세요."} type={"id"} onDataFromInput={handleInput}/>
            <InputBox message={"패스워드를 입력해주세요."} type={"pw"} onDataFromInput={handleInput}/>
            <InputBox message={"패스워드를 다시 한번 입력해주세요."} type={"cpw"} onDataFromInput={handleInput}/>
            <Message>{result.message}</Message>
            <SignBtn
                id={userID}
                pw={userPW}
                cpw={userCPW}
                result={setResult}
                request={"signUp"}>회원가입</SignBtn>
        </SignBoxWrapper>
    );
};
export default SignUpBox;

const Message = styled.div`
  color: red;
  width: 70%;
  height: 10px;
  font-size: 14px;
  margin-left: 10px;
  margin-bottom: 30px;
`