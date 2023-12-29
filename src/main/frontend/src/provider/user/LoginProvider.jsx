import React, {useReducer, useState} from 'react';
import LoginContext from "../../context/user/LoginContext";

const loginReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem("isLogin", "true")
            return true;
        case 'LOGOUT':
            localStorage.setItem("isLogin", "false")
            return false;
        default:
            return state;
    }
};

const LoginProvider = ({children}) => {
    const [isLogin, dispatchLogin] = useReducer(
        loginReducer,
        localStorage.getItem("isLogin")==="true" || false
    );

    return (
        <LoginContext.Provider value={{isLogin, dispatchLogin}}>
            {children}
        </LoginContext.Provider>
    );
};
export default LoginProvider;