import CompanyLogo from "@assets/images/CompanyLogo.png";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

const footerShowingPages = [
  "/",
  "/login",
  "/notice",
  // "/mypage",
];

const Footer = () => {
  const location = useLocation();

  if (!footerShowingPages.includes(location.pathname)) {
    return null;
  }

  return (
    <FooterContainer>
      <InfoContainer>
        <Image src={CompanyLogo} alt="Company Logo" />
        <CompanyInfo>
          <InfoTitle>
            company info.
          </InfoTitle>
          {/* <br /> */}
          <InfoItem>
            회사명: 마주보다
          </InfoItem>
          <InfoItem>
            사업자 등록번호:
          </InfoItem>
          <InfoItem>
            대표자:
          </InfoItem>
          <InfoItem>
            투자/제휴/입점 문의:
          </InfoItem>
          <InfoItem>
            대표 번호:
          </InfoItem>
        </CompanyInfo>
        <ContactInfo>
          <InfoTitle>
            SNS
          </InfoTitle>
        </ContactInfo>
      </InfoContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  grid-column: 1 / 4;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #FFFFFF;
  width: 100%;
  height: 300px;
`;

const InfoContainer = styled.div`
  display: grid;
  width: 1060px;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
`;

const Image = styled.img`
  grid-column: 1 / 2;
  width: 205px;
  height: 200px;
  transform: translate(-76.49px, 0px);
  position: absolute;
  padding-top: 43px;
`;

const CompanyInfo = styled.div`
  grid-column: 3 / 7;
  font-size: 14px;
  line-height: 1.5;
  padding-top: 15px
`;

const ContactInfo = styled(CompanyInfo)`
  grid-column: 7 / 8;
`;

const InfoTitle = styled.div`
  font-family: Noto Sans KR;
  font-size: 24px;
  font-weight: 500;
  line-height: 35px;
  letter-spacing: -0.1em;
  text-align: left;
  padding-bottom: 25px;
`;

const InfoItem = styled.div`
  font-family: Noto Sans KR;
  font-size: 13px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.1em;
  text-align: left;
  margin-bottom: 5px;
`;

export default Footer;