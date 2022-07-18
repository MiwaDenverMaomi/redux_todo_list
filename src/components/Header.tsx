import React from 'react'
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { LoginState } from '../types/Login';
import { RootState } from '../types';
import { login,logout } from '../actions/LoginActions';
import store from '../store';

const Header = ({ isLogin,logout }: Props) => {
  useEffect(() => {

  });
  return (
    < Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Redux TODO List
          </Typography>
          {isLogin ?
            <Button color="inherit" onClick={logout}>Logout</Button>
            :
            <Button color="inherit"><Link href="/">Login</Link></Button>}
        </Toolbar>
      </AppBar>
    </Box >
  )
};

type StateToProps = {
  isLogin:RootState['login']['isLogin']
};

type DispatchToProps = {
  logout:()=>void
};
type Props = StateToProps&DispatchToProps;

type AppDispatch = Dispatch;
type AppThunkDispatch = ThunkDispatch<any, any, any>;

const dispatchToProps = (dispatch:AppDispatch&AppThunkDispatch) => {
  return {

    logout:()=>dispatch(logout())
  }
};
const mapStateToProps = (state: RootState) => {
  return {
    isLogin: state.login.isLogin
  }
};

export default connect(mapStateToProps,dispatchToProps)(Header);
