import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Typography } from '@mui/material';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Nav = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div style={{
      display: "grid",
      gridColumn: "1 / 4",
      gridTemplateColumns: "subgrid",
      gridTemplateRows: "auto auto",
      position: "relative",
      zIndex: 1000,
    }}>
      <Banner onClick={() => {
        navigate("/notice");
      }}>
        회원 가입시 무료 배달 쿠폰 제공
      </Banner>
      <AppBarContainer onMouseLeave={() => setIsHovered(false)}>
        <div style={{
          height: "55px",
          alignItems: "center",
          display: "flex",
          gridColumn: "2 / 3",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
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
                <div>견적 내기</div>
                <SubMenuContainer show={isHovered}>
                  <div>새 디자인</div>
                  <div>내 디자인</div>
                </SubMenuContainer>
              </CenterItem>
              <CenterItem
                onMouseEnter={() => setIsHovered(true)}
              >
                빠른 커스텀
              </CenterItem>
              <CenterItem
                onMouseEnter={() => setIsHovered(true)}
              >
                <div>견적 확인</div>
                <SubMenuContainer show={isHovered}>
                  <div>고객님</div>
                  <div>사장님</div>
                </SubMenuContainer>
              </CenterItem>
              <CenterItem
                onMouseEnter={() => setIsHovered(true)}
              >
                <div>채팅</div>
                <SubMenuContainer show={isHovered}>
                  <div>고객님</div>
                  <div>사장님</div>
                </SubMenuContainer>
              </CenterItem>
            </CenterItemWrapper>
          </CenterItemContainer>
          <RightItemContainer>
            <div>마주보다 님</div>
            <div onClick={() => {
              navigate("/mypage");
            }}>My</div>
            <NotificationsNoneIcon style={{ paddingTop: "5px" }} />
            <div onClick={() => {
              navigate("/login");
            }}>LOGOUT</div>
          </RightItemContainer>
        </div>
        <SubMenuBackground show={isHovered} />
      </AppBarContainer>
    </div>
  );
};
const AppBarContainer = styled.div`
  height: 55px;
  grid-column: 1 / 4;
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: subgrid;
  border-bottom: 1px #DBDBDB solid;
  background-color: #FFFFFF;
  position: relative;
`;
const LeftItemContainer = styled.div`
  width: 256px;
  align-content: center;
  display: flex;
  justify-content: left;
  grid-column-start: 2;
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
  gap: 40px;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: -0.2em;
  text-align: center;
  color: #343434;
`;
const CenterItem = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
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

const Banner = styled.div`
    grid-column: 1 / 4;
    grid-row: 1 / 2;
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
const SubMenuBackground = styled.div<{ show: boolean }>`
  display: ${({ show }) => show ? "block" : "none"};
  position: absolute;
  width: 100%;
  z-index: -1;
  height: 139.33px;
  border-bottom: 1px #DBDBDB solid;
  background-color: #FFFFFF;
`;
const SubMenuContainer = styled.div<{ show: boolean }>`
  display: ${({ show }) => show ? "flex" : "none"};
  position: absolute;
  margin-top: 53px;
  flex-direction: column;
  gap: 12px;
  white-space: nowrap;

  color: #7D7D7D;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -3px;
`;

export default Nav;