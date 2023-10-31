import React from 'react';
import { styled } from 'styled-components';
import CardImg from "@assets/images/CardImg.png";

const FeatureCard = () => {
  return (
    <CardContainer>
      <div>
        <Card img={CardImg} />
        <Label>빠른 커스텀</Label>
      </div>
      <div>
        <Card img={CardImg} />
        <Label>리뷰 확인</Label>
      </div>
      <div>
        <Card img={CardImg} />
        <Label>당일 수량 확인</Label>
      </div>
      <div>
        <Card img={CardImg} />
        <Label>배달 가능</Label>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 960px;
  margin: 0 auto;
`;

const Card = styled.div<{ img: string }>`
  width: 180px;
  height: 180px;
  background: url(${props => props.img}) no-repeat center;
  background-size: cover;
  border-radius: 30px;
`;

const Label = styled.span`
  display: block;
  text-align: center;
  margin-top: 10px;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: -0.1em;
`;

export default FeatureCard;