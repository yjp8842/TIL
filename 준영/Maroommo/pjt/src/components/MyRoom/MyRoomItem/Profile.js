import React, { useState } from 'react';
import { Box } from '@mui/system';
import styled from "styled-components";
import ProfileModal from "../../Modal/ProfileModal";
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';

import './Profile.css';

const Profile = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  const onClickButton = () => {
    setIsOpen(true);
  };

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
        <ProfileButton onClick={onClickButton}>
          <EditIcon>
            sx={{
              width: "25px",
              height: "25px",
            }}
          </EditIcon>
        </ProfileButton>
              {isOpen && (<ProfileModal
                open={isOpen}
                onClose={() => {
                  setIsOpen(false);
                }}
              />)}
        <div className='inbox1'>
          <PersonIcon
            sx={{
              width: "120px",
              height: "120px",
            }}>
          </PersonIcon>
        <h2>SSAFY</h2>
        <h4>같이 취뽀하자</h4>
        </div>
      </Box>
    );
}

const ProfileButton = styled.button`
  margin-left: auto;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: -30px;
  border-radius: 20px;
  padding: 10px 10px;
  border: none;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: #fac2be;
  }
`;

export default Profile;