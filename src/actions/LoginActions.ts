import { ThunkAction, Dispatch } from "@reduxjs/toolkit";
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

// export const login = (isLogin: boolean) => {
//   return {
//     type: 'LOGIN',
//     payload:isLogin
//   }
// }

export const login = (email:string,password:string): ThunkAction<any,any,any,any> =>async(dispatch:Dispatch)=>{
  const result = await signInWithEmailAndPassword(auth, email, password).then(res => res).catch(err => console.log('err!' + err));
  dispatch({type:'LOGIN',payload:result});
};
export const signup = (email: string, password: string): ThunkAction<any, any, any, any> => async (dispatch: Dispatch) => {
  const result = await createUserWithEmailAndPassword(auth, email, password).then(res => res.user).catch(err =>err);
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
  console.log('logout action');
  const result = await signOut(auth).then(res => { console.log('loggedout'); return res }).catch(err => { console.log(`ログアウト時にエラーが発生しました (${err})`) });
  console.log(result);
  dispatch({type:'LOGOUT',payload:result});
};
