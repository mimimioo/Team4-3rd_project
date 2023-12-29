import React, {useReducer, useState} from 'react';
import AuthContext from "../../context/user/AuthContext";

const tokenReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem("token", action.token)
            return true;
        case 'LOGOUT':
            localStorage.removeItem("token")
            return false;
        default:
            return state;
    }
};

const AuthProvider = ({children}) => {
    const [token, dispatchToken] = useReducer(tokenReducer, localStorage.getItem("token") || '');

    return (
        <AuthContext.Provider value={{token, dispatchToken}}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;