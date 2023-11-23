import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import InstragramIcon from "@styles/InstragramIcon";
import styled from "styled-components";


const StoreInfo = () => {
  return (
    <>
      <InfoWindowContainer>
        <InfoWindowHeader>
          {/* <CloseOutlinedIcon
            style={{
              position: "absolute",
              right: "18px",
              top: "23px",
              cursor: "pointer",
              width: "20",
              height: "19",
              color: "#7D7D7D",
            }}
          /> */}
          <InfoWindowHeaderTitle>
            마주봄케이크
          </InfoWindowHeaderTitle>
          <InstragramIcon />
        </InfoWindowHeader>
        <InfoWindowHiright />
        <InfoWindowBody>
          <InfoWindowBodyTitle>상세정보</InfoWindowBodyTitle>
          <InfoWindowTopBody>
            <InfoWindowImageWrap>
              <InfoWindowImage />
              <InfoWindowRating>
                <div style={{
                  color: "#FEE500",
                }}>
                  <StarRoundedIcon fontSize="small" />
                  <StarRoundedIcon fontSize="small" />
                  <StarRoundedIcon fontSize="small" />
                  <StarRoundedIcon fontSize="small" />
                  <StarOutlineRoundedIcon fontSize="small" />
                </div>
                <InfoWindowRatingText>4.0</InfoWindowRatingText>
              </InfoWindowRating>
            </InfoWindowImageWrap>
            <InfoWindowStoreWrap>
              <InfoWindowStoreItem>
                <InfoWindowStoreLabel style={{
                  fontWeight: "700",
                  color: "#FF679D"
                }}>당일 구매 가능 수량</InfoWindowStoreLabel>
                <InfoWindowStoreValue>1개</InfoWindowStoreValue>
              </InfoWindowStoreItem>
              <InfoWindowStoreItem>
                <InfoWindowStoreLabel>거리</InfoWindowStoreLabel>
                <InfoWindowStoreValue>1.4km</InfoWindowStoreValue>
              </InfoWindowStoreItem>
              <InfoWindowStoreItem>
                <InfoWindowStoreLabel>영업시간</InfoWindowStoreLabel>
                <InfoWindowStoreValue>11:00 ~ 18:00</InfoWindowStoreValue>
              </InfoWindowStoreItem>
              <InfoWindowStoreItem>
                <InfoWindowStoreLabel>휴무일</InfoWindowStoreLabel>
                <InfoWindowStoreValue style={{ fontFamily: "Noto Sans KR" }}>매주 일요일</InfoWindowStoreValue>
              </InfoWindowStoreItem>
              <InfoWindowStoreItem>
                <InfoWindowStoreLabel>배달/픽업 가능</InfoWindowStoreLabel>
                <InfoWindowStoreValue>041-430-1234</InfoWindowStoreValue>
              </InfoWindowStoreItem>
            </InfoWindowStoreWrap>
          </InfoWindowTopBody>
          <InfoWindowMidBody>
            <InfoWindowBodySubTitle>공지사항</InfoWindowBodySubTitle>
            <InfoWindowNotice>
              <ol style={{
                margin: "0",
                padding: "0",
                listStyle: "none",
              }}>
                <InfoWindowNoticeList>
                  9.28 -10.3추석 연휴 휴무입니다.
                </InfoWindowNoticeList>
                <InfoWindowNoticeList>
                  9.28 -10.3추석 연휴 휴무입니다.
                </InfoWindowNoticeList>
              </ol>
            </InfoWindowNotice>
            <InfoWindowNoticeImageWrap>
              <ArrowBackIosRoundedIcon style={{ color: "#7D7D7D" }} />
              <InfoWindowNoticeImage>
                <img src="" alt="" />
              </InfoWindowNoticeImage>
              <ArrowForwardIosRoundedIcon />
            </InfoWindowNoticeImageWrap>
          </InfoWindowMidBody>
          <InfoWindowBottomBody>
            <InfoWindowBodySubTitle>후기<div>(3)</div></InfoWindowBodySubTitle>
            <InfoWindowReview>
              <InfoWindowReviewImage />
              <InfoWindowReviewRating>
                <StarRoundedIcon fontSize="small" />
                <StarRoundedIcon fontSize="small" />
                <StarRoundedIcon fontSize="small" />
                <StarRoundedIcon fontSize="small" />
                <StarOutlineRoundedIcon fontSize="small" />
              </InfoWindowReviewRating>
              <InfoWindowReviewText>
                마주봄케이크에서 주문했는데 사장님이 친절하시고 케이크가 맛있어요. 일대일 채팅으로 요구사항 꼼꼼히 확인해주셔서 만족스러운 케이크 받았어요 감사합니다. 또 주문할게요 번창하세요~!! ...
              </InfoWindowReviewText>
              <InfoWindowReviewDate>2023.10.17. 작성</InfoWindowReviewDate>
            </InfoWindowReview>
          </InfoWindowBottomBody>
        </InfoWindowBody>
      </InfoWindowContainer>
    </>
  );
};

