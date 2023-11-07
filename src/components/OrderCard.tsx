import { styled } from "styled-components";

const OrderCard = () => {
  return (
    <OrderContainer>
      <LeftBox>
        <LeftTopBox>
          <OrderImg />
          <div style={{
            display: "flex",
            flexDirection: "column"
          }}>
            <LeftTopItem>
              <LeftTopLabel>주문명</LeftTopLabel>
              <LeftTopValue>생일케이크</LeftTopValue>
            </LeftTopItem>
            <LeftTopItem>
              <LeftTopLabel>픽업 일시</LeftTopLabel>
              <LeftTopValue>2023년 10월 17일 14:00</LeftTopValue>
            </LeftTopItem>
            <div style={{
              marginTop: "10px",
              display: "flex",
              flexDirection: "column",
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
            width: "276px",
            color: "#4A4A4A",
            fontFamily: "Noto Sans KR",
            fontSize: "10px",
            fontWeight: "400",
            lineHeight: "normal",
            marginTop: "44px"
          }}>*축하초, 데코, 축하 용품은 기본 제공되지 않습니다.</div>
        </LeftBottomBox>
      </LeftBox>
      <div style={{
        width: "1px",
        height: "327px",
        background: "#000000",
        margin: "27px 30px 46px 21px",
      }}></div>
      <RightBox>
        <RightTopBox>
          <RightTopItem>
            <RightTopLabel>
              주문자 정보
            </RightTopLabel>
          </RightTopItem>
          <div style={{
            display: "flex",
            flexDirection: "column"
          }}>
            <RightTopSubItem>
              <RightTopSubLabel>이름</RightTopSubLabel>
              <RightTopSubValue>김미주</RightTopSubValue>
            </RightTopSubItem>
            <RightTopSubItem>
              <RightTopSubLabel>연락처</RightTopSubLabel>
              <RightTopSubValue>010-1234-1234</RightTopSubValue>
            </RightTopSubItem>
            <RightTopSubItem>
              <RightTopSubLabel>주소</RightTopSubLabel>
              <RightTopSubValue>충청남도 아산시 순천향로 22, 31538</RightTopSubValue>
            </RightTopSubItem>
          </div>
          <RightTopItem>
            <RightTopLabel>
              배달지 정보
            </RightTopLabel>
          </RightTopItem>
          <RightTopSubItem>
            <RightTopSubLabel>이름</RightTopSubLabel>
            <RightTopSubValue>김미주</RightTopSubValue>
          </RightTopSubItem>
          <RightTopSubItem>
            <RightTopSubLabel>연락처</RightTopSubLabel>
            <RightTopSubValue>010-1234-1234</RightTopSubValue>
          </RightTopSubItem>
          <RightTopSubItem>
            <RightTopSubLabel>주소</RightTopSubLabel>
            <RightTopSubValue>충청남도 아산시 순천향로 22, 31538</RightTopSubValue>
          </RightTopSubItem>
        </RightTopBox>
        <RightBottomBox>
          <RightBottomItem>
            <RightBottomLabel>
              결제 정보
            </RightBottomLabel>
            <div style={{
              width: "194px",
              height: "1px",
              background: "#4A4A4A",
              marginTop: "39px"
            }}></div>
            <div style={{
              paddingLeft: "56px",
              paddingTop: "9px"
            }}>
              <RightBottomSubItem>
                <RightBottomSubLabel>가격</RightBottomSubLabel>
                <RightBottomSubValue>32,000원</RightBottomSubValue>
              </RightBottomSubItem>
              <RightBottomSubItem>
                <RightBottomSubLabel>굿즈 추가</RightBottomSubLabel>
                <RightBottomSubValue>2,000원</RightBottomSubValue>
              </RightBottomSubItem>
              <RightBottomSubItem>
                <RightBottomSubLabel>배달비</RightBottomSubLabel>
                <RightBottomSubValue>3,500원</RightBottomSubValue>
              </RightBottomSubItem>
              <RightBottomSubItem>
                <RightBottomSubLabel>할인 금액</RightBottomSubLabel>
                <RightBottomSubValue>3,000원</RightBottomSubValue>
              </RightBottomSubItem>
              <RightBottomSubItem>
                <RightBottomSubLabel>쿠폰 적용</RightBottomSubLabel>
                <RightBottomSubValue>3,000원</RightBottomSubValue>
              </RightBottomSubItem>
            </div>
            <TotalCount>
              <TotalLabel>합계</TotalLabel>
              <TotalValue>31,500원</TotalValue>
            </TotalCount>
          </RightBottomItem>
        </RightBottomBox>
      </RightBox>
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
  flex-direction: row;
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
  display: flex;
  flex-direction: row;
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

const RightBox = styled.div`
  width: 255px;
  padding-top: 39px;
`;

const RightTopBox = styled.div`
 width: 150px;
`;

const RightTopItem = styled.div`
  margin-bottom: 5px;
`;

const RightTopLabel = styled.div`
  /* padding-bottom: 9px; */
  color: #4A4A4A;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
`;

const RightTopSubItem = styled.div`
  width: 160px;
  display: flex;
  margin-bottom: 4px;
  gap: 19px;
`;

const RightTopSubLabel = styled.div`
  width: 45px;
  color: #4A4A4A;
  font-family: Noto Sans KR;
  font-size: 8px;
  font-weight: 500;
  line-height: normal;
`;

const RightTopSubValue = styled.div`
  width: 160px;
  color: #4A4A4A;
  font-family: Noto Sans KR;
  font-size: 8px;
  font-weight: 400;
  line-height: normal;
`;

const RightBottomBox = styled.div`
  
`;

const RightBottomItem = styled.div`
`;

const RightBottomLabel = styled.div`
  color: #4A4A4A;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  padding-top: 9px;
`;

const RightBottomSubItem = styled.div`
  width: 143;
  display: flex;
`;

const RightBottomSubLabel = styled.div`
  width: 45px;
  color: #4A4A4A;
  font-family: Noto Sans KR;
  font-size: 8px;
  font-weight: 400;
  line-height: normal;
`;

const RightBottomSubValue = styled.div`
  width: 68px;
  color: #4A4A4A;
  text-align: right;
  font-family: Noto Sans KR;
  font-size: 8px;
  font-weight: 400;
  line-height: normal;
`;

const TotalCount = styled.div`
  width: 143;
  color: #4A4A4A;
  font-family: Noto Sans KR;
  font-size: 10px;
  font-weight: 700;
  line-height: normal;
  display: flex;
  gap: 52px;
  padding-top: 6px;
  padding-left: 56px;
`;

const TotalLabel = styled.div`

`;

const TotalValue = styled.div`
  text-align: right;
`;

export default OrderCard;