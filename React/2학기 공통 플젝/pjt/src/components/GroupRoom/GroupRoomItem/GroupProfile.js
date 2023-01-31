import React from 'react';
import { Box } from '@mui/system';
// import { BiPencil } from 'react-icons/bi';
// import PersonIcon from '@mui/icons-material/Person';

import './GroupProfile.css';
import { InputSample } from './GroupProfileLogic';

class GroupProfile extends React.Component {
  render() {
    // function onChange() {
    //   const inputText = document.getElementById('input-text');
    //   const inputSample = document.getElementById('input-sample');
    //   // console.log(inputSample.classList.contains('display'))
    //   inputSample.classList.remove('display');
    //   inputText.classList.add('display');
    // }

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
          <InputSample />
      </Box>
    );
  }
}

export default GroupProfile;