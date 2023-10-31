import Home from '@pages/Home/Home';
import Login from "@pages/Login/Login";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
