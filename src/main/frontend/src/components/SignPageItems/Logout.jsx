import React, {useContext, useEffect} from 'react';
import LoginContext from "../../context/user/LoginContext";
import UserContext from "../../context/user/UserContext";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";


const Logout = () => {
    const { isLogin, dispatchLogin } = useContext(LoginContext);
    const { userInfo, dispatchUserInfo } = useContext(UserContext);
    const navigate = useNavigate();

    const requestLogout = async () => {
        try {
            const response = await axios.post('http://192.168.85.252:8080/user/logout');
            const result = response.data || "데이터가 비어있음";
            if (result.result === true) {
                dispatchUserInfo({ type: "LOGOUT" })
                dispatchLogin({ type: "LOGOUT" })
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
