import Tables from "@components/Tables";

import { styled } from "styled-components";

const Notice = () => {

  return (
    <div style={{
      width: "1060px",
      margin: "0 auto",
    }}>
      <NoticeContainer>
        <NoticeTitle>
          공지사항 및 이벤트
        </NoticeTitle>
        <Tables search />
      </NoticeContainer>
    </div >
  );
};

const NoticeContainer = styled.div`
  padding: 163px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NoticeTitle = styled.h2`
  margin-bottom: 18px;
  text-align: center;
  color: #4A4A4A;
  font-family: Noto Sans KR;
  font-size: 25px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0em;
`;



export default Notice;