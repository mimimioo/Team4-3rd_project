import React, {useReducer, useState} from 'react';
import UserContext from "../../context/user/UserContext";

const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem("userName", action.userInfo.userName);
            localStorage.setItem("userEmail", action.userInfo.userEmail);
            localStorage.setItem("userPhone", action.userInfo.userPhone);
            localStorage.setItem("userNickname", action.userInfo.userNickname);
            localStorage.setItem("userIntroduce", action.userInfo.userIntroduce);
            console.log(action.userInfo);

            return action.userInfo;
        case 'LOGOUT':
            localStorage.removeItem("userName");
            localStorage.removeItem("userEmail");
            localStorage.removeItem("userPhone");
            localStorage.removeItem("userNickname");
            localStorage.removeItem("userIntroduce");
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
        userNickname: '',
        userIntroduce: '',
    };
    const [userInfo, dispatchUserInfo] = useReducer(userReducer, localStorage.getItem("userName") || initialData);

    return (
        <UserContext.Provider value={{userInfo, dispatchUserInfo}}>
            {children}
        </UserContext.Provider>
    );
};
export default UserProvider;