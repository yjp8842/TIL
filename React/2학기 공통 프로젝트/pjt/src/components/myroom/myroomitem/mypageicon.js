import React from 'react';
import { Box } from '@mui/system';

class MyPage extends React.Component {
  render() {
    return (
      <Box
        type="button"
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
    );
  }
}

export default MyPage;