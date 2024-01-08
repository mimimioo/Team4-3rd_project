import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userName: localStorage.getItem('userName') || '',
        userEmail: localStorage.getItem('userEmail') || '',
        userPhone: localStorage.getItem('userPhone') || '',
        userNickname: localStorage.getItem('userNickname') || '',
        userIntroduce: localStorage.getItem('userIntroduce') || '',
        userProfileImg: localStorage.getItem('userProfileImg') || '/image/baseProfile.png',
    },
    reducers: {
        SET_USER_INFO: (state, action) => {
            localStorage.setItem('userName', action.payload.userName);
            localStorage.setItem('userEmail', action.payload.userEmail);
            localStorage.setItem('userPhone', action.payload.userPhone);
            localStorage.setItem('userNickname', action.payload.userNickname);
            localStorage.setItem('userIntroduce', action.payload.userIntroduce);
            localStorage.setItem('userProfileImg', action.payload.userProfileImg);
            return action.payload;
        },
        DELETE_USER_INFO: (state) => {
            localStorage.removeItem('userName');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userPhone');
            localStorage.removeItem('userNickname');
            localStorage.removeItem('userIntroduce');
            localStorage.removeItem('userProfileImg');
            return {};
        },
    },
});

export const { SET_USER_INFO, DELETE_USER_INFO } = userSlice.actions;

export default userSlice.reducer