const InfoWindowContainer = styled.div`
  min-width: 451px;
  background-color: #FFFFFF;
  border-radius: 10px;
  border: 1px #D9D9D9 solid;
`;

const InfoWindowHeader = styled.div`
  position: relative;
  display: flex;
  gap: 5px;
  padding: 19px 0 15px 31px;
`;

const InfoWindowHeaderTitle = styled.div`
  font-family: Noto Sans KR;
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.2em;
  color: #4A4A4A;
`;

const InfoWindowHiright = styled.hr`
  border-top: 1px solid #D9D9D9;
  margin: 0;
`;

const InfoWindowBody = styled.div`
  padding: 7px 32px 14px 32px;
  display: flex;
  flex-direction: column;
`;

const InfoWindowBodyTitle = styled.div`
  font-family: Noto Sans KR;
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.2em;
  color: #4A4A4A;
  padding-bottom: 11px;
`;

const InfoWindowBodySubTitle = styled.div`
  font-family: Noto Sans KR;
  font-weight: 500;
  line-height: 17px;
  margin-bottom: 8px;
  display: flex;
  gap: 3px;

  & > div {
    font-family: Roboto;
  }
`;

const InfoWindowTopBody = styled.div`
  display: flex;
`;

const InfoWindowImageWrap = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
`;

const InfoWindowImage = styled.img`
  width: 120px;
  height: 120px;
  background-color: #D9D9D9;
  border-radius: 50px;
`;

const InfoWindowRating = styled.div`
  width: 100px;
  display: flex;
  margin-top: 8px;
  align-items: center;
`;

const InfoWindowRatingText = styled.div`
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  line-height: 14px;
  margin-left: 8px;
`;

const InfoWindowStoreWrap = styled.div`
  width: 185px;
  display: flex;
  flex-direction: column;
  margin-left: 43px;
`;

const InfoWindowStoreItem = styled.div`
  display: flex;
  gap: 20px;
  padding-bottom: 7px;
`;

const InfoWindowStoreLabel = styled.div`
  width: 73px;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: -0.2em;
`;

const InfoWindowStoreValue = styled.div`
  width: 90px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.1em;
  text-align: right;
`;

const InfoWindowMidBody = styled.div`
  margin-top: 23px;
`;

const InfoWindowNotice = styled.div`

`;

const InfoWindowNoticeList = styled.li`
  font-family: Noto Sans KR;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0em;
  display: flex;
  align-items: center;
  list-style-type: none;
  margin-bottom: 5px;

  &::before {
    content: "▶";
    padding-right: 3px;
  }
`;

const InfoWindowNoticeImageWrap = styled.div`
  width: 390px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px auto 0px;
  gap: 19px;
`;

const InfoWindowNoticeImage = styled.div`
  width: 280px;
  height: 80px;
  background-color: #7D7D7D;
`;

const InfoWindowBottomBody = styled.div`
  margin-top: 12px;
`;

const InfoWindowReview = styled.div`
  width: 250px;
  height: 263px;
  margin: 7px auto;
`;

const InfoWindowReviewImage = styled.div`
  height: 159px;
  background-color: #7D7D7D;
`;

const InfoWindowReviewRating = styled.div`
  color: #FEE500;
`;

const InfoWindowReviewText = styled.div`
  padding: 5px;
  height: 56px;
  font-family: Noto Sans KR;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
  color: #4A4A4A;
  background-color: #F8F8F8;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

const InfoWindowReviewDate = styled.div`
  text-align: right;
  color: #7D7D7D;
  font-family: Noto Sans KR;
  font-size: 8px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
`;

export default StoreInfo;