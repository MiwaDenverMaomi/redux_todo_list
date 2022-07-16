import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Container from '@mui/material/Container';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Create from './Create';
import {RootState} from '../types';
import { TodoState } from '../types/Todo';
import { deleteTodo,checkTodo,editMode,editTodo } from '../actions/TodoActions';



const ToDoList = ({todos,deleteTodo,checkTodo,editMode,edit_id,editTodo}:Props) => {
  console.log(todos)
  const handleEdit = (e:any) => {
    console.log('handleEdit');
    console.log(e);
    if (e.keyCode === 13 && e.target.value.trim() !== '' && edit_id !== null) {
      editTodo(edit_id, e.target.value);
       }

   }
  return (
    <Container component="main" maxWidth="xs">
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
      <Create />
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos!==undefined&&todos.length>0?todos.map((value) => {
          const labelId = `checkbox-list-label-${value.id}`;
          console.log(value.id)
          return (
            <ListItem
              key={value.id}
              secondaryAction={
                <IconButton edge="end" aria-label="comments" onClick={()=>deleteTodo(value.id)}>
                  <DeleteForeverIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton role={undefined} dense>
                <ListItemIcon onClick={() => checkTodo(value.id)}>
                  <Checkbox
                    edge="start"
                    checked={value.is_done}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                {edit_id === value.id ? <input onKeyDown={handleEdit} /> : <ListItemText id={labelId} primary={value.title} onClick={() => editMode(value.id)} />}
              </ListItemButton>
            </ListItem>
          );
        }):<Typography variant="h6">No todos!</Typography>}
      </List>
      </Box>
    </Container>
  )
}

type DispatchToProps = {
  deleteTodo: (id: number) => void,
  checkTodo: (id: number) => void,
  editMode: (id: number) => void,
  editTodo: ( id: number, title: string )=>void
};
type StateToProps={
  todos: RootState['todo']['todos'],
  edit_id: RootState['todo']['edit_id']
}
type Props = StateToProps&DispatchToProps

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    deleteTodo: (id: number) => dispatch(deleteTodo(id)),
    checkTodo: (id: number) => dispatch(checkTodo(id)),
    editMode: (id: number) => dispatch(editMode(id)),
    editTodo: ( id: number, title: string ) => dispatch(editTodo( id, title ))
  }
};

const mapStateToProps=(state:RootState)=>{//RootState or TodoState
  return{
    todos: state.todo.todos,
    edit_id:state.todo.edit_id
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);

//*propsにちゃんとactionを渡しているか確認必要。渡していなくてもエラーがでないので。
