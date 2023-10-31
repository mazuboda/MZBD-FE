import { Typography } from '@mui/material';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Nav = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div style={{
      minWidth: "964px",
      position: "relative",
    }}>
      <div onMouseLeave={() => setIsHovered(false)}>
        <Banner onClick={() => {
          navigate("/notice");
        }}>
          회원 가입시 무료 배달 쿠폰 제공
        </Banner>
        <AppBarContainer>
          <LeftItemContainer>
            <Typography variant="h6"
              onClick={() => {
                navigate("/");
              }}
              style={{
                fontFamily: "Roboto",
                fontSize: '30px',
                fontWeight: 700,
                lineHeight: '35px',
                letterSpacing: '-0.2em',
                textAlign: 'center',
                color: "#FF679D",
                cursor: "pointer"
              }}>
              MZBD
            </Typography>
          </LeftItemContainer>
          <CenterItemContainer>
            <CenterItemWrapper>
              <CenterItem
                onMouseEnter={() => setIsHovered(true)}
              >
                주변 가게
              </CenterItem>
              <CenterItem
                onMouseEnter={() => setIsHovered(true)}
              >
                견적 내기
              </CenterItem>
              <CenterItem
                onMouseEnter={() => setIsHovered(true)}
              >
                빠른 커스텀
              </CenterItem>
              <CenterItem
                onMouseEnter={() => setIsHovered(true)}
              >
                견적 확인
              </CenterItem>
              <CenterItem
                onMouseEnter={() => setIsHovered(true)}
              >
                채팅
              </CenterItem>
            </CenterItemWrapper>
          </CenterItemContainer>

          <RightItemContainer>
            <div>마주보다 님</div>
            <div>My</div>
            <div onClick={() => {
              navigate("/login");
            }}>LOGOUT</div>
          </RightItemContainer>
        </AppBarContainer>
      </div >
      {isHovered && (
        <SubMenuContainer>
          <LeftItemContainer />
          <CenterItemContainer>
            <CenterItemWrapper>
              <CenterItem />
              <CenterItem>
                <SubMenuList>
                  <div>새 디자인</div>
                  <div>내 디자인</div>
                </SubMenuList>
              </CenterItem>
              <CenterItem />
              <CenterItem>
                <SubMenuList>
                  <div>고객님</div>
                  <div>사장님</div>
                </SubMenuList>
              </CenterItem>
              <CenterItem>
                <SubMenuList>
                  <div>고객님</div>
                  <div>사장님</div>
                </SubMenuList>
              </CenterItem>
            </CenterItemWrapper>
          </CenterItemContainer>
          <RightItemContainer />
        </SubMenuContainer>
      )}
    </div>
  );
};
const AppBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 32px;
  border-bottom: 1px #DBDBDB solid;
  background-color: #FFFFFF;
`;
const SubMenuContainer = styled(AppBarContainer)`
  box-sizing: border-box;
  position:absolute;
  width: 100%;
  z-index: 100;
`;
const LeftItemContainer = styled.div`
  width: 256px;
  align-content: center;
  display: flex;
  justify-content: left;
`;
const CenterItemContainer = styled.div`
  width: 512px;
  align-content: center;
  display: flex;
  gap: 24px;
  justify-content: center;
`;
const CenterItemWrapper = styled.div`
  display: flex;
  gap: 16px;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: -0.2em;
  text-align: center;
  color: #343434;
`;
const CenterItem = styled.div`
  width: 76px;
  cursor: pointer;
`;
const RightItemContainer = styled.div`
  width: 256px;
  align-content: center;
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: right;
  cursor: pointer;

  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: -0.2em;
  color: #7D7D7D;
`;
const SubMenuList = styled.ul`
  width: 100%;
  margin: 0px;
  padding: 0px;

  font-family: Noto Sans KR;
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.2em;
  text-align: center;
  color: #7D7D7D;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Banner = styled.div`
    background-color: #FFFFFF;
    color: #FF679DB2;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    height: 75px;
    border-bottom: 1px #DBDBDB solid;
    font-family: Noto Sans KR;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      text-decoration: underline #FF679DB2 solid;
      text-underline-position:under;
    }
  `;

export default Nav;