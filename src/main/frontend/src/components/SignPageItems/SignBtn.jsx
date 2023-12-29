import React, {useContext} from 'react';
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import AuthContext from "../../context/user/AuthContext";
import LoginContext from "../../context/user/LoginContext";
import UserContext from "../../context/user/UserContext";

const SignBtn = (props) => {
    const {token, setToken} = useContext(AuthContext);
    const {isLogin, setIsLogin} = useContext(LoginContext);
    const {userInfo, setUserInfo} = useContext(UserContext);
    const navigate = useNavigate();
    let requestFun;
    if(props.request === "signIn")
    {
        requestFun = async () => {props.result(await requestSignIn(props.id, props.pw, setToken, setIsLogin,setUserInfo))}
        console.log(token);
        console.log(isLogin);
        console.log(userInfo);
    }
    else if(props.request === "signUp")
        requestFun = async () => {props.result(await requestSignUp(props.id, props.pw, props.cpw))}

    const  requestSignIn = async (id, pw, setToken, setIsLogin, setUserInfo) => {
        try {
            const response = await axios.post('http://192.168.85.252:8080/user/login', {
                email : id,
                password : pw,
            });
            console.log('Login Successful', response.data);
            setToken(response.data.token);
            setIsLogin(true);
            setUserInfo({
                userName: response.data.userDto.username,
                userEmail: response.data.userDto.email,
                userPhone: response.data.userDto.phoneNum,
            })
            navigate('/');
            return response.data;
        } catch (error) {
            console.error('Login Failed', error);
            return null;
        }
    }
    const  requestSignUp = async (id, pw, cpw) => {
        if(pw !== cpw)
            return "패스워드가 일치하지 않습니다.";
        else
            try {
                console.log(`요청 전 데이터 확인, 아이디 : ${id} + 비밀번호 : ${pw}`)
                const response = await axios.post('http://192.168.85.252:8080/user/register', {
                    email : id,
                    password : pw,
                });
                const result = response.data? response.data : null;
                console.log('Login Successful', result);
                navigate('/login');
                return result;
            } catch (error) {
                console.error('Login Failed', error);
                return null;
            }
    }

    if(props.to) {
        return (
            <PageLink to={props.to}>
                {props.children}
            </PageLink>
        );
    } else {
        return (
            <Btn onClick={requestFun}>
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