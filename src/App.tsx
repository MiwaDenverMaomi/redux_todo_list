import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import { connect } from 'react-redux';
import { LoginState } from './types/Login';
import Login from './components/Login';
import ToDoList from './components/ToDoList';
import store from './store';

const App = ({ isLogin }: Props) => {
  console.log(store.getState());
  return (
    <>
    <CssBaseline />
    <div className="App">
      <Header />
      {isLogin ?<ToDoList/>:<Login /> }
    </div>
    </>
  );
}


type StateToProps = {
  isLogin:LoginState['login']['isLogin']
};
type Props = StateToProps;

const mapStateToProps = (state: LoginState) => {
  return {
    isLogin: state['login']['isLogin']
  }
};

export default connect(mapStateToProps)(App);
