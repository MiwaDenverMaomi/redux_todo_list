
import { Action } from 'redux';

export type LoginState = {
  login: {
    isLogin: boolean,
    signUpResult: any,
    user: any | null,
  }
}

type LoginPayload = string;
type SignUpPayload = {
  result:any
}
// type CheckAuthStatePayload = any;
type CheckAuthStatePayload = null;
type LogoutPayload = any;

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

export interface LogoutAction extends Action {
  type: 'LOGOUT',
  payload:LogoutPayload
}
export type LoginActions=LoginAction|SignUpAction|CheckAuthStateAction|LogoutAction;
