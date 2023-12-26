import {Route, Routes} from "react-router-dom";
import Test from "./components/Test";
import Main from "./components/Main";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/main" element={<Main />}></Route>
            <Route path="/test" element={<Test />}></Route>
            <Route path="/login" element={<SignInPage />}></Route>
        </Routes>
    </div>
  );
}

export default App;
