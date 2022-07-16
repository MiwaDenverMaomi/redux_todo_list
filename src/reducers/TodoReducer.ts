import { TodoState, TodoActions } from '../types/Todo';


type InitialState=TodoState['todo'];

const initialState:InitialState={
  todos:[],
  todo:'',
  edit_id:null
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
       console.log(action)
       if (state.todo.trim() !== '') {
         return {
           ...state, todos: [...state.todos, {
             id: state.todos.length,
             title: state.todo,
             is_done: false
           }]
         }
        }

      break;
      case 'DELETE_TODO':
       console.log('dedetetodo');
       console.log(action.payload)
        return{...state,todos:state.todos.filter(todo=>todo.id!==action.payload)};
        break;
      case 'CHECK_TODO':
        console.log('checktodo');
        console.log(action);
        return{...state,todos:state.todos.map(todo=>todo.id===action.payload?{...todo,is_done:!todo.is_done}:todo)}//mapの中のreturnに注意
        break;
      case 'EDIT_MODE':
        console.log('editmode');
        return {...state,edit_id:action.payload}
       break;
     case 'EDIT_TODO':
       console.log('edittodo');
       console.log(action.payload)
       return { ...state,edit_id:null, todos: state.todos.map(todo => todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo) }
       break;
   }
   return state;
};

export default TodoReducer;

//to avoid errors
//0.Provider(index.ts) * onetime
//0-1.createStore(store/index.ts)->combineReducer(reducers/index.ts)*necessary if there is new state
//1.create action
//2.create types for action and state
//3.create reducer
//4.connect
