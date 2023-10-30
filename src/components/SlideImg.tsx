import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import { styled } from "styled-components";

const SlideImg = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(items.length - 1); // 마지막 아이템으로
    }
  };

  const handleRightClick = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0); // 첫 번째 아이템으로
    }
  };

  return (
    <SlideImgContainer>
      <ArrowButton className="left" onClick={handleLeftClick}>
        <ArrowBackIosIcon sx={{ fontSize: 56, color: "#4A4A4A" }} />
      </ArrowButton>
      {/* 내용이 들어갈 부분 */}
      <ArrowButton className="right" onClick={handleRightClick}>
        <ArrowForwardIosIcon sx={{ fontSize: 56, color: "#4A4A4A" }} />
      </ArrowButton>
    </SlideImgContainer>
  );
};

export const SlideImgContainer = styled.div`
  width: 1060px;
  height: 600px;
  position: relative;
  overflow: hidden;
  background-color: #D9D9D9;
  margin: 46px auto;
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`;

export default SlideImg;