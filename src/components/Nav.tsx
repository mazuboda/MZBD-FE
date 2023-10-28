import { AppBar, Box, Button, Popover, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';

const Nav = () => {
  
  return (
    <div>
      <AppBar position="static" color="default">
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
          }}>
            <Button color="inherit">주변가게</Button>
            <Button color="inherit">견적내기</Button>
            <Button color="inherit">빠른커스텀</Button>
            <Button color="inherit">견적확인</Button>
            <Button color="inherit">채팅</Button>
          </Box>

          <Box marginRight={3}>
          <Button color="inherit">마주보다 님</Button>
          <Button color="inherit">My</Button>
          <Button color="inherit">LOGOUT</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar>
          <Box flexGrow={1} display="flex" justifyContent="center">
            <Button color="inherit">주변가게</Button>
            <Button color="inherit">견적내기</Button>
            <Button color="inherit">빠른커스텀</Button>
            <Button color="inherit">견적확인</Button>
            <Button color="inherit">채팅</Button>
          </Box>
          </Toolbar>
    </div>
  );
};

export default Nav;