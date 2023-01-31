import React from 'react';
import { Box } from '@mui/system';
import { BiPencil } from 'react-icons/bi';
import PersonIcon from '@mui/icons-material/Person';

import './Profile.css';

class Profile extends React.Component {
  render() {
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
        <div className='pencil'><BiPencil size='25' /></div>
        <div className='inbox1'>
          <PersonIcon
            sx={{
              width: "120px",
              height: "120px",
            }}>
          </PersonIcon>
        </div>
      </Box>
    );
  }
}

export default Profile;