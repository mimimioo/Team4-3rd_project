import React, {useReducer, useState} from 'react';
import UserContext from "../../context/user/UserContext";

const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem("userName", action.userInfo.userName);
            localStorage.setItem("userEmail", action.userInfo.userEmail);
            localStorage.setItem("userPhone", action.userInfo.userPhone);
            return action.userInfo;
        case 'LOGOUT':
            localStorage.removeItem("userInfo");
            localStorage.removeItem("userEmail");
            localStorage.removeItem("userPhone");
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
    const [userInfo, dispatchUserInfo] = useReducer(userReducer, localStorage.getItem("userName") || initialData);

    return (
        <UserContext.Provider value={{userInfo, dispatchUserInfo}}>
            {children}
        </UserContext.Provider>
    );
};
export default UserProvider;