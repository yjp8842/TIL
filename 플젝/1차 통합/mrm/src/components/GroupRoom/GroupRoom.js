// import { Fragment } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

import { Grid } from '@mui/material';
import { Box } from '@mui/system';

import PageIcon from '../MyRoom/MyRoomItem/PageIcon';
import GroupProfile from './GroupRoomItem/GroupProfile';
import HomeBtn from './GroupRoomItem/HomeBtn';
import ChatRoom from './GroupRoomItem/ChatRoom';
import { NavItem } from './GroupRoomItem/Category';
import TodoBox from './GroupRoomItem/TodoInGroup';
import MemoBox from './GroupRoomItem/MemoInGroup';
import TimeTableBox from './GroupRoomItem/TimeTableInGroup';
import CalendarBox from '../Calendar/Calendar';

import './Group.css';

const GroupRoom = () => {
  const handleOpenNewTab = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  return (
    <Grid container>
      <div className='side-box'>
        <Box>
          {/* 해당 userId의 경로로 이동할 수 있도록 변경해야함 */}
          <Link to={`/myroom`}><PageIcon /></Link>
        </Box>
        <div className='side-box-line' />
        <div className='side-box-list'>
          <div><PageIcon /></div>
          <Box>
            <Box
              sx={{
                width: "64px",
                height: "64px",
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
              }}>
            </Box>
          </Box>
        </div>
      </div>

      <div className='main-box'>
        <div className='main-left-right'>
          <GroupProfile />
          {/* 해당 groupId의 경로로 이동할 수 있도록 변경해야함 */}
          <Link to={`/group`}><HomeBtn /></Link>
          <Link to={`/group/chat`}><ChatRoom /></Link>

          <button className='openvidu-btn' onClick={() => handleOpenNewTab("https://i8a406.p.ssafy.io:8085/#/")}>화상채팅방</button>
          
          <NavItem>
            {/* 하위 메뉴 열림 */}
            <div className='category-box'>
              <Link to={`/group/board`}><li>게시판</li></Link> 
              <Link to={`/group/qna`}><li>Q&A</li></Link>   
            </div>
          </NavItem>

        </div>
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>

          <TodoBox />
          <MemoBox />
          <TimeTableBox />
          
        </Box>

        <div className='main-left-right'>
          <CalendarBox />
          <div className='member-list'>
            <h3>그룹 인원</h3>
          </div>
          <div className='quit-btn'>
            <h2>탈퇴하기</h2>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default GroupRoom;