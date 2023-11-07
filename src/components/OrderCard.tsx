import { styled } from "styled-components";

const OrderCard = () => {
  return (
    <OrderContainer>
      <LeftBox>
        <LeftTopBox>
          <OrderImg />
          <LeftTopItem>
            <LeftTopLabel>주문명</LeftTopLabel>
            <LeftTopValue>생일케이크</LeftTopValue>
          </LeftTopItem>
          <LeftTopItem>
            <LeftTopLabel>픽업 일시</LeftTopLabel>
            <LeftTopValue>2023년 10월 17일 14:00</LeftTopValue>
          </LeftTopItem>
          <div style={{
            marginTop: "10px"
          }}>
            <LeftTopSubItem>
              <LeftTopSubLabel>수량</LeftTopSubLabel>
              <LeftTopSubValue>1개</LeftTopSubValue>
            </LeftTopSubItem>
            <LeftTopSubItem>
              <LeftTopSubLabel>사이즈</LeftTopSubLabel>
              <LeftTopSubValue>1호</LeftTopSubValue>
            </LeftTopSubItem>
            <LeftTopSubItem>
              <LeftTopSubLabel>문구</LeftTopSubLabel>
              <LeftTopSubValue>사랑아 보영해</LeftTopSubValue>
            </LeftTopSubItem>
            <LeftTopSubItem>
              <LeftTopSubLabel>모양</LeftTopSubLabel>
              <LeftTopSubValue>원형</LeftTopSubValue>
            </LeftTopSubItem>
            <LeftTopSubItem>
              <LeftTopSubLabel>맛</LeftTopSubLabel>
              <LeftTopSubValue>초코시트, 바닐라 샌드, 버터크림</LeftTopSubValue>
            </LeftTopSubItem>
            <LeftTopSubItem>
              <LeftTopSubLabel>특이사항</LeftTopSubLabel>
              <LeftTopSubValue>많이 달지 않게 해주세요.</LeftTopSubValue>
            </LeftTopSubItem>
          </div>
        </LeftTopBox>
        <LeftBottomBox>
          <LeftBottomItem>
            <LeftBottomLabel>
              추가구매
            </LeftBottomLabel>
            <div>
              <LeftBottomValue>마주보다 굿즈 펑카드</LeftBottomValue>
              <LeftBottomValue>마주보다 굿즈 생일카드</LeftBottomValue>
              <LeftBottomValue>마주보다 굿즈 고깔모자</LeftBottomValue>
              <LeftBottomValue>마주보다 굿즈 폭죽</LeftBottomValue>
            </div>
          </LeftBottomItem>
          <div style={{
            color: "#4A4A4A",
            fontFamily: "Noto Sans KR",
            fontSize: "10px",
            fontWeight: "400",
            lineHeight: "normal",
            marginTop: "44px"
          }}>*축하초, 데코, 축하 용품은 기본 제공되지 않습니다.</div>
        </LeftBottomBox>
      </LeftBox>
    </OrderContainer>
  );
};

const OrderContainer = styled.div`
  border-radius: 25px;
  background: rgba(255, 103, 157, 0.50);
  width: 700px;
  height: 400px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`;

const LeftBox = styled.div`
  width: 450px;
  margin: 40px auto auto 37px;
  display: flex;
  flex-direction: column;
`;

const OrderImg = styled.img`
  border-radius: 25px;
  background: #FFFFFF;
  width: 145px;
  height: 150px;
  flex-shrink: 0;
  margin-right: 23px;
`;

const LeftTopBox = styled.div`
  width: 190px;
`;

const LeftTopItem = styled.div`
  display: flex;
  gap: 17px;
`;

const LeftTopLabel = styled.div`
  width: 47px;
  color: #4A4A4A;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
`;

const LeftTopValue = styled.div`
  color: #4A4A4A;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
`;

const LeftTopSubItem = styled.div`
  display: flex;
  margin-bottom: 4px;
  gap: 19px;
`;

const LeftTopSubLabel = styled.div`
  width: 45px;
  color: #4A4A4A;
  font-family: Noto Sans KR;
  font-size: 8px;
  font-weight: 500;
  line-height: normal;
`;
const LeftTopSubValue = styled.div`
  width: 156px;
  color: #4A4A4A;
  font-family: Noto Sans KR;
  font-size: 8px;
  font-weight: 400;
  line-height: normal;
`;

const LeftBottomBox = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #4A4A4A;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
`;

const LeftBottomItem = styled.div`
  display: flex;
  gap: 15px;
`;
const LeftBottomLabel = styled.div`
  color: #4A4A4A;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
`;
const LeftBottomValue = styled.div`
  color: #4A4A4A;
  font-family: Noto Sans KR;
  font-size: 10px;
  font-weight: 400;
  line-height: normal;
`;

export default OrderCard;