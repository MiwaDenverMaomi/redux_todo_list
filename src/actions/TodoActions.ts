export const inputTodo=(todo:string)=>{
  return{
    type:'INPUT_TODO',
    payload:todo
  }
};

export const addTodo=()=>{
  return{
    type:'ADD_TODO',
    payload:''
  }
};

export const deleteTodo = (id: number) => {

  return {
    type: 'DELETE_TODO',
    payload:id
  }
};

export const checkTodo = (id: number) => {
  return {
    type: 'CHECK_TODO',
    payload: id
  }
};

export const editMode = (id: number) => {
  console.log('editmodeaction')
  console.log(id)
  return{
    type:'EDIT_MODE',
    payload:id
  }
};

export const editTodo = (id: number, title: string) => {
  console.log('editTodoaction')
  return {
    type: 'EDIT_TODO',
    payload: {
      id: id,
      title: title,
    }
  }
};
