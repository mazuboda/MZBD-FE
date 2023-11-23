import Footer from "@components/Footer";
import Nav from "@components/Nav";
import Home from '@pages/Home/Home';
import Login from "@pages/Login/Login";
import Map from "@pages/Map/Map";
import MyPage from "@pages/MyPage/MyPage";
import Notice from "@pages/Notice/Notice";
import Refund from "@pages/Refund/Refund";
import Resign from "@pages/Resign/Resign";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { styled } from "styled-components";
import './App.css';

function App() {
  return (
    <Router>
      <RootContainer>
        <Nav />
        <ContentContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/store" element={<Map />} />
            <Route path="/resign" element={<Resign />} />
            <Route path="/refund" element={<Refund />} />
          </Routes>
        </ContentContainer>
        <Footer />
      </RootContainer>
    </Router>
  );
}
const RootContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1060px 1fr;
  grid-template-rows: auto auto auto;
`;

const ContentContainer = styled.div`
  grid-column: 1 / 4;
`;

export default App;
