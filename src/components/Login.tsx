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

const Login = ({ isLogin, login,checkAuthState }: Props) => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [errMsg, setErrMsg] = useState<{ emailErr: string, passwordErr: string }>({ emailErr: '', passwordErr: '' });

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('handleSubmit-login');
    if (errMsg.emailErr === '' && errMsg.passwordErr === '' && email !== null && password !== null) {
      console.log('login');
      login(email, password);
    }

  };
  const navigate = useNavigate();
  useEffect(() => {
    checkAuthState();
    navigate("/");
  }, []);
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
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
  isLogin:RootState['login']['isLogin']
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
    isLogin:state.login.isLogin
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Login)
