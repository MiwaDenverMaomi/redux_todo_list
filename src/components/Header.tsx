import React from 'react'
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { LoginState } from '../types/Login';
import { RootState,RootActions } from '../types';
import { login,logout } from '../actions/LoginActions';
import store from '../store';
import { UserType } from '../types/Login';

const Header = ({ isLogin,logout,user }: Props) => {
  useEffect(() => {

  });
  return (
    < Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="body2" component="div" sx={{ flexGrow: 1, width: '5%', display: {xs:'none',sm:'block'} }}>
            Hi,{user === null ? 'Guest' : user.email?.slice(0, 5) + '***'}
          </Typography>
          <Typography component="div" sx={{ flexGrow: 1, width: { md: '90%', sm:'60%',xs: '10%' }, fontSize: {md:'18px',xs:'14px'} }}>
            Redux TODO List
          </Typography>

          {isLogin ?
            <Button color="inherit" onClick={logout} sx={{ width: '5%', fontSize: { md: '18px', xs: '14px' } }}>Logout</Button>
            :
              <Button color="inherit"><Link href="/">Login</Link></Button>}
        </Toolbar>
      </AppBar>
    </Box >
  )
};

type StateToProps = {
  isLogin: RootState['login']['isLogin'],
  user:RootState['login']['user']
};

type DispatchToProps = {
  logout:()=>void
};
type Props = StateToProps&DispatchToProps;

type AppDispatch = Dispatch;
type AppThunkDispatch = ThunkDispatch<RootState, undefined, RootActions>;

const dispatchToProps = (dispatch:AppDispatch&AppThunkDispatch) => {
  return {
    logout:()=>dispatch(logout())
  }
};
const mapStateToProps = (state: RootState) => {
  return {
    isLogin: state.login.isLogin,
    user:state.login.user
  }
};

export default connect(mapStateToProps,dispatchToProps)(Header);
