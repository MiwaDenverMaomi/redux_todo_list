
import { ConstructionOutlined } from '@mui/icons-material';
import { RootState,RootActions } from '../types';
import { LoginState, LoginActions } from '../types/Login';
import {onAuthStateChanged,} from "firebase/auth";
import firebase from 'firebase/app';
import { auth } from '../firebase'


type InitialState = LoginState['login'];

const initialState:InitialState = {
  isLogin: false,
  signUpResult: '',
  user: null,
};
const LoginReducer = (state = initialState, action:LoginActions)=> {
  switch (action.type) {
    case 'LOGIN':
      return { ...state,user:action.payload, isLogin: action.payload===null?false:true};
      break;
    case 'SIGNUP':
      console.log(action.payload);
      return { ...state, user: action.payload, signUpResult: action.payload, isLogin: action.payload ===null?false:true}
      break;
    // case 'CHECK_AUTH_STATE':
    //   console.log('checkAuthState');
    //   console.log(action.payload);
    //   return {...state,user:action.payload,isLogin:action.payload===null?false:true}
    case 'CHECK_AUTH_STATE':
      console.log('checkAuthState');
      onAuthStateChanged(auth, user => {
        console.log('user===null?')
        console.log(user === null ? 'user is null' : 'user exists')
        console.log(user)

        return { ...state, user: user, isLogin: user === null ? false : true }
      });

      return state;
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
