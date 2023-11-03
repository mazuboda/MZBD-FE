import CompanyLogo from "@assets/images/CompanyLogo.png";
import { styled } from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <InfoContainer>
        <Image src={CompanyLogo} alt="Company Logo" />
        <CompanyInfo>
          <InfoTitle>
            company info.
          </InfoTitle>
          <br />
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
        <InfoTitle>
          SNS
        </InfoTitle>
      </InfoContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 145px;
  background-color: #FFFFFF;
  width: 100%;
  height: 300px;
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 205px;
  height: 200px;
  margin-right: 85px;
`;

const CompanyInfo = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

const InfoTitle = styled.div`
  font-family: Noto Sans KR;
  font-size: 24px;
  font-weight: 500;
  line-height: 35px;
  letter-spacing: -0.1em;
  text-align: left;
  margin-right: 145px;
`;

const InfoItem = styled.div`
  font-family: Noto Sans KR;
  font-size: 13px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.1em;
  text-align: left;
`;

export default Footer;