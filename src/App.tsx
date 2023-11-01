import Home from '@pages/Home/Home';
import Login from "@pages/Login/Login";
import MyPage from "@pages/MyPage/MyPage";
import Notice from "@pages/Notice/Notice";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
