import StoreNotice from "@components/StoreNotice";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import InstragramIcon from "@styles/InstragramIcon";
import { useState } from "react";
import styled from "styled-components";

interface StyledInputProps {
  hasValue?: boolean;
}

interface DayBoxProps {
  isSelected: boolean;
  onClick: () => void;
}

const ProfileView = () => {
  const [inputValue, setInputValue] = useState<string>("https://www.instagram.com/");
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedNotice, setSelectedNotice] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleDayClick = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <ProfilViewContainer>
      <ProfileViewTopContainer>
        <ProfileViewImageWrap>
          <ProfileViewImage />
          <ProfileViewImageButton>수정하기</ProfileViewImageButton>
        </ProfileViewImageWrap>
        <ProfileViewInfoWrap>
          <ProfileViewInstaItem>
            <div style={{ display: "flex", gap: "4px" }}>
              <ProfileViewLabel>인스타그램</ProfileViewLabel><InstragramIcon />
            </div>
            <ProfileViewInstaInput
              type="text"
              placeholder={inputValue}
              value={inputValue}
              onChange={handleChange}
              hasValue={inputValue.length > 26}
            />
          </ProfileViewInstaItem>
          <ProfileViewItem>
            <ProfileViewLabel>가게명</ProfileViewLabel>
            <ProfileViewInput />
          </ProfileViewItem>
          <ProfileViewItem>
            <ProfileViewLabel>연락처</ProfileViewLabel>
            <ProfileViewInput />
          </ProfileViewItem>
          <ProfileViewItem>
            <ProfileViewLabel>주소지</ProfileViewLabel>
            <ProfileViewInput />
          </ProfileViewItem>
          <ProfileViewItem>
            <ProfileViewLabel>우편번호</ProfileViewLabel>
            <ProfileViewInput />
          </ProfileViewItem>
          <ProfileViewItem>
            <ProfileViewLabel>이메일</ProfileViewLabel>
            <div>
              <ProfileViewEmailInput type="email" />
              <ProfileEmailSelect>
                <option value="">직접 입력</option>
                <option value="">gmail.com</option>
                <option value="">naver.com</option>
                <option value="">hanmail.com</option>
                <option value="">nate.com</option>
              </ProfileEmailSelect>
            </div>
          </ProfileViewItem>
          <ProfileViewItem>
            <ProfileViewLabel>휴무일</ProfileViewLabel>
            <DayBoxContainer>
              {['월', '화', '수', '목', '금', '토', '일'].map((day, index) => (
                <DayBox
                  key={index}
                  isSelected={selectedDays.includes(day)}
                  onClick={() => handleDayClick(day)}
                >
                  {day}
                </DayBox>
              ))}
            </DayBoxContainer>
          </ProfileViewItem>
          <ProfileViewItem>
            <ProfileViewLabel>영업시간</ProfileViewLabel>
            <TimeBoxContainer>
              <TimeSelect>
                <option value="">영업 시간</option>
                <option value="">11:30</option>
              </TimeSelect>
              <TimeText>부터</TimeText>
              <TimeSelect>
                <option value="">마감 시간</option>
                <option value="">19:00</option>
              </TimeSelect>
              <TimeText>까지</TimeText>
            </TimeBoxContainer>
          </ProfileViewItem>
          <ProfileViewItem>
            <ProfileViewLabel>배달/픽업</ProfileViewLabel>
            <PickContainer>
              <PickItem>
                <PickLabel>배달</PickLabel>
                <PickCheckbox type="checkbox" id="delivery" />
                <label htmlFor="delivery"></label>
              </PickItem>
              <PickItem>
                <PickLabel>픽업</PickLabel>
                <PickCheckbox type="checkbox" id="pick" />
                <label htmlFor="pick"></label>
              </PickItem>
            </PickContainer>
          </ProfileViewItem>
        </ProfileViewInfoWrap>
      </ProfileViewTopContainer>
      <ProfileViewBottomContainer>
        <ProfileViewNoticeContainer>
          <ProfileViewSubTitle>공지사항</ProfileViewSubTitle>
          <NoticeContainer>
            <NoticeDiv />
            <NoticeButton onClick={() => setSelectedNotice(false)}>등록</NoticeButton>
          </NoticeContainer>
          {selectedNotice && <StoreNotice onClose={() => setSelectedNotice(false)} />}
        </ProfileViewNoticeContainer>
        <ProfileViewPhotoContainer>
          <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
            <ProfileViewSubTitle>매장사진</ProfileViewSubTitle>
            <ProfileViewSubDesc>매장 내부/외부/케이크디자인 최소 3가지/포장케이스 사진을 추가해주세요.</ProfileViewSubDesc>
          </div>
          <StoreImageWrap>
            <ArrowBackIosRoundedIcon style={{ color: "#7D7D7D" }} />
            <StoreImage>
              <img src="" alt="" />
            </StoreImage>
            <ArrowForwardIosRoundedIcon />
          </StoreImageWrap>
        </ProfileViewPhotoContainer>
      </ProfileViewBottomContainer>
      <ProfileViewButton>저장하기</ProfileViewButton>
    </ProfilViewContainer>
  );
};

