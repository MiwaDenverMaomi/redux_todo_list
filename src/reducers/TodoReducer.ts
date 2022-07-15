import {TodoState,TodoActions} from '../types/Todo';

type InitialState=TodoState['todo'];

const initialState:InitialState={
  todos:[],
  todo:''
}
const TodoReducer=(state=initialState,action:TodoActions)=>{
   switch(action.type){
     case 'INPUT_TODO':
      console.log('input_todo');
      console.log(state.todo);
      return {...state,todo:action.payload};
      break;
     case 'ADD_TODO':
      console.log('addtodo');
      return {...state,todos:[...state.todos,{
        id:state.todos.length,
        title:state.todo,
        is_done:false
      }]}
      break;
   }
   return state;
};

export default TodoReducer;
