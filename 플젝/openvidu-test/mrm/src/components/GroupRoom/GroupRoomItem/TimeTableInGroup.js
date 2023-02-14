import React from "react";
import { Box } from "@mui/system";

class TimeTableBox extends React.Component {
  render() {
    return (
      <Box
        sx={{
          width: "950px",
          height: "250px",
          marginTop: "20px",
          paddingY: '20px',
          borderRadius: "30px",
          backgroundColor: "#FFFFFF",
          boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.35)",
          display: 'flex',
          justifyContent: 'center'
        }}>
        <h3>Time Table</h3>
      </Box>
    )
  }
}

export default TimeTableBox;