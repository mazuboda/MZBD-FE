import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface StroeNoticeProps {
  onClose: () => void;
}

const StoreNotice: React.FC<StroeNoticeProps> = ({
  onClose
}) => {

  const tmp = [
    { no: 1, title: "test1", date: "2023.10.17.", checked: true },
    { no: 2, title: "test2", date: "2023.10.17.", checked: true },
    { no: 4, title: "test4", date: "2023.10.17.", checked: true },
    { no: 3, title: "test3", date: "2023.10.17.", checked: true },
    { no: 5, title: "test5", date: "2023.10.17.", checked: true },
  ];

  return (
    <StoreNoticeContainer>
      <CloseOutlinedIcon
        style={{
          position: "absolute",
          right: "18px",
          top: "23px",
          cursor: "pointer",
          width: "20",
          height: "19",
          color: "#7D7D7D",
        }}
        onClick={onClose}
      />
      <NoticeTableWrap>
        <StoreNoticeTitle>공지사항</StoreNoticeTitle>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableHeadCell style={{
                width: "1%"
              }}></TableHeadCell>
              <TableHeadCell style={{
                width: "10%"
              }}>NO</TableHeadCell>
              <TableHeadCell style={{
                width: "69%"
              }}>제목</TableHeadCell>
              <TableHeadCell style={{
                width: "20%"
              }}>작성일</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tmp.map((notice) => (
              <TableRow key={notice.no}>
                <TableBodyCell style={{
                  width: "18px"
                }}>
                  <NoticeCheckbox type="checkbox" id="deletedNotice" />
                  <label htmlFor="deletedNotice"></label>
                </TableBodyCell>
                <TableBodyCell style={{
                  color: "#7D7D7D",
                  width: "80px"
                }}>{notice.no}
                </TableBodyCell>
                <TableBodyCell>{notice.title}</TableBodyCell>
                <TableBodyCell style={{
                  color: "#7D7D7D",
                  width: "100px"
                }}>{notice.date}</TableBodyCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
        <div style={{
          fontFamily: "Roboto",
          fontSize: "8px",
          fontWeight: "400",
          lineHeight: "9px",
          letterSpacing: "0em",
          color: "#7D7D7D",
          marginTop: "4.7px"
        }}>최대 5개까지 작성 가능합니다.</div>
        <ButtonWrap>
          <Button>글쓰기</Button>
          <Button>삭제</Button>
        </ButtonWrap>
      </NoticeTableWrap>
    </StoreNoticeContainer>
  );
};

const StoreNoticeContainer = styled.div`
  width: 600px;
  height: 550px;
  position: absolute;
  box-shadow: 0px 4px 4px 0px #00000040;
  background-color: #FFFFFF;
  border: 1px #4A4A4A solid;
  border-radius: 10px;
`;

const NoticeTableWrap = styled.div`
  width: 542px;
  height: 271px;
  margin: 133px 38px 146px 20px;
`;

const StoreNoticeTitle = styled.div`
  margin-bottom: 48.19px;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  color: #4A4A4A;
`;

const StyledTable = styled(Table)`
  width: 541px !important;
  margin-bottom: 30px;
  margin: 0 auto;
  border-top: 1px #FF679D solid;
`;

const TableHeadCell = styled(TableCell)`
  && {
    height: 20px !important;
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
    font-family: Noto Sans KR;
    font-size: 12px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    color: #4A4A4A;
    padding: 5px 16px;
  }
`;

const NoticeCheckbox = styled.input`
  display: none;

  & + label {
    display: inline-block;
    width: 14px;
    height: 14px;
    border: 1px solid #707070;
    position: relative;
  }

  &:checked + label::after {
    content: '✔';
    font-size: 13px;
    width: 14px;
    height: 14px;
    text-align: center;
    line-height: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ButtonWrap = styled.div`
  width: 130px;
  height: 20px;
  display: flex;
  gap: 10px;
  margin: 17px auto;

  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: -0.2em;
  text-align: center;
  color: #FFFFFF;
`;

const Button = styled.div`
  width: 60px;
  background-color: #FF679D;
`;

export default StoreNotice;