
import { Action } from 'redux';
import type { User } from "firebase/auth";
import { useState } from "react";

export type UserType = User | null;

export type LoginState = {
  login: {
    isLogin: boolean,
    signUpResult: any,
    user: UserType,
    loginResult:string|null
  }
}

type LoginPayload = any;
type SignUpPayload = any;

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
