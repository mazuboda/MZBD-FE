import CompanyLogo from "@assets/images/CompanyLogo.png";
import { styled } from "styled-components";

const Login = () => {
  return (
    <div>
      <LoginContainer>
        <CakeImage src={CompanyLogo} alt="Company Logo" />
        <div>
          <MessageContainer>
            마음에 쏙 드는 주문을 해볼 시간, <br />
            <div style={{
              fontSize: "15px",
              marginTop: "22px"
            }}>
              카카오 계정으로 간편하게 로그인하고 주문해 보세요
            </div>
          </MessageContainer>
          <ActionButton>카카오 계정으로 로그인하기</ActionButton>
        </div>
      </LoginContainer>
    </div>
  );
};

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 150px auto;
`;

const CakeImage = styled.img`
  width: 500px;
  height: 400px;
  margin-right: 245px;
`;

const MessageContainer = styled.div`
  text-align: center;
  margin-bottom: 30px;

  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: center;
`;

const ActionButton = styled.button`
  background-color: #FEE500;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  width: 411px;
  height: 61px;
  font-family: Noto Sans KR;
  font-size: 25px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: center;
  color: #4A4A4A;

  &:hover {
    background-color: #FFC300;
  }
`;

export default Login;