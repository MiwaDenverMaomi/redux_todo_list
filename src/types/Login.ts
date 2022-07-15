
import { Action } from 'redux';

export type LoginState = {
  login: {
    isLogin: boolean
  }
}

type LoginPayload = string;

export interface LoginAction extends Action {
  type: string,
  payload: LoginPayload
}

export type LoginActions=LoginAction;
