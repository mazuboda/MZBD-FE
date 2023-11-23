import styled from "styled-components";

const Resign = () => {
  return (
    <div style={{
      width: "1060px",
      margin: "0 auto",
    }}>
      <ResignTitle>탈퇴하기</ResignTitle>
      <ResignText>탈퇴하시겠습니까?</ResignText>
      <ResignButtonWrap>
        <CancelButton>취소하기</CancelButton>
        <ResignButton>탈퇴하기</ResignButton>
      </ResignButtonWrap>
    </div>
  );
};

const ResignTitle = styled.h2`
  padding-top: 60px;
  font-family: Noto Sans KR;
  font-size: 25px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.2em;
  text-align: center;
`;

const ResignText = styled.div`
  width: 343px;
  height: 109px;
  border-radius: 50px;
  background-color: #F7F7F7;
  margin: 120px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Noto Sans KR;
  font-size: 25px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -0.1em;
  text-align: center;
`;

const ResignButtonWrap = styled.div`
  width: 315px;
  height: 50px;
  display: flex;
  gap: 15px;
  margin: 50px auto 0;

  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: -0.1em;
  text-align: center;
  color: #FFFFFF;
`;

const CancelButton = styled.div`
  width: 150px;
  height: 50px;
  border-radius: 100px;
  background-color: #FF679D;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResignButton = styled.div`
  border-radius: 100px;
  background-color: #4A4A4A;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Resign;