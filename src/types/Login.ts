
import { Action } from 'redux';
import type { User } from "firebase/auth";
import { useState } from "react";

export type UserType = User | null;

export type LoginState = {
  login: {
      isLogin: boolean,
      signUpResult: string,
      loginResult: string,
      user: UserType,
    }
  }


type LoginPayload = UserType |undefined|any;
type SignUpPayload = UserType | undefined | any;

type CheckAuthStatePayload = null;
type LogoutPayload = undefined;

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
