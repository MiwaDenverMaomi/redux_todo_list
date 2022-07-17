import { ThunkAction, Dispatch } from "@reduxjs/toolkit";
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";

export const login = (isLogin: boolean) => {
  return {
    type: 'LOGIN',
    payload:isLogin
  }
}

export const signup = (email: string, password: string): ThunkAction<any, any, any, any> => async (dispatch: Dispatch) => {
  const result = await createUserWithEmailAndPassword(auth, email, password).then(res => console.log(res)).catch(err => console.log(err));
  dispatch({ type: 'SIGNUP', payload: '' });
}

export const checkAuthState = (): ThunkAction<any, any, any, any> => (dispatch: Dispatch) => {
  let user = null;
     onAuthStateChanged(auth, (currentUser) => {
     user = currentUser;
  });
  dispatch({ type: 'CHECK_AUTH_STATE', payload: user });
}
