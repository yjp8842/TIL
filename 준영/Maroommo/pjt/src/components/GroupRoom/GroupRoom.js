// import { Fragment } from 'react';
import React from 'react';
import { useState } from 'react';

import { Grid } from '@mui/material';
import { Box } from '@mui/system';

import HomePage from '../MyRoom/MyRoomItem/PageIcon';
import { Link } from 'react-router-dom';
import GroupProfile from './GroupRoomItem/GroupProfile';
import CalendarBox from '../MyRoom/MyRoomItem/Calendar';
import HomeBtn from './GroupRoomItem/HomeBtn';
import ChatRoom from './GroupRoomItem/ChatRoom';
import { NavItem } from './GroupRoomItem/Category';
import TodoBox from './GroupRoomItem/TodoInGroup';
import MemoBox from './GroupRoomItem/MemoInGroup';
import TimeTableBox from './GroupRoomItem/TimeTableInGroup';

import './GroupRoomItem/Category.css';

import styled from "styled-components";
import RoomModal from '../Modal/RoomModal';
// import classes from '../rooms/myroom.css';
// import mealsImage from '../../assets/meals.jpg';

const GroupRoom = () => {

  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };

  return (
    <Grid container>
      <Box
        sx={{
          width: "6rem",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#4A4A4A",
        }}>
        <Box>
          <Link to={`/myroom`}><HomePage /></Link>
        </Box>
        <Box
          sx={{
            width: "4vw",
            height: "5px",
            backgroundColor: "#FFFFFF",
            borderRadius: "10px"
          }}>
        </Box>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
          <Box>
            <HomePage />
          </Box>
          <Box>
            {/* <Box
              sx={{
                width: "4rem",
                height: "4rem",
                marginTop: "25px",
                marginBottom: "25px",
                backgroundColor: "#FFFFFF",
                borderRadius: "15px",
                transform: "rotate(45deg)",
                boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.35)",
                ":hover": {
                  transform: "rotate(0)",
                  transition: "0.8s",
                }
              }}> */}
              <AppWrap>
                <Button onClick={onClickButton}>+</Button>
                {isOpen && (<RoomModal
                  open={isOpen}
                  onClose={() => {
                    setIsOpen(false);
                  }}
                />)}
              </AppWrap>
            {/* </Box> */}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "95vw",
          display: "flex",
          justifyContent: "space-between",
        }}>
        <Box
          sx={{
            width: "288px",
            height: "98vh",
            paddingY: "1vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "center",
            backgroundColor: "#ebe5d1",
          }}>
          <GroupProfile />
          <Link to={`/group`}><HomeBtn /></Link>
          <Link to={`/group/chat/`}><ChatRoom /></Link>
          

          <NavItem>
            {/* 하위 메뉴 열림 */}
            <div className='category-box'>
              <Link to={`/group/board`}><li>게시판</li></Link>  
              <li>화상회의</li>  
              <Link to={`/group/qna`}><li>Q&A</li></Link>   
            </div>
          </NavItem>

        </Box>
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // justifyContent: 'center'
          }}>

          <TodoBox />
          <MemoBox />
          <TimeTableBox />
          
        </Box>

        <Box
          sx={{
            width: "288px",
            height: "98vh",
            paddingY: "1vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "space-evenly",
            // justifyContent: "center",
            backgroundColor: "#ebe5d1",
          }}>
          <CalendarBox />
          <Box
            sx={{
              width: "250px",
              height: "550px",
              marginTop: "20px",
              paddingY: '20px',
              borderRadius: "30px",
              backgroundColor: "#FFFFFF",
              boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.35)",
              display: 'flex',
              justifyContent: 'center'
            }}>
            <h3>그룹 인원</h3>
          </Box>
          <Box
            sx={{
              width: "250px",
              height: "80px",
              marginTop: "20px",
              borderRadius: "30px",
              backgroundColor: "#FFFFFF",
              border: '5px solid #c45c5c',
              boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.35)",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              ':hover': {
                cursor: 'pointer'
              }
            }}>
              <h2>탈퇴하기</h2>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

const Button = styled.button`
  font-size: 30px;
  width: 4rem;
  height: 4rem;
  margin-top: 25px;
  margin-bottom: 25px;
  // padding: 10px 20px;
  border: none;
  background-color: #ffffff;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.35);
  border-radius: 15px;
  color: black;
  // font-style: italic;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #fac2be;
  }
`;

const AppWrap = styled.div`
  text-align: center;
  // margin: 50px auto;
`;

export default GroupRoom;