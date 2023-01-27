import * as React from 'react';
import { useState } from 'react';
import { requestLogin } from './Login';

import { FormControl, FormHelperText } from '@mui/material';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Modal } from '@mui/material';
import Typography from '@mui/material/Typography';
// import FindId from './FindId';

const theme = createTheme();

const style1= {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "450px",
  height: "370px",
  bgcolor: '#4A4A4A',
  borderRadius: "30px",
  boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.35)",
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "450px",
  height: "450px",
  bgcolor: '#4A4A4A',
  borderRadius: "30px",
  boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.35)",
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: 'center'
};

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      id: data.get('id'),
      password: data.get('password'),
    });
  };

  const [idError, setIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  function loginCheck(e) {
    const idCheck = document.getElementById('id')
    const passwordCheck = document.getElementById('password')
    if (!idCheck.value) {
      setIdError('아이디를 입력해주세요');
      idCheck.focus();
      e.preventDefault();
      return;
    } else {
      setIdError('');
    }

    if (!passwordCheck.value) {
      setPasswordError('비밀번호를 입력해주세요');
      passwordCheck.focus();
      e.preventDefault();
      return;
    } else {
      setPasswordError('');
    }
  }

  const [idopen, idSetOpen] = React.useState(false);
  const [pwdopen, pwdSetOpen] = React.useState(false);
  const idHandleOpen = () => idSetOpen(true);
  const idHandleClose = () => idSetOpen(false);
  const passwordHandleOpen = () => pwdSetOpen(true);
  const passwordHandleClose = () => pwdSetOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh', fontFamily: "GangwonEdu_OTFBoldA" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            bgcolor: '#FAF6E9',
          }}
        > 
          {/* <img src='../../assets/img/logo.png' alt='logo' /> */}
          <h1>마룸모</h1>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} backgroundColor='#FAF6E9' elevation={6} square sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
            
            <h1>로그인</h1>
            <Link to='/myroom'>마이룸</Link>
            <Box noValidate onSubmit={handleSubmit} sx={{ mt: 3, width: "30vw" }}>
              <FormControl component="fieldset" variant='standard' sx={{width: "30vw"}}>
                <Box spacing={2} sx={{display: "flex", justifyContent: "center"}}>
                  <Box container sx={{display: 'flex', flexDirection: 'column', width: "15vw"}}>
                    <TextField
                      margin="normal"
                      required
                      id="id"
                      label="아이디"
                      name="id"
                      autoComplete="id"
                      autoFocus
                      sx={{
                        bgcolor: '#FFFFFF',
                      }}
                    />
                    <FormHelperText>{idError}</FormHelperText>
                    <TextField
                      margin="normal"
                      required
                      // fullWidth
                      name="password"
                      label="비밀번호"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      sx={{
                        bgcolor: '#FFFFFF',

                      }} 
                    />
                    <FormHelperText>{passwordError}</FormHelperText>

                  </Box>

                  <Button
                    type="submit"
                    sx={{ 
                      mt: 2,
                      mb: 2,
                      ml: 2,
                      backgroundColor: '#FFFFFF', 
                      color: '#000000', 
                      fontFamily: "GangwonEdu_OTFBoldA",
                      boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.15)"
                    }}
                    onClick={() => {
                      loginCheck();
                      requestLogin();
                    }}
                    >
                    로그인
                  </Button>

                </Box>
                <Grid container sx={{mt: 5, display: 'flex', justifyContent: 'center'}}>
                  <Grid item xs={3} sx={{textAlign: 'center'}}>
                    <Link href="#" underline='hover' variant="body2" onClick={idHandleOpen}>
                      아이디 찾기
                    </Link>
                    <Modal
                      open={idopen}
                      onClose={idHandleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style1}>
                        <Typography 
                          id="modal-modal-title"
                          sx={{
                            textAlign: "center",
                            fontFamily: 'GangwonEdu_OTFBoldA',
                            fontSize: "30px",
                            color: '#FFFFFF'
                          }}
                        >
                          아이디 찾기
                        </Typography>
                        <TextField
                          required
                          id="outlined-required"
                          placeholder='이름'
                          sx={{
                            marginTop: "20px",
                            width: "80%",
                            borderRadius: "10px",
                            bgcolor: '#FFFFFF'
                          }}
                        />
                        <TextField
                          required
                          id="outlined-required"
                          placeholder='이메일 주소'
                          sx={{
                            marginTop: "20px",
                            width: "80%",
                            borderRadius: "10px",
                            bgcolor: '#FFFFFF'
                          }}
                        />
                        <Button
                          type="submit"
                          sx={{
                            width: "80px",
                            height: "50px",
                            marginTop: "30px",
                            bgcolor: '#FFFFFF',
                            color: "#000000",
                            fontSize: "15px",
                            boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.35)",
                            // border: "1px solid #000000",
                            borderRadius: "15px",
                            ":hover": {
                              bgcolor: 'c4c4c4'
                            }
                          }}
                        >확인</Button>
                      </Box>
                    </Modal>
                  </Grid>
                  <Grid item xs={3} sx={{textAlign: 'center'}}>
                    <Link href="#" underline='hover' variant="body2" onClick={passwordHandleOpen}>
                      비밀번호 찾기
                    </Link>
                    <Modal
                      open={pwdopen}
                      onClose={passwordHandleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style2}>
                        <Typography 
                          id="modal-modal-title"
                          sx={{
                            textAlign: "center",
                            fontFamily: 'GangwonEdu_OTFBoldA',
                            fontSize: "30px",
                            color: '#FFFFFF'
                          }}
                        >
                          비밀번호 찾기
                        </Typography>
                        <TextField
                          required
                          id="outlined-required"
                          placeholder='이름'
                          sx={{
                            marginTop: "20px",
                            width: "80%",
                            border: "1px solid #000000",
                            borderRadius: "10px",
                            bgcolor: '#FFFFFF'
                          }}
                        />
                        <TextField
                          required
                          id="outlined-required"
                          placeholder='아이디'
                          sx={{
                            marginTop: "20px",
                            width: "80%",
                            border: "1px solid #000000",
                            borderRadius: "10px",
                            bgcolor: '#FFFFFF'
                          }}
                        />
                        <TextField
                          required
                          id="outlined-required"
                          placeholder='이메일 주소'
                          sx={{
                            marginTop: "20px",
                            width: "80%",
                            border: "1px solid #000000",
                            borderRadius: "10px",
                            bgcolor: '#FFFFFF'
                          }}
                        />
                        <Button
                          type="submit"
                          sx={{
                            width: "80px",
                            height: "50px",
                            marginTop: "20px",
                            color: "#000000",
                            fontSize: "15px",
                            boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.35)",
                            // border: "1px solid #000000",
                            borderRadius: "15px",
                            bgcolor: '#FFFFFF'
                          }}
                        >확인</Button>
                      </Box>
                    </Modal>
                  </Grid>
                  <Grid item xs={3} sx={{textAlign: 'center'}}>
                    <Link href='#' underline='hover' varient='body2' to="/signup">
                      회원가입
                    </Link>
                  </Grid>
                </Grid>
              </FormControl>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}