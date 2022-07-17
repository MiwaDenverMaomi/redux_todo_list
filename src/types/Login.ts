
import { Action } from 'redux';

export type LoginState = {
  login: {
    isLogin: boolean,
    signUpResult: any,
    user: any | null,
    userState:boolean
  }
}

type LoginPayload = string;
type SignUpPayload = {
  result:any
}
type CheckAuthStatePayload = any;

export interface LoginAction extends Action {
  type: 'LOGIN',
  payload: LoginPayload
}

export interface SignUpAction extends Action {
  type: 'SIGNUP',
  payload:SignUpPayload
}

export interface CheckAuthStateAction extends Action {
  type: 'CHECK_AUTH_STATE',
  payload: CheckAuthStatePayload
}
export type LoginActions=LoginAction|SignUpAction|CheckAuthStateAction;
