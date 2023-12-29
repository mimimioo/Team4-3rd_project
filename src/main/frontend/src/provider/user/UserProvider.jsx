import React, {useState} from 'react';
import UserContext from "../../context/user/UserContext";

const UserProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({
        userName: '',
        userEmail: '',
        userPhone: '',
    });

    return (
        <UserContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </UserContext.Provider>
    );
};
export default UserProvider;