import React, {useContext, useEffect} from 'react';
import AuthContext from "../../context/user/AuthContext";
import LoginContext from "../../context/user/LoginContext";
import UserContext from "../../context/user/UserContext";
import {Link, useNavigate} from "react-router-dom";
import {type} from "@testing-library/user-event/dist/type";

const Logout = () => {
    const {token, dispatchToken} = useContext(AuthContext);
    const {isLogin, dispatchLogin} = useContext(LoginContext);
    const {userInfo, dispatchUserInfo} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
            dispatchToken({type : "LOGOUT"});
            dispatchLogin({type : "LOGOUT"})
            dispatchUserInfo({type : "LOGOUT"})
            navigate("/")
    }, []);

    return '';
};

export default Logout;