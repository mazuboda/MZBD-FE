import styled from "styled-components";

const Refund = () => {
  return (
    <div style={{
      width: "1060px",
      margin: "0 auto",
    }}>
      <RefundTitle>결제취소</RefundTitle>
      <RefundText>결제를 취소하시겠습니까?</RefundText>
      <RefundSubTextWrap>
        <RefundSubTitle>결제 후 취소 시, 환불까지 최대 3일이 소요될 수 있습니다.</RefundSubTitle>
        <RefundSubDesc>*결제 후 취소는 픽업 3일 전까지 가능합니다.<br />*픽업일 기준 3일 이내 취소시 환불이 어렵습니다.</RefundSubDesc>
      </RefundSubTextWrap>
      <RefundButtonWrap>
        <CancelButton>취소하기</CancelButton>
        <RefundButton>탈퇴하기</RefundButton>
      </RefundButtonWrap>
    </div>
  );
};

const RefundTitle = styled.h2`
  padding-top: 60px;
  font-family: Noto Sans KR;
  font-size: 25px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.2em;
  text-align: center;
`;

const RefundText = styled.div`
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

const RefundSubTextWrap = styled.div`
  width: 405px;
  height: 116px;
  margin: 50px auto 0;
`;

const RefundSubTitle = styled.div`
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: -0.1em;
  text-align: center;
`;

const RefundSubDesc = styled.div`
  padding-top: 25px;

  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: -0.1em;
  text-align: center;
`;

const RefundButtonWrap = styled.div`
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

const RefundButton = styled.div`
  border-radius: 100px;
  background-color: #4A4A4A;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Refund;