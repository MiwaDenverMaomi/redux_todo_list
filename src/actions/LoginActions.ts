import { ThunkAction, Dispatch } from "@reduxjs/toolkit";
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

export const login = (isLogin: boolean) => {
  return {
    type: 'LOGIN',
    payload:isLogin
  }
}

export const signup = (email: string, password: string): ThunkAction<any, any, any, any> => async (dispatch: Dispatch) => {
  const result = await createUserWithEmailAndPassword(auth, email, password).then(res => res.user).catch(err => console.log(err));
  console.log(result);
  dispatch({ type: 'SIGNUP', payload: result });
}

// export const checkAuthState = (): ThunkAction<any, any, any, any> => (dispatch: Dispatch) => {
//   let user = null;
//      onAuthStateChanged(auth, (currentUser) => {
//      user = currentUser;
//   });
//   dispatch({ type: 'CHECK_AUTH_STATE', payload: user });
// }

export const checkAuthState = () => {
  return {
    type: 'CHECK_AUTH_STATE',
    payload: null
  }
}

export const logout = (): ThunkAction<any, any, any, any> => async (dispatch: Dispatch) => {
  const result = await signOut(auth).then(res=>res).catch(err=>err);
  return {
    type: 'LOGOUT',
    payload:result
  }
};
