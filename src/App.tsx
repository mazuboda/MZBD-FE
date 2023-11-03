import Nav from "@components/Nav";
import Home from '@pages/Home/Home';
import Login from "@pages/Login/Login";
import MyPage from "@pages/MyPage/MyPage";
import Notice from "@pages/Notice/Notice";
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
          </Routes>
        </ContentContainer>
      </RootContainer>
    </Router>
  );
}
const RootContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1060px 1fr;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-column: 1 / 4;
  /* grid-template-columns: repeat(12, 1fr); */
  grid-gap: 24px;
`;

export default App;
