import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const Request = () => {
  const [optionValue, setOptionValue] = useState<string>("");

  const tmp = [
    { order: "김마주", desc: "주문서확인페이지로 이동", date: "2023.10.17.", method: "픽업" },
    { order: "김마주", desc: "주문서확인페이지로 이동", date: "2023.10.17.", method: "픽업" },
    { order: "김마주", desc: "주문서확인페이지로 이동", date: "2023.10.17.", method: "배달" },
    { order: "김마주", desc: "주문서확인페이지로 이동", date: "2023.10.17.", method: "픽업" },
    { order: "김마주", desc: "주문서확인페이지로 이동", date: "2023.10.17.", method: "픽업" },
  ];

  const options = ["선택하기", "영업시간 초과", "배달불가", "재료소진", "디자인실현불가", "휴무일", "기타(직접작성)", "금액입력"];

  return (
    <RequestTableWrap>
      <RequestTitle><div style={{ fontWeight: "700", color: "#FF679D" }}>신규</div>의뢰</RequestTitle>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableHeadCell style={{
              width: "5%"
            }}></TableHeadCell>
            <TableHeadCell style={{
              width: "20%"
            }}>주문자</TableHeadCell>
            <TableHeadCell style={{
              width: "45%"
            }}>주문 내용</TableHeadCell>
            <TableHeadCell style={{
              width: "20%"
            }}>예약 시간</TableHeadCell>
            <TableHeadCell style={{
              width: "10%"
            }}>수령 방법</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tmp.map((request) => (
            <TableRow key={Math.random()}>
              <TableBodyCell>
                <TableRadio type="radio" />
              </TableBodyCell>
              <TableBodyCell style={{
                color: "#7D7D7D"
              }}>{request.order}
              </TableBodyCell>
              <TableBodyCell style={{
                fontFamily: "Noto Sans KR",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "20px",
                letterSpacing: "0em",
                textAlign: "center",
                color: "#7D7D7D",
                textDecoration: "underline #7D7D7D",
                textUnderlinePosition: "under",
              }}>{request.desc}</TableBodyCell>
              <TableBodyCell style={{
                color: "#7D7D7D"
              }}>{request.date}</TableBodyCell>
              <TableBodyCell style={{
                color: "#7D7D7D"
              }}>{request.method}</TableBodyCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
      <PaginationContainer>
        <KeyboardArrowLeftIcon style={{ cursor: "pointer", color: "#4A4A4A" }} />
        1
        <KeyboardArrowRightIcon style={{ cursor: "pointer", color: "#4A4A4A" }} />
      </PaginationContainer>
      <ReasonWrap>
        <ReasonInput type="text" placeholder="수락금액/거절사유를 입력해주세요." />
        <KeyboardArrowDownIcon style={{ position: "absolute", top: "13px", right: "10px", zIndex: "10" }} />
        <ReasonSelect>
          {options.map((option) => (
            <ReasonOption value={option}>{option}</ReasonOption>
          ))}
        </ReasonSelect>
      </ReasonWrap>
      <ButtonWrap>
        <AcceptButton>수락하기</AcceptButton>
        <RejectButton>거절하기</RejectButton>
      </ButtonWrap>
    </RequestTableWrap>
  );
};

const RequestTableWrap = styled.div`
  width: 740px;
  margin-top: 44px;
`;

const RequestTitle = styled.div`
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  color: #4A4A4A;
  display: flex;
  gap: 5px;
  margin-bottom: 21px;
`;

const StyledTable = styled(Table)`
  width: 740px !important;
  margin-bottom: 30px;
  margin: 0 auto;
  border-top: 1px #FF679D solid;
`;

const TableHeadCell = styled(TableCell)`
  && {
    height: 38px !important;
    font-family: Noto Sans KR;
    font-size: 12px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    color: #4A4A4A;
    padding: 0;
  }
`;

const TableBodyCell = styled(TableCell)`
  && {
    height: 54px !important;
    font-family: Noto Sans KR;
    font-size: 12px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    color: #4A4A4A;
    padding: 0;
  }
`;

const TableRadio = styled.input`
  width: 20px;
  height: 20px;
  accent-color: #4A4A4A;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 0 39.5px;
`;

const ReasonWrap = styled.div`
  width: 432px;
  height: 50px;
  display: flex;
  gap: 22px;
  margin: 0 auto;
  position: relative;
`;

const ReasonInput = styled.input`
  width: 250px;
  border-radius: 25px;
  border: 1px solid #D9D9D9;

  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  color: #4A4A4A;

  &::placeholder {
    color: #7D7D7D;
  }
`;

const ReasonSelect = styled.select`
  width: 160px;
  border-radius: 25px;
  border: 1px solid #D9D9D9;
  appearance: none;
  padding: 8px;
  cursor: pointer;
  position: relative;

  font-family: Noto Sans KR;
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.2em;
  text-align: center;
  color: #4A4A4A;

  &::after {
    content: 'n';
    border-style: solid;
    border-width: 6px 5px 0;
    border-color: #4A4A4A transparent transparent; /* Set arrow color */
    position: absolute;
    top: 50%;
    right: 10px; /* Adjust the right distance as needed */
    transform: translateY(-50%);
    pointer-events: none;
  }
`;

const ReasonOption = styled.option`
  border: 1px solid #D9D9D9;
  border-radius: 25px;
`;

const ButtonWrap = styled.div`
  width: 316px;
  height: 50px;
  display: flex;
  gap: 16px;
  margin: 37px auto;

  font-family: Noto Sans KR;
  font-size: 25px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.2em;
  text-align: center;
  color: #FFFFFF;
`;

const AcceptButton = styled.div`
  width: 150px;
  background-color: #FF679D;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RejectButton = styled.div`
  width: 150px;
  background-color: #4A4A4A;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Request;