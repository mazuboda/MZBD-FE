import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import styled from "styled-components";

interface ReviewModalProps {
  onClose: () => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({
  onClose
}) => {
  return (
    <ReviewModalContainer>
      <ReviewModalTitle>후기</ReviewModalTitle>
      <CloseOutlinedIcon
        style={{
          position: "absolute",
          right: "18px",
          top: "23px",
          cursor: "pointer",
          width: "20",
          height: "19",
          color: "#7D7D7D",
        }}
        onClick={onClose}
      />
      <InfoWindowReviewRating>
        <StarRoundedIcon fontSize="large" />
        <StarRoundedIcon fontSize="large" />
        <StarRoundedIcon fontSize="large" />
        <StarRoundedIcon fontSize="large" />
        <StarOutlineRoundedIcon fontSize="large" />
        <InfoWindowRatingText>4.0</InfoWindowRatingText>
      </InfoWindowReviewRating>
      <div style={{ marginBottom: "15px", width: "200px", height: "150px", backgroundColor: "#F7F7F7" }}></div>
      <InfoWindowReviewText>마주봄케이크에서 주문했는데 사장님이 친절하시고 케이크가 맛있어요. 일대일 채팅으로 요구사항 꼼꼼히 확인해주셔서 만족스러운 케이크 받았어요 감사합니다. 또 주문할게요 번창하세요~!!마주봄케이크에서 주문했는데 사장님이 친절하시고 케이크가 맛있어요. 일대일 채팅으로 요구사항 꼼꼼히 확인해주셔서 만족스러운 케이크 받았어요 감사합니다. 또 주문할게요 번창하세요~!!마주봄케이크에서 주문했는데 사장님이 친절하시고 케이크가 맛있어요. 일대일 채팅으로 요구사항 꼼꼼히 확인해주셔서 만족스러운 케이크 받았어요 감사합니다. 또 주문할게요 번창하세요~!!마주봄케이크에서 주문했는데 사장님이 친절하시고 케이크가 맛있어요. 일대일 채팅으로 요구사항 꼼꼼히 확인해주셔서 만족스러운 케이크 받았어요 감사합니다. 또 주문할게요 번창하세요~!!마주봄케이크에서 주문했는데 사장님이 친절하시고 케이크가 맛있어요. 일대일 채팅으로 요구사항 꼼꼼히 확인해주셔서 만족스러운 케이크 받았어요 감사합니다. 또 주문할게요 번창하세요~!!</InfoWindowReviewText>
      <InfoWindowReviewDate>2023.10.17. 작성</InfoWindowReviewDate>
    </ReviewModalContainer>
  );
};

const ReviewModalContainer = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 10px;
  border: 1px solid #4A4A4A;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 45%;
  left: 45%;
  z-index: 1000;
`;

const ReviewModalTitle = styled.div`
  margin-top: 36.45px;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  color: #4A4A4A;
`;

const InfoWindowReviewRating = styled.div`
  color: #FEE500;
  width: 200px;
  height: 40px;
  display: flex;
  gap: 4.4px;
`;

const InfoWindowRatingText = styled.div`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 500;
  line-height: 14px;
  margin-left: 0px;
  color: #4A4A4A;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoWindowReviewText = styled.div`
  padding: 24px 18px;
  width: 425px;
  border-radius: 25px;
  height: 188px;
  font-family: Noto Sans KR;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
  color: #4A4A4A;
  background-color: #F7F7F7;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

const InfoWindowReviewDate = styled.div`
  width: 90%;
  text-align: right;
  color: #7D7D7D;
  font-family: Noto Sans KR;
  font-size: 8px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  margin-bottom: 17px;
`;

export default ReviewModal;