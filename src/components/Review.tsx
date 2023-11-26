import ReviewModal from "@components/ReviewModal";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { useState } from "react";
import styled from "styled-components";
const Review = () => {
  const [open, setOpen] = useState<boolean>(false);
  const reviews = Array.from({ length: 6 }, (_, index) => (
    <InfoWindowReview onClick={() => setOpen(true)}>
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
  ));

  return (
    <div style={{
      width: "790px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      gap: "20px"
    }}>
      {reviews}
      {open && <ReviewModal onClose={() => setOpen(false)} />}
    </div>
  );
};

const InfoWindowReview = styled.div`
  width: 250px;
  height: 250px;
  margin: 7px auto;
  cursor: pointer;
  margin-bottom: 79px;
  position: relative;
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

export default Review;