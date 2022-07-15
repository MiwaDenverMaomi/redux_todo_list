import React from 'react'
import { connect } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { LoginState } from '../types/Login';
import { RootState } from '../types';
import { login } from '../actions/LoginActions';
import store from '../store';

const Header = ({ isLogin,login }: Props) => {
  useEffect(() => {

  });
  return (
    < Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Redux TODO List
          </Typography>
          <Button color="inherit">{isLogin ? `Logout`  :`Login`}</Button>
          <Button color="inherit" onClick={()=>login(isLogin)} >Change</Button>
        </Toolbar>
      </AppBar>
    </Box >
  )
};

type StateToProps = {
  isLogin:RootState['login']['isLogin']
};

type DispatchToProps = {
  login: (isLogin: boolean) => void
};
type Props = StateToProps&DispatchToProps;

const dispatchToProps = (dispatch:Dispatch) => {
  return {
    login:(loginStatus:boolean)=> dispatch(login(loginStatus))
  }
};
const mapStateToProps = (state: RootState) => {
  return {
    isLogin: state.login.isLogin
  }
};

export default connect(mapStateToProps,dispatchToProps)(Header);
