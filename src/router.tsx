import React from 'react';
import { connect } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { LoginState } from './types/Login';
import Header from './components/Header';
import App from './App';
import Login from './components/Login';
import ToDoList from './components/ToDoList';
import SignUp from './components/SignUp';

const Router = ({ isLogin }: Props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <Header />
       <BrowserRouter>
       <Routes>
        <Route path="/" element={ isLogin?<ToDoList/>:<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />


      </Routes>
        </BrowserRouter>
      </div>
    </React.Fragment>
  )
}


type StateToProps = {
  isLogin: LoginState['login']['isLogin']
};
type Props = StateToProps;

const mapStateToProps = (state: LoginState) => {
  return {
    isLogin: state['login']['isLogin']
  }
};
export default connect(mapStateToProps)(Router)
