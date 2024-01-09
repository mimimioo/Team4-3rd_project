import {createSlice} from "@reduxjs/toolkit";

// 복잡해 보이지만 사실.. 아래와 같이 간단한 형태입니다.
// const loginSlice = createSlice({name, initialState, reducers});
// createSlice() 는 name, reducer, actions 를 반환(return) 합니다.
// 반환값의 쓰임은 맨 아래에!
const loginSlice = createSlice({
    // 슬라이스 이름
    // 코드가 복잡해지면 Redux DevTools 라는 것을 통해, 상태와 액션 등의 정보를 추적 확인하는데 쓰입니다.
    // 지금 당장은 사용X
    name: 'login',
    // initialState : 초기값
    initialState: {
        isLogin : localStorage.getItem('isLogin') === 'true' || false
    },
    // reducers : 리듀서 함수 정의부, 객체로 되어 있고, { 액션1 : 리듀서 함수1, 액션2 : 리듀서 함수2 ... } 형태로 이루어져 있습니다.
    reducers: {
        // 이 경우 액션 type 은 login, logout 이며, 타입에 따라 value 값으로 다른 리듀서 함수가 정의되어 있습니다.
        // state 는 현재 store 에 저장된 값 입니다. 즉, 현재값.
        // action 객체에는 type 뿐만 아니라 payload 도 존재합니다. 추가적인 데이터를 넘겨주면 payload 를 통해 리듀서 함수에 들어옵니다.
        SET_LOGIN: (state, action) => {
            localStorage.setItem('isLogin', 'true');
            // 반환값이 store 의 'login'에 반영됩니다.
            return { ...state, isLogin: true };
        },
        SET_LOGOUT: (state, action) => {
            localStorage.removeItem('isLogin');
            return { ...state, isLogin: false };
        },
    },
});


// dispatch 에 넘겨줄 actions 를 export 합니다.
// actions 에는 type 이 담겨 있습니다. 현재 파일에는 actions.login, logout이 있고,
// 아래 코드는 구조 분해 할당으로 각각을 export 합니다.
export const { SET_LOGIN, SET_LOGOUT } = loginSlice.actions;

// export default 된 리듀서는 store.js 에서 등록하였습니다.
export default loginSlice.reducer