import React from 'react';
import { Box } from '@mui/system';
import { BiPencil } from 'react-icons/bi';
import PersonIcon from '@mui/icons-material/Person';

import './Profile.css';
import { InputSample } from './ProfileLogic';

class Profile extends React.Component {
  render() {
    function onChange() {
      const inputText = document.getElementById('input-text');
      const inputSample = document.getElementById('input-sample');
      // console.log(inputSample.classList.contains('display'))
      inputSample.classList.remove('display');
      inputText.classList.add('display');
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
        <div className='pencil'><BiPencil size='25' onClick={onChange} /></div>
        <div className='inbox1'>
          <PersonIcon
            sx={{
              width: "120px",
              height: "120px",
            }}>
          </PersonIcon>
          {/* <h2>SSAFY</h2> */}
          <div className='display' id='input-sample'>
            <InputSample />
          </div>
          <div className="update" id="input-text">
            <h1>SSAFY</h1>
            {/* <h3>{name}</h3> */}
            {/* <h3>{intro}</h3> */}
          </div>
          {/* <h4>같이 취뽀하자</h4> */}
        </div>
      </Box>
    );
  }
}

export default Profile;