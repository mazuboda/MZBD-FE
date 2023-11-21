import { styled } from "styled-components";

const BusinessCert = () => {
  return (
    <BusinessCertContainer>
      <BusinessCertLabel>
        사업자 인증을 완료해주세요.
      </BusinessCertLabel>
      <BusinessCertButton>사업자 인증하기</BusinessCertButton>
    </BusinessCertContainer>
  );
};

const BusinessCertContainer = styled.div`
  width: 700px;
  height: 133px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 114px;
`;

const BusinessCertLabel = styled.div`
  color: #4A4A4A;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 25px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -2.5px;
  margin-bottom: 47px;
`;

const BusinessCertButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 100px;
  background: #FF679D;
  color: #FFF;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -2px;
  border: none;
`;

export default BusinessCert;