import { combineReducers } from '@reduxjs/toolkit';
import LoginReducer from '../reducers/LoginReducer';
import TodoReducer from '../reducers/TodoReducer';

const reducers = combineReducers({
  login: LoginReducer,
  todo:TodoReducer
});

export default reducers;
