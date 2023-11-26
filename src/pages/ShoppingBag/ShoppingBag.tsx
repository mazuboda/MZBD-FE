import DataTable from "@components/DataTable";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import PauseCircleRoundedIcon from '@mui/icons-material/PauseCircleRounded';
import styled from "styled-components";

const ShoppingBag = () => {
  return (
    <div style={{
      width: "1060px",
      margin: "73px auto"
    }}>
      <ShoppingTitle>장바구니</ShoppingTitle>
      <DataTable />
      <TotalAmount>
        <TotalAmountText>
          <div>총</div>6<div>개의 상품금액</div>168,000<div>원</div><AddCircleRoundedIcon style={{ color: "#7D7D7D" }} />
          <div>배달비</div>21,000<div>원</div><PauseCircleRoundedIcon style={{ color: "#4A4A4A", transform: "rotate( 90deg )" }} />
          <div>합계</div>189,000<div>원</div>
        </TotalAmountText>
      </TotalAmount>
      <ButtonWrap>
        <RemoveButton>선택상품삭제</RemoveButton>
        <div style={{
          display: "flex", gap: "19px"
        }}>
          <SelectButton>선택 상품 주문</SelectButton>
          <TotalButton>전체 상품 주문</TotalButton>
        </div>
      </ButtonWrap>
    </div>
  );
};

const ShoppingTitle = styled.h2`
  margin-bottom: 18px;
  text-align: center;
  color: #4A4A4A;
  font-family: Noto Sans KR;
  font-size: 25px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0em;
`;

const TotalAmount = styled.div`
  width: 1060px;
  height: 100px;
  border-radius: 50px;
  background: #FF679D1A;
  margin-top: 40px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const TotalAmountText = styled.div`
  display: flex;
  gap: 12px;
  margin-right: 42px;

  font-family: Roboto;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: right;

  & > div {
    font-family: Noto Sans KR;
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: right;
    color: #4A4A4A;
  }
`;

const ButtonWrap = styled.div`
  width: 1060px;
  height: 70px;
  margin-top: 26px;
  display: flex;
  justify-content: space-between;
`;

const RemoveButton = styled.div`
  width: 100px;
  height: 30px;
  border-radius: 50px;
  background-color: #D9D9D9;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  color: #4A4A4A;
`;

const SelectButton = styled.div`
  width: 200px;
  height: 70px;
  border-radius: 50px;
  background-color: #7D7D7D;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: center;
  color: #FFFFFF;
`;

const TotalButton = styled.div`
  width: 200px;
  height: 70px;
  border-radius: 50px;
  background-color: #FF679D;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: center;
  color: #FFFFFF;
`;

export default ShoppingBag;