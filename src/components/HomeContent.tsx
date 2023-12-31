import FeatureCard from "@components/FeatureCard";
import SlideImg from "@components/SlideImg";
import { styled } from "styled-components";

const HomeContent = () => {
  return (
    <div style={{
      margin: "0 auto",
      width: "1060px",
      paddingBottom: "245px",
    }}>
      <SlideImg />
      <Mazu>
        사랑하는 사람과 지금 마주 보세요
        <MazuButton>
          제작하기
        </MazuButton>
      </Mazu>
      <TitleContainer>
        <MainTitle>
          마음에 쏙 드는 주문제작 플랫폼
        </MainTitle>
        <SubTitle>
          마주보다
        </SubTitle>
      </TitleContainer>
      <FeatureCard />
      <ContentCard>

      </ContentCard>
    </div>
  );
};

const TitleContainer = styled.div`
  margin: 245px auto 65px;
  width: 1060px;
  `;

const Mazu = styled.div`
  font-family: Noto Sans KR;
  font-size: 30px;
  font-weight: 400;
  line-height: 43px;
  letter-spacing: -0.1em;
  text-align: center;
  padding-top: 20px;
`;

const MazuButton = styled.div`
  width: 200px;
  height: 60px;
  border-radius: 50px;
  background-color: #FF679D;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Noto Sans KR;
  font-size: 30px;
  font-weight: 700;
  line-height: 43px;
  letter-spacing: -0.1em;
  color: #FFFFFF;
  margin: 10px auto;
  cursor: pointer;
  margin-top: 21px;
`;

const MainTitle = styled.div`
  font-family: Noto Sans KR;
  font-size: 35px;
  font-weight: 500;
  line-height: 51px;
  letter-spacing: -0.1em;
  text-align: left;
`;

const SubTitle = styled.div`
  font-family: Noto Sans KR;
  font-size: 50px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: -0.1em;
  text-align: left;
`;

const ContentCard = styled.div`
  width: 1060px;
  height: 649px;
  border-radius: 30px;
  margin: 245px auto 0px auto;
  background: linear-gradient(180deg, rgba(213, 213, 213, 0.63) 0%, rgba(254, 233, 241, 0) 100%);
`;

export default HomeContent;