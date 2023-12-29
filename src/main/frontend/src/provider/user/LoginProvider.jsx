import React, {useState} from 'react';
import LoginContext from "../../context/user/LoginContext";

const LoginProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <LoginContext.Provider value={{isLogin, setIsLogin}}>
            {children}
        </LoginContext.Provider>
    );
};
export default LoginProvider;