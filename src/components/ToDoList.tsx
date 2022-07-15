import React from 'react';
import {connect} from 'react-redux';
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
import Create from './Create';
import {RootState} from '../types';
import {TodoState} from '../types/Todo';


const ToDoList = ({todos}:Props) => {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: any) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

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
          return (
            <ListItem
              key={value.id}
              // secondaryAction={
              //   <IconButton edge="end" aria-label="comments">
              //     <CommentIcon />
              //   </IconButton>
              // }
              disablePadding
            >
              <ListItemButton role={undefined} onClick={handleToggle(value.id)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value.id) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={value.title} />
              </ListItemButton>
            </ListItem>
          );
        }):<Typography variant="h6">No todos!</Typography>}
      </List>
      </Box>
    </Container>
  )
}

type StateToProps={
  todos:RootState['todo']['todos']
}
type Props=StateToProps

const mapStateToProps=(state:RootState)=>{//RootState or TodoState
  return{
    todos:state.todo.todos
  }
};
export default connect(mapStateToProps)(ToDoList);
