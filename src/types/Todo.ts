import {Action} from 'redux';

export type Todo={
  id:number,
  title:string,
  is_done:boolean,
};

export type TodoState={
 todo: {
  todos:Todo[],
  todo:string,
  edit_id:null|number
 }
}

type InputTodoPayload=string;
type EditModePayload = string;
type DeleteTodoPayload = number;
type CheckTodoPayload = number;
type EditTodoPayload = {
  id: number,
    title: string,
}

export interface InputTodoAction extends Action{
  type:string,
  payload:InputTodoPayload
}

export interface AddTodoAction extends Action{
  type:'ADD_TODO',
  payload:''
}

export interface DeleteTodoAction extends Action {
  type: 'DELETE_TODO',
  payload: DeleteTodoPayload;
}

export interface CheckTodoAction extends Action {
  type: 'CHECK_TODO',
  payload: CheckTodoPayload;
}


export interface EditModeAction extends Action{
  type:'EDIT_MODE',
  payload:EditModePayload

}

export interface EditTodoAction extends Action {
  type: 'EDIT_TODO',
  payload: any

}
export type TodoActions = InputTodoAction | AddTodoAction | EditModeAction | DeleteTodoAction|CheckTodoAction|EditTodoAction

//**Actions-> Aaction|Baction|Caction, RootState-> A&B&C */
