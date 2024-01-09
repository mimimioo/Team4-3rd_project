# 리덕스 설명서
### 1. 리덕스 개념
- 리덕스(Redux)는 { contextAPI } 처럼 상태 변수를 전역에서 쓸 수 있도록 도와주는 라이브러리입니다.
- 리덕스에서 제공하는 hooks 를 통해 모든 컴포넌트에서 간편하게 접근/수정이 가능합니다. hook이 없더라도 접근하는 방법은 있습니다.
- 기존 리덕스도 문제없이 사용되지만, 리덕스 툴킷은 좀 더 간편하게 코드를 구성할 수 있도록 새롭게 나온 버전입니다.
- 리덕스 툴킷은 **Thunk 미들웨이** (비동기 dispatch를 위한 서브 라이브러리)가 자동 지원, 적용됩니다.
  - *이 프로젝트에서는 리덕스 개선 버전인 리덕스 툴킷이 사용됩니다.*
- 리덕스 용어 ) 전역 상태 변수 저장소 : **store**
- 리덕스 용어 ) 상태 관리 함수 : **reducer(여러개 존재하며, 프로젝트가 커질수록 많아짐)**
- 리덕스 용어 ) 상태 관리 접근 함수 : **dispatch**
- 리덕스 용어 ) 상태 변경을 일으키는, {이벤트 또는 작업}을 나타내는 객체 : **action**

### 2. 리덕스 작동 원리
- 주로 애플리케이션은 하나의 store가 존재하며, 전역 상태 변수의 양에 따라 여러개의 리듀서로 구성됩니다.
- 디스패치(dispatch) 함수가 액션(action) 객체를 인자로 받으면, 디스패치 함수는 적절한 리듀서를 찾아 실행하고, 리듀서 함수는 값을 반환합니다.
- 반환된 값이 store에 반영됩니다.

### 3.리덕스의 *store* 란?
- 리덕스에는 store라는 개념이 있습니다. 모든 상태 변수는 store 라고 하는 전역 저장소에서 관리됩니다.
- store는 여러개 생성 가능하지만, 공식문서에서는 앱 당 하나의 store만 생성하여 사용하는 것을 권장하고 있습니다. 특별한 경우가 아니라면 굳이 2개 이상의 store 를 만들지 않는게 유지/보수 측면에서도 좋습니다. 또 2개 이상의 store를 사용할 경우, 복잡성이 높아질 수 있고 리덕스의 특정 기능에 제한이 생길 수 있습니다.
- 생성된 store(전역 상태 변수 저장소)에는 모든 컴포넌트가 접근 가능합니다.
- store에서 공유할 상태 변수 범위는 "react-redux" 에서 제공되는 "Provider" 컴포넌트로 감싼 하위 컴포넌트들입니다. 일반적으로 index.js의 최상위 컴포넌트에 감싸게 됩니다.
  - *이 프로젝트의 store.js는 상태 관리 저장소 store를 생성합니다.*
  - *이 프로젝트에서는 index.js에 Provider 컴포넌트를 구성하였습니다.*
  
### 4.리덕스 툴킷의 *createSlice()*
- 기존 *리덕스*와는 다르게 *리덕스 툴킷*은 reducer, action 의 생성 및 액션 타입을 한번에 정의할 수 있도록 *createSlice()* 를 제공합니다.
  - 자세한 설명은 주석이 달린 *loginSilce.js* 참고하세요!

### 5. 리덕스 상태값 사용을 위한 hook, *useSelector()*
- 컴포넌트에서 store에 접근하는 가장 쉬운 방법은 useSelector()를 활용하는 것입니다.
- 사용 예시) const mySliceState = useSelector((state) => state.mySliceName);
- useSelector 는 store 에 접근하는 훅으로 state 는 store 에서 관리되는 상태 변수들을 나타내며,
- state.<store.js에 등록된 리듀서함수 이름 또는 리듀서 함수 키값> 으로 store 의 변수에 접근이 가능합니다.
- 현재 store.js 기준으로는 state.login.<loginSilce.js의 상태값 이름>

### 6. 리덕스 상태값 업데이트를 위한 hook, *useDispatch()*
- *const dispatch = useDispatch();* 을 통해 *dispatch* 를 가져올 수 있습니다.
- **dispatch** 에 *dispatch(login());* 또는 *dispatch(logout());* 처럼 인자로 액션을 건네주면, *loginSlice.js* 에 정의된 리듀서 함수가 실행되며 그 반환값이 *store* 내부의 *login*의 상태값으로 업데이트 됩니다.
- 액션에 해당하는 *login(), logout()* 의 인자로 값을 건네주면, 리듀서 함수에서 *action.payload* 로 접근이 가능합니다.
- ex) dispatch(login("로그인 완료!")) => action.payload === "로그인 완료!"