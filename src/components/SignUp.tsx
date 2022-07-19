import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Dispatch } from '@reduxjs/toolkit';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { RootState,RootActions } from '../types';
import { signup,checkAuthState } from '../actions/LoginActions';
import store from '../store';

const Copyright = React.memo((props: any)=> {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Redux Todo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
);

const theme = createTheme();

const SignUp = ({ isLogin, signup,checkAuthState,signUpResult }: Props) => {
  const [errMsg, setErrMsg] = useState<{ emailErr: string, passwordErr: string }>({ emailErr: '', passwordErr: '' });
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rePassword, setRePassword] = useState<string>('');
  const [emailErr, setEmailErr] = useState<string>('');
  const [passwordErr, setPasswordErr] = useState<string>('');
  const [rePasswordErr, setRePasswordErr] = useState<string>('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('handleSubmit');

    let emailErrMsg = '';
    let passwordErrMsg = '';
    let rePasswordErrMsg = '';
    setEmailErr('');
    setPasswordErr('');
    setRePasswordErr('');

    const emailPattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
    const sanitize = /<|>|&|'|"/g;

    if (emailPattern.test(email) === false) {
      emailErrMsg = 'Input valid email address.';
    }

    if (email.search(sanitize)!== -1) {
      emailErrMsg=`Do not use "<",">","&","'".`
    }

    if (email.length < 6 || email.length > 255) {
      emailErrMsg = 'Input email address within 7-255 letters.'
    }

    if (password.length < 6 || password.length > 255) {
      passwordErrMsg='Input password within 7-255 letters.'
    }

    if (rePassword.length < 6 || rePassword.length > 255) {
      rePasswordErrMsg = 'Input password within 7-255 letters.'
    }

    if (passwordErrMsg === '') {
      console.log('passwordErr no');
      if (rePassword !== password) {
        console.log('password!==repassword');
        rePasswordErrMsg = 'Confirm the password.';
      }
    }

    if (emailErrMsg.length > 0) { setEmailErr(emailErrMsg) };
    if (passwordErrMsg.length > 0) { setPasswordErr(passwordErrMsg) };
    if (rePasswordErrMsg.length > 0) { setRePasswordErr(rePasswordErrMsg) };
    console.log(emailErrMsg.length > 0 ? 'email error!' : 'no email err');
    console.log(passwordErrMsg.length > 0 ? 'password error!' : 'no password err');
    console.log(rePasswordErrMsg.length > 0 ? 'repassword error!' : 'no repassword err');

    if (emailErrMsg===''&&passwordErrMsg===''&&rePasswordErrMsg==='') {
      console.log('signUp');
      signup(email, password);
    }

  };
  const navigate = useNavigate();
  useEffect(() => {
    console.log('signupcomponent usefect')
    checkAuthState();
  }, [signUpResult]);
  console.log('signUP');
  console.log(store.getState());
  return (
    <ThemeProvider theme={theme}>
      {isLogin ? <Navigate to="/" /> :
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5" sx={{mb:3}}>
              Sign Up
            </Typography>
            <Typography component="div" variant="body2" color="red">
              {signUpResult}
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <Typography component="div" variant="body2" color="red">
                {emailErr}
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={e => setEmail(e.target.value)}
              />
              <Typography component="div" variant="body2" color="red">
                {passwordErr}
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => { setPassword(e.target.value) }}
              />
              <Typography component="div" variant="body2" color="red">
                {rePasswordErr}
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="re_password"
                label="Confirm password"
                type="password"
                id="re_password"
                autoComplete="current-password"
                onChange={ e=>setRePassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>

        <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      }
        </ThemeProvider>
  );

}

type DispatchToProps = {
  signup: (email: string, password: string) => void,
  checkAuthState:()=>void
}

type StateToProps = {
  isLogin: RootState['login']['isLogin'],
  signUpResult:RootState['login']['signUpResult']
}
type Props = StateToProps & DispatchToProps;

type AppThunkDispatch = ThunkDispatch<RootState, undefined, RootActions>;
type AppDispatch = Dispatch;

const mapDispatchToProps = (dispatch: AppThunkDispatch & AppDispatch)=> {
  return{
    signup: (email: string, password: string) => dispatch(signup(email, password)),
    checkAuthState: () => dispatch(checkAuthState())

  }
};
const mapStateToProps = (state: RootState) => {
  return {
    isLogin: state.login.isLogin,
    signUpResult:state.login.signUpResult
  }
 };
export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
