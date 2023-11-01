import Nav from "@components/Nav";
import Tables from "@components/Tables";

import { styled } from "styled-components";

const Notice = () => {

  return (
    <div>
      <Nav />
      <NoticeContainer>
        <NoticeTitle>
          공지사항 및 이벤트
        </NoticeTitle>
        <Tables />
        <SearchContainer>
          <SearchInput type="text" />
          <SearchButton>검색</SearchButton>
        </SearchContainer>
      </NoticeContainer>
    </div >
  );
};

const NoticeContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NoticeTitle = styled.h2`
  margin-bottom: 30px;
  text-align: center;
  color: #4A4A4A;
  font-family: Noto Sans KR;
  font-size: 25px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0em;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  width: 400px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 4px 0 0 4px;
  outline: none;
`;

const SearchButton = styled.button`
  padding: 10px 15px;
  border: none;
  background-color: #7D7D7D;
  color: #FFFFFF;
  cursor: pointer;
  border-radius: 0 4px 4px 0;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: center;
`;

export default Notice;