const ProfilViewContainer = styled.div`
  width: 720px;
`;

const ProfileViewTopContainer = styled.div`
  display: flex;
  gap: 31px;
`;

const ProfileViewImageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileViewImage = styled.div`
  width: 150px;
  height: 150px;
  background-color: #D9D9D9;
  border-radius: 100px;
`;

const ProfileViewImageButton = styled.div`
  width: 70px;
  height: 20px;
  border-radius: 100px;
  background-color: #7D7D7D;
  margin-top: 20px;

  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: -0.2em;
  text-align: center;
  color: #FFFFFF;
`;

const ProfileViewInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfileViewItem = styled.div`
  display: flex;
  gap: 96px;
`;

const ProfileViewInstaItem = styled(ProfileViewItem)`
  gap: 65px;
`;

const ProfileViewLabel = styled.div`
  width: 69px;
  height: 26px;
  margin-bottom: 35px;

  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: -0.2em;
  text-align: left;
  color: #4A4A4A;
`;

const ProfileViewInput = styled.input`
  width: 400px;
  height: 30px;
  border: 1px #D9D9D9 solid;
  margin-bottom: 26px;
  
  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
`;

const ProfileViewInstaInput = styled(ProfileViewInput) <StyledInputProps>`
  color: ${(props) => (props.hasValue ? "#4a4a4a" : "#d8d8d8")};
  text-align: start;
`;

const ProfileViewEmailInput = styled(ProfileViewInput)`
  width: 200px;
`;

const ProfileEmailSelect = styled.select`
  width: 200px;
  height: 33.6px;
  border: 1px #D9D9D9 solid;
  margin-bottom: 26px;

  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  color: #7D7D7D;
`;

const DayBoxContainer = styled.div`
  display: flex;
  width: 406px;
  height: 30px;

`;

const DayBox = styled.div<DayBoxProps>`
  width: 57.14px;
  border: 1px solid #D9D9D9;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "#7D7D7D" : "#FFFFFF")};
  color: ${(props) => (props.isSelected ? "#FFFFFF" : "#7D7D7D")};
  
  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TimeBoxContainer = styled.div`
  width: 400px;
  height: 30px;
  display: flex;
`;

const TimeSelect = styled.select`
  width: 100px;
  border: 1px #D9D9D9 solid;

  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: #4A4A4A;
`;

const TimeText = styled.div`
  width: 100px;
  background-color: #F7F7F7;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  color: #4A4A4A;
`;

const PickContainer = styled.div`
  display: flex;
  width: 162px;
  height: 20px;
  gap: 50px;
`;

const PickItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px
`;

const PickLabel = styled.label`
  width: 26px;
  height: 20px;

  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  color: #4A4A4A;
`;

const PickCheckbox = styled.input`
  display: none;

  & + label {
    display: inline-block;
    width: 20px;
    height: 20px;
    border:3px solid #707070;
    position: relative;
  }

  &:checked + label::after {
    content: '✔';
    font-size: 15px;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ProfileViewBottomContainer = styled.div`
  width: 720px;
  margin-top: 39px;
`;

const ProfileViewNoticeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileViewSubTitle = styled.div`
  width: 56px;
  height: 26px;
  
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: -0.2em;
  color: #4A4A4A;
`;

const NoticeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  width: 637px;
  margin: 0 auto;
  position: relative;
`;

const NoticeDiv = styled.div`
  height: 30px;
  flex: 1;
  border: 1px solid #e0e0e0;
  border-radius: 4px 0 0 4px;
  outline: none;
`;

const NoticeButton = styled.button`
  width: 99px;
  height: 31.6px;
  padding: 10px 15px;
  border: 1px #D9D9D9 solid;
  background-color: #F7F7F7;
  color: #4A4A4A;
  cursor: pointer;
  border-radius: 0 4px 4px 0;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: center;
`;

const ProfileViewPhotoContainer = styled.div`
  margin-top: 32px;
`;

const ProfileViewSubDesc = styled.div`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: #7D7D7D;
`;

const StoreImageWrap = styled.div`
  width: 540px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px auto 0px;
  gap: 19px;
`;

const StoreImage = styled.div`
  width: 492.83px;
  height: 132.83px;
  background-color: #7D7D7D;
`;

const ProfileViewButton = styled.div`
  width: 150px;
  height: 50px;
  background-color: #FF679D;
  border-radius: 100px;
  margin: 57.17px auto 34px;
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

export default ProfileView;