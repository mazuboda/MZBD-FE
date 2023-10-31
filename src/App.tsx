import Home from '@pages/Home/Home';
import Login from "@pages/Login/Login";
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
      </Routes>
    </Router>
  );
}

export default App;
