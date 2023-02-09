import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@mui/material';
import { Box } from '@mui/system';

import HomePage from '../MyRoom/MyRoomItem/PageIcon';
import GroupProfile from './GroupRoomItem/GroupProfile';
import HomeBtn from './GroupRoomItem/HomeBtn';
import ChatRoom from './GroupRoomItem/ChatRoom';
import { NavItem } from './GroupRoomItem/Category';
import CalendarBox from '../Calendar/Calendar';
import { boardActions } from '../../slice/boardSlice';
import BoardList from './Board/ArticlePage/Sections/BoardList';

import './Group.css';

const GroupBoard = () => {

  const navigate = useNavigate();
  const onArticleTitleClick = (id) => {
    const path = `/group/board/article/${id}`;
    navigate(path)
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(boardActions.getBoard());
  }, [dispatch]);

  const {board, isLoading, isSuccess, error } = 
  useSelector((state) => ({
    board: state.boardReducers.board,
    isLoading: state.boardReducers.isLoading,
    isSuccess: state.boardReducers.isSuccess,
    error: state.boardReducers.error}));

  return (
    <Grid container>
      <div className='side-box'>
        <Box>
          {/* 해당 userId의 경로로 이동할 수 있도록 변경해야함 */}
          <Link to={`/myroom`}><HomePage /></Link>
        </Box>
        <div className='side-box-line' />
        <div className='side-box-list'>
          <div><HomePage /></div>
          <Box>
            <Box
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
          

          <NavItem>
            {/** 하위에 있는 메뉴가 열립니다. **/}
            {/* <ul> */}
            <div className='category-box'>
              <Link to={`/group/board`}><li>게시판</li></Link> 
              <li>화상회의</li>  
              <Link to={`/group/qna`}><li>Q&A</li></Link>   
            </div>
            {/* </ul> */}
          </NavItem>

        </div>
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}>

          <Box sx={{mt:5}}>
            <h1>게시판</h1>
            <br></br>


            <div style={{ width: "80%", margin: "3rem auto" }}>
            {error ? (
              <h2>에러 발생: {error}</h2>
            ) : isSuccess && board.length > 0 ? (
              <BoardList 
                board={board}
                // handleDeleteClick={onDeleteClick}
                handleArticleTitleClick={onArticleTitleClick} />
            ) : isSuccess && board.length <= 0 ? (
              <p> 조회할 내용이 없습니다. </p>
            ) : (
              <p> 목록을 불러오는 중입니다. </p>
            )}
            </div>
            <Link to='/group/board/register?isForEdit=false'>
              <button>글쓰기</button>
            </Link>

          </Box>
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

export default GroupBoard;