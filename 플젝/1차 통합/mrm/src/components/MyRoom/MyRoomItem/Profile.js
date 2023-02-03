import React, { useState } from 'react';
import { Box } from '@mui/system';
import styled from "styled-components";
import UserProfileModal from '../../Modal/Profile/UserProfileModal';
import EditIcon from '@mui/icons-material/Edit';

import './Profile.css';

const Profile = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  const onClickButton = () => {
    setIsOpen(true);
  };

  let getUserName = localStorage.getItem('username');
  let getUserIntro = localStorage.getItem('userintro');

  if (!getUserName || !getUserIntro) {
    getUserName = '이름';
    getUserIntro = '한 줄 소개';
  }

  return (
    <Box
      sx={{
        width: "250px",
        height: "220px",
        // marginLeft: "15px",
        borderRadius: "30px",
        backgroundColor: "#FFFFFF",
        boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.35)",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        justifyContent: "center",
      }}>
      <div className='profile-btn'>
        <ProfileButton onClick={onClickButton}>
          <EditIcon 
            sx={{
              width: "18px",
              height: "18px",
            }}>
          </EditIcon>
        </ProfileButton>
        {isOpen && (<UserProfileModal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />)}
      </div>
      <div className='inbox1'>
        {/* img를 userId에 맞는 이미지 src로 변경해야함 */}
        <img src='images/user.png' alt="user" className='user-image' />
        <h2>{getUserName}</h2>
        <h4>{getUserIntro}</h4>
      </div>
    </Box>
  );
}

const ProfileButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  width: 35px;
  height: 35px;
  border-radius: 20px;
  border: none;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: #fac2be;
  }
`;

export default Profile;