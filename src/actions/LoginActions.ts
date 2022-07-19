import { ThunkAction, Dispatch } from "@reduxjs/toolkit";
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { UserType } from '../types/Login';
import { RootState, RootActions } from '../types';

export const login = (email: string, password: string): ThunkAction<void, RootState, undefined, RootActions> => async (dispatch: Dispatch) => {
  console.log('action login');
  const result = await signInWithEmailAndPassword(auth, email, password).then(res => res).catch(err => err);
  dispatch({type:'LOGIN',payload:result});
};


export const signup = (email: string, password: string): ThunkAction<void, RootState, undefined, RootActions> => async (dispatch: Dispatch) => {
  console.log('signup action');
  const result = await createUserWithEmailAndPassword(auth, email, password).then(res =>  res.user ).catch(err =>  err );
  console.log(result);
  dispatch({ type: 'SIGNUP', payload: result });
}

export const checkAuthState = (): ThunkAction<void, RootState, undefined, RootActions> => (dispatch: Dispatch) => {
  console.log('checkAuthState');

  onAuthStateChanged(auth, (user: UserType) => {
    dispatch({ type: 'CHECK_AUTH_STATE', payload: user });
  });

}

export const logout = (): ThunkAction<void, RootState, undefined, RootActions> => async (dispatch: Dispatch) => {
  console.log('logout action');
  const result = await signOut(auth).then(res =>res).catch(err => err);
  console.log(result);

  dispatch({type:'LOGOUT',payload:result});
};
