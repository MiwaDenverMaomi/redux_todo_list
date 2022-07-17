import React,{useState} from 'react';
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
import { RootState } from '../types';
import { signup } from '../actions/LoginActions';
import { type } from '@testing-library/user-event/dist/type';

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

const SignUp = ({ isLogin, signup }: Props) => {
  const [errMsg, setErrMsg] = useState<{ emailErr: string, passwordErr: string }>({ emailErr: '', passwordErr: '' });
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('handleSubmit');

    // if (email?.trim() === '') {
    //   setErrMsg({ ...errMsg, emailErr: 'Input required.' });
    //   return;
    // }
    // if (password.trim() !== '') {
    //   setErrMsg({ ...errMsg, passwordErr: 'Input required.' });
    //   return;
    // }

    // if () {
    //   setErrMsg({ ...errMsg, emailErr: 'Input valid Email Address within 255 letters.' });
    //   return;
    // }

    // if () {
    //   setErrMsg({ ...errMsg, passwordErr: 'Input password within 255 letters.' });
    //   return;
    // }

    // if (email?.length > 255) {
    //   setErrMsg({ ...errMsg, emailErr: 'Input valid Email Address within 255 letters.' });
    //   return;
    // }

    // if (password?.length > 255) {
    //   setErrMsg({ ...errMsg, passwordErr: 'Input password within 255 letters.' });
    //   return;
    //  }

    if (errMsg.emailErr===''&&errMsg.passwordErr==='' && email !== null && password !== null) {
      console.log('signUp');
      signup(email,password);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign Up
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
              onChange={(e) => { setPassword(e.target.value) }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="re_password"
              label="Confirm password"
              type="password"
              id="re_password"
              autoComplete="current-password"
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
              Sign Up
            </Button>
            <Grid item>
              <Link href="/signin" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

type DispatchToProps = {
  signup: (email: string, password: string) => void
}

type StateToProps = {
  isLogin:RootState['login']['isLogin']
}
type Props = StateToProps & DispatchToProps;

type AppThunkDispatch = ThunkDispatch<any, any, any>;
type AppDispatch = Dispatch;

const mapDispatchToProps = (dispatch: AppThunkDispatch & AppDispatch)=> {
  return{
    signup: (email: string, password: string) => dispatch(signup(email,password))
  }
};
const mapStateToProps = (state: RootState) => {
  return {
    isLogin:state.login.isLogin
  }
 };
export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
