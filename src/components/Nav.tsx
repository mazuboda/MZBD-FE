import { AppBar, Box, Button, Popover, Toolbar, Typography, styled, Tabs, Tab } from '@mui/material';
import React, { useState } from 'react';


const Nav = () => {
  const Banner = styled('div')({
  backgroundColor: '#FFFFFF',
  color: '#FF679DB2',
  textAlign: 'center',
  fontSize: '18px',
  fontWeight: 500,
  height: "75px",
  borderBottom: "1px #DBDBDB solid",
  fontFamily: "Noto Sans KR",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  });
  
  return (
    <div>
      <Banner>
        회원 가입시 무료 배달 쿠폰 제공
      </Banner>
      <AppBar position="static" style={{backgroundColor: "#FFFFFF", boxShadow: "none", borderBottom: "1px #DBDBDB solid", height: "67px"}}>
        <Toolbar>
          <Box marginLeft={15}>
            <Typography variant="h6" style={{
              fontSize: '30px',
              fontWeight: 700,
              lineHeight: '35px',
              letterSpacing: '-0.2em',
              textAlign: 'center',
              color: "#FF679D"
            }}>
              MZBD
            </Typography>
          </Box>
          <Box flexGrow={1} display="flex" justifyContent="center" style={{
            fontFamily: "Noto Sans KR",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "29px",
            letterSpacing: "-0.2em",
            textAlign: "center",
            color: "#343434",
            gap: "50px",
          }}>
            <Button color="inherit">주변가게</Button>
            <Button color="inherit">견적내기</Button>
            <Button color="inherit">빠른커스텀</Button>
            <Button color="inherit">견적확인</Button>
            <Button color="inherit">채팅</Button>
          </Box>

          <Box marginRight={3} style={{color: "#7D7D7D"}}>
          <Button color="inherit">마주보다 님</Button>
          <Button color="inherit">My</Button>
          <Button color="inherit">LOGOUT</Button>
          </Box>
        </Toolbar>
      </AppBar>
      {/* <Toolbar>
          <Box flexGrow={1} display="flex" justifyContent="center">
            <Button color="inherit">주변가게</Button>
            <Button color="inherit">견적내기</Button>
            <Button color="inherit">빠른커스텀</Button>
            <Button color="inherit">견적확인</Button>
            <Button color="inherit">채팅</Button>
          </Box>
          </Toolbar> */}
    </div>
  );
};

export default Nav;