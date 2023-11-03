import { styled } from "styled-components";

const UserInfo = () => {
  return (
    <UserInfoContainer>
      <InfoRow>
        <Label>이름</Label>
        <Input type="text" />
      </InfoRow>
      <InfoRow>
        <Label>연락처</Label>
        <Input type="tel" />
      </InfoRow>
      <InfoRow>
        <Label>배송지</Label>
        <Input type="text" /><ResaveButton>수정하기</ResaveButton>
      </InfoRow>
      <InfoRow>
        <Label>우편번호</Label>
        <Input type="search" />
      </InfoRow>
      <InfoRow>
        <Label>이메일</Label>
        <Input type="email" />
      </InfoRow>
      <SaveButton>저장하기</SaveButton>
    </UserInfoContainer>
  );
};

const UserInfoContainer = styled.div`
  width: 700px;
  height: 305px;
  padding: 20px;
`;


const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  border-bottom: 1px #7D7D7D solid;
`;

const Label = styled.label`
  width: 56px;

  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: -0.2em;
  text-align: center;
  color: #4A4A4A;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: none;
  outline: none;
`;

const ResaveButton = styled.button`
  width: 70px;
  height: 20px;
  border-radius: 100px;
  background-color: #7D7D7D;
  color: #FFFFFF;
  border: none;

  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: -0.2em;
  text-align: center;
`;

const SaveButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 100px;
  background-color: #FF679D;
  color: #FFF;
  font-size: 20px;
  border: none;
  cursor: pointer;
  margin: 84px auto;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Noto Sans KR;
  font-size: 25px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.2em;
  text-align: center;
  color: #FFFFFF;
`;

export default UserInfo;