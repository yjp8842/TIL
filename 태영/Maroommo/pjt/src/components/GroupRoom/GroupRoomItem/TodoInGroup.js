import React from "react";
import { Box } from "@mui/system";

class TodoBox extends React.Component {
  render() {
    return (
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '1000px'
        }}>
        <Box
          sx={{
            width: "500px",
            height: "250px",
            marginTop: "20px",
            paddingY: '20px',
            borderRadius: "30px",
            backgroundColor: "#FFFFFF",
            boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.35)",
            display: 'flex',
            justifyContent: 'center'
          }}>
          <h3>할 일</h3>
        </Box>
        <Box 
          sx={{
            width: '400px',
            height: '250px',
            marginTop: "20px",
            paddingY: '20px',
            borderRadius: "30px",
            backgroundColor: "#FFFFFF",
            boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.35)",
            display: 'flex',
            justifyContent: 'center'
          }}>
          <h3>완료한 일</h3>
        </Box>
      </Box>
    )
  }
}

export default TodoBox;