// import { Fragment } from 'react';
import React from 'react';

import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import HomePage from '../myroom/myroomitem/homepage';
import { Link } from 'react-router-dom';
import Profile from '../myroom/myroomitem/profile';
import CalendarBox from '../myroom/myroomitem/calendar';
// import classes from '../rooms/myroom.css';
// import mealsImage from '../../assets/meals.jpg';

const Grouproom = () => {
  return (
    <Grid container>
      <Box
        sx={{
          width: "5vw",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#4A4A4A",
        }}>
        <Box>
          <Link to={`/myroom`}><HomePage /></Link>
        </Box>
        <Box
          sx={{
            width: "4vw",
            height: "5px",
            backgroundColor: "#FFFFFF",
            borderRadius: "10px"
          }}>
        </Box>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
          <Box>
            <HomePage />
          </Box>
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
        </Box>
      </Box>

      <Box
        sx={{
          width: "95vw",
          display: "flex",
          justifyContent: "space-between",
        }}>
        <Box
          sx={{
            width: "15vw",
            height: "98vh",
            paddingY: "1vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "center",
            backgroundColor: "#ebe5d1",
          }}>
          <Profile />
        </Box>
        <Box
          sx={{
            width: "15vw",
            height: "98vh",
            paddingY: "1vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "space-evenly",
            // justifyContent: "center",
            backgroundColor: "#ebe5d1",
          }}>
          <CalendarBox />
          <Box
            sx={{
              width: "250px",
              height: "580px",
              marginTop: "20px",
              borderRadius: "30px",
              backgroundColor: "#FFFFFF",
              boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.35)"
            }}>
          </Box>
          <Box
            sx={{
              width: "250px",
              height: "100px",
              marginTop: "20px",
              borderRadius: "30px",
              backgroundColor: "#FFFFFF",
              boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.35)"
            }}>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Grouproom;