import {Route, Routes} from "react-router-dom";
import Test from "./components/Test";
import Main from "./pages/MainPage";
import Community from "./pages/Community";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import UsedMarket from "./pages/UsedMarket";
import Logout from "./components/SignPageItems/Logout";
import MyPage from "./pages/MyPage";
import axios from 'axios';

function App() {

  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/main" element={<Main />}></Route>
            <Route path="/test" element={<Test />}></Route>
            <Route path="/Community" element={<Community />}></Route>
            <Route path="/login" element={<SignInPage />}></Route>
            <Route path="/signup" element={<SignUpPage />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/mypage" element={<MyPage />}></Route>
            <Route path="/usedmarket" element={<UsedMarket />}></Route>
        </Routes>
    </div>
  );
}

export default App;
