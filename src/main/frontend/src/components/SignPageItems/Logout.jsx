import React, {useContext, useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {DELETE_USER_INFO} from "../../redux/userSlice";
import {SET_LOGOUT} from "../../redux/loginSlice";


const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLogin = useSelector((state) => state.login.isLogin);

    const requestLogout = async () => {
        try {
            // 로그아웃 시, 기존 쿠키에 설정된 JWT 없애기 위해, 서버에 로그아웃 요청을 보냄
            // 서버에서는 쿠키 만료 설정하여 반환함
            const response = await axios.post('/user/logout');
            const result = response.data || "데이터가 비어있음";
            if (result.result === true) {
                dispatch(DELETE_USER_INFO());
                dispatch(SET_LOGOUT());
                navigate("/");
            }
        } catch (error) {
            console.error('Logout Failed', error);
        }
    };

    useEffect(() => {
        if(isLogin) {
            requestLogout();
        } else {
            navigate(-1);
        }
    }, []);
    return null
};

export default Logout;
