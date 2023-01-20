import * as React from 'react';
import { useState } from 'react';

import { FormControl, FormHelperText } from '@mui/material';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

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

  // 유저가 아이디/비번 입력했을 때 비어있는 경우 에러 메시지 띄우는 함수
  function loginCheck() {
    const idCheck = document.getElementById('id')
    const passwordCheck = document.getElementById('password')
    if (!idCheck.value) {
      setIdError('아이디를 입력해주세요');
      idCheck.focus();
      return;
    }

    if (!passwordCheck.value) {
      setPasswordError('비밀번호를 입력해주세요');
      passwordCheck.focus();
      return;
    }
  }


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
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
          // sx={{
          //   backgroundImage: 'url(https://source.unsplash.com/random)',
          //   backgroundRepeat: 'no-repeat',
          //   backgroundColor: (t) =>
          //     t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          //   backgroundSize: 'cover',
          //   backgroundPosition: 'center',
          // }}
        >
          <h1>마룸모</h1>
          <h2>마이 룸에서 하는 스터디 모임</h2>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <h1>
              LOGIN
            </h1>
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Box noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <FormControl component="fieldset" variant='standard'>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="id"
                      label="아이디"
                      name="id"
                      autoComplete="id"
                      autoFocus
                    />
                    <FormHelperText>{idError}</FormHelperText>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="비밀번호"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      />
                    <FormHelperText>{passwordError}</FormHelperText>
                  </Grid>
                  {/* <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  /> */}
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 4, bgcolor: '#4A4A4A' }}
                  onClick={loginCheck}
                  >
                  로그인
                </Button>
                <Grid container>
                  <Grid item xs={4} sx={{textAlign: 'center'}}>
                    <Link href="#" variant="body2" sx={{ color: '#000000', textDecoration: 'none' }}>
                      아이디 찾기
                    </Link>
                  </Grid>
                  <Grid item xs={4} sx={{textAlign: 'center'}}>
                    <Link href="#" variant="body2" sx={{ color: '#000000', textDecoration: 'none' }}>
                      비밀번호 찾기
                    </Link>
                  </Grid>
                  <Grid item xs={4} sx={{textAlign: 'center'}}>
                    <Link href="#" variant="body2" sx={{ color: '#000000', textDecoration: 'none' }}>
                      {"회원가입"}
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