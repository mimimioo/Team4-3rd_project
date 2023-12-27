import {Route, Routes} from "react-router-dom";
import Test from "./components/Test";
import Main from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/main" element={<Main />}></Route>
            <Route path="/test" element={<Test />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
    </div>
  );
}

export default App;
