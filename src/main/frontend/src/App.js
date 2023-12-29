import {Route, Routes} from "react-router-dom";
import Test from "./components/Test";
import Main from "./pages/MainPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import UsedMarket from "./pages/UsedMarket";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/main" element={<Main />}></Route>
            <Route path="/test" element={<Test />}></Route>
            <Route path="/login" element={<SignInPage />}></Route>
            <Route path="/signup" element={<SignUpPage />}></Route>
            <Route path="/usedmarket" element={<UsedMarket />}></Route>
        </Routes>
    </div>
  );
}

export default App;
