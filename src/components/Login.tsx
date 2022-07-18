import React, { useState, useEffect } from 'react';
import { Navigate,useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Dispatch,} from '@reduxjs/toolkit';
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
import store from '../store';
import { RootState } from '../types';
import { login,checkAuthState } from '../actions/LoginActions';



const Copyright=(props: any)=> {
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

const theme = createTheme();

const Login = ({ isLogin, login,checkAuthState,loginResult }: Props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errMsgs, setErrMsgs] = useState<{ emailErr: string, passwordErr: string }>({ emailErr: '', passwordErr: '' });

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('handleSubmit-login');
//setErrMsgはすぐには反映されないことに注意。
    let emailErrMsg = '';
    let passwordErrMsg = '';
    setErrMsgs({ emailErr: '', passwordErr: '' });

    const emailPattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
    const sanitize = /<|>|&|'|"/g;

    if (emailPattern.test(email) === false) {
      emailErrMsg = 'Input valid email address.';
    }

    if (email.search(sanitize) !== -1) {
      emailErrMsg = `Do not use "<",">","&","'".`
    }

    if (email.length < 6 || email.length > 255) {
      console.log('login emailerr');
      emailErrMsg = 'Input email address within 7-255 letters.'
    }

    if (password.length < 6 || password.length > 255) {
      passwordErrMsg = 'Input password within 7-255 letters.'
    }



    if (passwordErrMsg.length > 0||emailErrMsg.length>0) {
      setErrMsgs({ ...errMsgs, emailErr:emailErrMsg,passwordErr: passwordErrMsg })

    };

    // if (emailErrMsg.length > 0) {
    //   console.log('emailErrMsg set')
    //   console.log(emailErrMsg)
    //   setErrMsgs({ ...errMsgs, emailErr: emailErrMsg })
    // };//setErrMsgsの更新はすぐには反映されないので、更新前の
    //値で上書きされてしまうのだ。

    if (emailErrMsg === '' && passwordErrMsg === '') {
      console.log('login');
      login(email, password);
    }

  };
  const navigate = useNavigate();
  useEffect(() => {
    checkAuthState();
    navigate("/");
  }, [loginResult]);

  console.log(store.getState());
  return (
    <ThemeProvider theme = { theme }>
      <Container component = "main" maxWidth = "xs">
          <Box
            sx = {{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }
    }
    >
          <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
              Login
          </Typography>
          <Typography component="div" variant="body2">
            {loginResult}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Typography component="div" variant="body2" color="red">
              {errMsgs.emailErr}
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
              {errMsgs.passwordErr}
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
                onChange={e => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Box>
          </Box >

  <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container >
        </ThemeProvider >
      );
}

type AppDispatch = Dispatch;
type AppThunkDispatch = ThunkDispatch<any, any, any>
type DispatchToProps = {
  login: (email: string, password: string) => void,
  checkAuthState: () => void

}
type StateToProps = {
  isLogin: RootState['login']['isLogin'],
  loginResult: RootState['login']['loginResult']

}
type Props = DispatchToProps & StateToProps;

const mapDispatchToProps = (dispatch: AppDispatch&AppThunkDispatch) => {
  return {
    login: (email: string, password: string) => dispatch(login(email, password)),
    checkAuthState: () => dispatch(checkAuthState())
  }
};
const mapStateToProps = (state: RootState) => {
  return {
    isLogin: state.login.isLogin,
    loginResult:state.login.loginResult
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Login)
