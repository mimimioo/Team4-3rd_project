import React, {useReducer} from 'react';
import LoginContext from "../../user/LoginContext";

const loginReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem("isLogin", "true")
            return true;
        case 'LOGOUT':
            localStorage.removeItem("isLogin")
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