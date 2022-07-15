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
