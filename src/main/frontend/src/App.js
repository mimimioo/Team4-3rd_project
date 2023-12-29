import {Route, Routes} from "react-router-dom";
import Test from "./components/Test";
import Main from "./pages/MainPage";
import Community from "./pages/Community";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
<<<<<<< HEAD
import UsedMarket from "./pages/UsedMarket";
=======
import AuthContext from "./context/user/AuthContext";
import AuthProvider from "./provider/user/AuthProvider";
import LoginContext from "./context/user/LoginContext";
import LoginProvider from "./provider/user/LoginProvider";
import UserProvider from "./provider/user/UserProvider";
>>>>>>> c468337f0e4faaa0e213e7c16282707765d35ef0

function App() {

  return (
    <div className="App">
<<<<<<< HEAD
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/main" element={<Main />}></Route>
            <Route path="/test" element={<Test />}></Route>
            <Route path="/login" element={<SignInPage />}></Route>
            <Route path="/signup" element={<SignUpPage />}></Route>
            <Route path="/usedmarket" element={<UsedMarket />}></Route>
        </Routes>
=======
        <LoginProvider>
            <UserProvider>
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<Main />}></Route>
                        <Route path="/main" element={<Main />}></Route>
                        <Route path="/test" element={<Test />}></Route>
                        <Route path="/Community" element={<Community />}></Route>
                        <Route path="/login" element={<SignInPage />}></Route>
                        <Route path="/signup" element={<SignUpPage />}></Route>
                    </Routes>
                </AuthProvider>
            </UserProvider>
        </LoginProvider>

>>>>>>> c468337f0e4faaa0e213e7c16282707765d35ef0
    </div>
  );
}

export default App;
