import React, {useReducer, useState} from 'react';
import UserContext from "../../context/user/UserContext";

const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem("userInfo", action.userInfo)
            return true;
        case 'LOGOUT':
            localStorage.removeItem("userInfo")
            return false;
        default:
            return state;
    }
};

const UserProvider = ({children}) => {
    const initialData = {
        userName: '',
        userEmail: '',
        userPhone: '',
    };
    const [userInfo, dispatchUserInfo] = useReducer(userReducer, localStorage.getItem("userInfo") || initialData);

    return (
        <UserContext.Provider value={{userInfo, dispatchUserInfo}}>
            {children}
        </UserContext.Provider>
    );
};
export default UserProvider;