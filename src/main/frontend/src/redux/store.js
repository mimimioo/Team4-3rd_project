import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import loginReducer from "./loginSlice"

export const store = configureStore({
    // 이런 방식도 됩니다.
    // reducer: {
    //     userReducer,
    //     loginReducer,
    // }
    // 또는
    // reducer: [userReducer, loginReducer],
    // 또는
    reducer: {
        user : userReducer,
        login : loginReducer,
    },
})