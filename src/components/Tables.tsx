import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { styled } from "styled-components";

const Tables = () => {
  const tmp = [
    { no: 1, title: "test1", date: "2023.10.17." },
    { no: 2, title: "test2", date: "2023.10.17." },
    { no: 3, title: "test3", date: "2023.10.17." },
    { no: 4, title: "test4", date: "2023.10.17." },
    { no: 5, title: "test5", date: "2023.10.17." },
    { no: 6, title: "test6", date: "2023.10.17." },
  ];
  return (
    <div>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableHeadCell>NO</TableHeadCell>
            <TableHeadCell>제목</TableHeadCell>
            <TableHeadCell>작성일</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tmp.map((notice) => (
            <TableRow key={notice.no}>
              <TableBodyCell style={{
                color: "#7D7D7D",
                width: "100px"
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
      <PaginationContainer>
        <KeyboardArrowLeftIcon style={{ cursor: "pointer", color: "#4A4A4A" }} />
        1
        <KeyboardArrowRightIcon style={{ cursor: "pointer", color: "#4A4A4A" }} />
      </PaginationContainer>
    </div>
  );
};

const StyledTable = styled(Table)`
  width: 1060px !important;
  margin-bottom: 30px;
  margin: 0 auto;
  border-top: 1px #FF679D solid;
`;

const TableHeadCell = styled(TableCell)`
  && {
    font-family: 'Noto Sans KR';
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;
    color: #4A4A4A;
    padding: 6px 16px;
  }
`;

const TableBodyCell = styled(TableCell)`
  && {
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    color: #4A4A4A;
    padding: 11px 16px;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`;

export default Tables;