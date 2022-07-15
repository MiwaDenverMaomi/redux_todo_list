import {Action} from 'redux';

export type Todo={
  id:number,
  title:string,
  is_done:boolean,
};

export type TodoState={
 todo: {
  todos:Todo[],
  todo:string
 }
}

type InputTodoPayload=string;

export interface InputTodoAction extends Action{
  type:string,
  payload:InputTodoPayload
}

export interface AddTodoAction extends Action{
  type:string,
  payload:''
}


export type TodoActions=InputTodoAction&AddTodoAction
