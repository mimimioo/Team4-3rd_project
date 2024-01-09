import React, {useContext} from 'react';
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {SET_USER_INFO} from "../../redux/userSlice";
import {SET_LOGIN} from "../../redux/loginSlice";

const SignBtn = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let requestFun;
    if(props.request === "signIn")
    {
        requestFun = async () => {props.result(await requestSignIn(props.id, props.pw))}
    }
    else if(props.request === "signUp")
        requestFun = async () => {props.result(await requestSignUp(props.id, props.pw, props.cpw, props.name, props.nickName, props.phoneNum))}

    const  requestSignIn = async (id, pw, setIsLogin, setUserInfo) => {
        console.log("비동기 함수 실행")
        try {
            const response = await axios.post('http://192.168.85.252:8080/user/login', {
                email : id,
                password : pw,
            });
            console.log('Login Successful', response.data);
            dispatch(SET_LOGIN());
            dispatch(SET_USER_INFO({
                    userName: response.data.userDto.username,
                    userEmail: response.data.userDto.email,
                    userPhone: response.data.userDto.phoneNum,
                    userNickname: response.data.userDto.nickname,
                    userIntroduce: response.data.userDto.userIntroduce,
                    userProfileImg: response.data.userDto.userProfileImg||"/image/baseProfile.png"
            }))
            navigate(-1);
            return response.data;
        } catch (error) {
            alert("아이디와 비밀번호를 다시 확인해주세요.")
            console.error('Login Failed', error);
            return null;
        }
    }
    const  requestSignUp = async (id, pw, cpw, name, nickName, phoneNum) => {
        if(pw !== cpw)
            return "패스워드가 일치하지 않습니다.";
        else if(id==='' || pw==='' || name==='' || nickName==='') {
            return "모든 입력값은 필수입니다.";
        }
        else
            try {
                console.log(`요청 전 데이터 확인, 아이디 : ${id} + 비밀번호 : ${pw}`)
                const response = await axios.post('http://192.168.85.252:8080/user/register', {
                    email : id,
                    password : pw,
                    username : name,
                    nickname : nickName,
                    phoneNum: phoneNum
                });
                const result = response.data? response.data : null;
                console.log('Login Successful', result);
                navigate('/login');
                return result;
            } catch (error) {
                const result = {
                    message : "회원가입에 실패했습니다."
                }
                console.error('Login Failed', error);
                return result;
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