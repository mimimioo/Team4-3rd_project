import React, {useReducer, useState} from 'react';
import UserContext from "../../user/UserContext";

const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem("userName", action.userInfo.userName);
            localStorage.setItem("userEmail", action.userInfo.userEmail);
            localStorage.setItem("userPhone", action.userInfo.userPhone);
            localStorage.setItem("userNickname", action.userInfo.userNickname);
            localStorage.setItem("userIntroduce", action.userInfo.userIntroduce);
            localStorage.setItem("userProfileImg", action.userInfo.userProfileImg);
            console.log(action.userInfo);

            return action.userInfo;
        case 'LOGOUT':
            localStorage.removeItem("userName");
            localStorage.removeItem("userEmail");
            localStorage.removeItem("userPhone");
            localStorage.removeItem("userNickname");
            localStorage.removeItem("userIntroduce");
            localStorage.removeItem("userProfileImg");
            return false;
        default:
            return state;
    }
};

const UserProvider = ({children}) => {
    const initialData = {
        userName: localStorage.getItem("userName") || "",
        userEmail: localStorage.getItem("userEmail") || "",
        userPhone: localStorage.getItem("userPhone") || "",
        userNickname: localStorage.getItem("userNickname") || "",
        userIntroduce: localStorage.getItem("userIntroduce") || "",
        userProfileImg: localStorage.getItem("userProfileImg") || "/image/baseProfile.png"
    };
    const [userInfo, dispatchUserInfo] = useReducer(userReducer ,initialData);

    return (
        <UserContext.Provider value={{userInfo, dispatchUserInfo}}>
            {children}
        </UserContext.Provider>
    );
};
export default UserProvider;