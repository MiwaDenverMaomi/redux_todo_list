
import { ConstructionOutlined } from '@mui/icons-material';
import { RootState,RootActions } from '../types';
import { LoginState, LoginActions } from '../types/Login';
import {onAuthStateChanged,} from "firebase/auth";
import firebase from 'firebase/app';
import { auth } from '../firebase';
import { UserType } from '../types/Login';


type InitialState = LoginState['login'];

const initialState:InitialState = {
  isLogin: false,
  signUpResult: '',
  user: null,
  loginResult: '',
};
const LoginReducer = (state = initialState, action:LoginActions)=> {
  switch (action.type) {
    case 'LOGIN':
      let loginResult = '';

      if (action.payload=== undefined) {
        loginResult = 'Something is wrong. Try again lager.';
      }else if(action.payload.code === 'auth/invalid-email') {
          loginResult = 'Input valid Email address.';
        } else if (action.payload.code === 'auth/user-disabled') {
          loginResult = 'This user is invalid.';
        } else if (action.payload.code === 'auth/user-not-found') {
          loginResult = 'This user does not exist.';
        } else if (action.payload.code === 'auth/wrong-password') {
          loginResult = 'Password is not invalid.';
        } else if (action.payload.code === 'auth/too-many-requests') {
          loginResult = 'Too many attempts. Try again later.'
        } else {
          loginResult = action.payload.message
        }
      console.log(loginResult);
      return {
        ...state,
        loginResult:loginResult
      };
      break;

    case 'SIGNUP':
      console.log(action.payload);
      let signUpResult = '';

      if (action.payload === undefined) {
        signUpResult= 'Something is wrong. Try again lager.';
      } else if (action.payload.code === 'auth/invalid-email') {
        signUpResult = 'Input valid Email address.';
      } else if (action.payload.code === 'auth/user-disabled') {
        signUpResult = 'This user is invalid.';
      } else if (action.payload.code === 'auth/user-not-found') {
        signUpResult = 'This user does not exist.';
      } else if (action.payload.code === 'auth/wrong-password') {
        signUpResult = 'Password is not invalid.';
      } else if (action.payload.code === 'auth/too-many-requests') {
        signUpResult = 'Too many attempts. Try again later.'
      } else {
        signUpResult = action.payload.message
      }
      return { ...state, user: action.payload, signUpResult: action.payload}
      break;

    case 'CHECK_AUTH_STATE':
      console.log('checkAuthState');
      console.log(action.payload);
      return { ...state, user: action.payload, isLogin: action.payload === null ? false : true }
      break;
    case 'LOGOUT':
      console.log('logoutreducer');
      console.log(action.payload)
      return { ...state,user:null,isLogin:action.payload===undefined?false:true}
    default:
      return state;

  }
  return state;
}

export default LoginReducer
