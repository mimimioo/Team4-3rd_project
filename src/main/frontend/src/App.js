import {Route, Routes} from "react-router-dom";
import Test from "./components/Test";
import Main from "./pages/MainPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import AuthProvider from "./provider/user/AuthProvider";
import LoginProvider from "./provider/user/LoginProvider";
import UserProvider from "./provider/user/UserProvider";

function App() {
  return (
    <div className="App">
        <AuthProvider>
            <LoginProvider>
                <UserProvider>
                    <Routes>
                        <Route path="/" element={<Main />}></Route>
                        <Route path="/main" element={<Main />}></Route>
                        <Route path="/test" element={<Test />}></Route>
                        <Route path="/login" element={<SignInPage />}></Route>
                        <Route path="/signup" element={<SignUpPage />}></Route>
                    </Routes>
                </UserProvider>
            </LoginProvider>
        </AuthProvider>
    </div>
  );
}

export default App;
