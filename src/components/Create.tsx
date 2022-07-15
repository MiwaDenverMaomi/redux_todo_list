import React from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {connect} from 'react-redux';
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
import {TodoState} from '../types/Todo';
import {inputTodo,addTodo} from '../actions/TodoActions';
import store from '../store';

const Create =({todo,inputTodo,addTodo}:Props)=>{
  console.log('store')
  console.log(store.getState())
     return(
      <>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="create_todo"
              label="Create your todo."
              name="todo"
              autoComplete="todo"
              autoFocus
              onChange={(e)=>inputTodo(e.target.value)}
            />
            <Button variant="contained" onClick={()=>addTodo()}>Add</Button>
      </>
      )
};

type StateToProps={
    todo:TodoState['todo']['todo'],
}
type DispatchToProps={
  inputTodo:(e:any)=>void,
  addTodo:()=>void,
};
type Props=StateToProps&DispatchToProps;

const dispatchToProps=(dispatch:Dispatch)=>{
  return{
    inputTodo:(title:string)=>dispatch(inputTodo(title)),
    addTodo:()=>dispatch(addTodo())
  }
};
const mapStateToProps=(state:TodoState['todo'])=>{
  console.log('mapstate')
  console.log(state.todo)
  return{
    todo:state.todo,
    todos:state.todos
  }
};

export default connect(mapStateToProps,dispatchToProps)(Create);
