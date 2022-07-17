
import { ConstructionOutlined } from '@mui/icons-material';
import { RootState,RootActions } from '../types';
import { LoginState, LoginActions } from '../types/Login';
import {onAuthStateChanged,} from "firebase/auth";
import { auth } from '../firebase';

type InitialState = LoginState['login'];

const initialState:InitialState = {
  isLogin: false,
  signUpResult: '',
  user: null,
};
const LoginReducer = (state = initialState, action:LoginActions)=> {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLogin: !action.payload };
      break;
    case 'SIGNUP':
      console.log(action.payload);
        return { ...state, signUpResult: action.payload}
      break;
    // case 'CHECK_AUTH_STATE':
    //   console.log('checkAuthState');
    //   console.log(action.payload);
    //   return {...state,user:action.payload,isLogin:action.payload===null?false:true}
    case 'CHECK_AUTH_STATE':
      console.log('checkAuthState');
      let user = null;
      user=onAuthStateChanged(auth, (currentUser) => currentUser);
      console.log(user);
      return {...state, user: user, isLogin: user === null ? false : true}
      break;
    case 'LOGOUT':
      console.log('logout');
      console.log(action.payload)
      return { ...state,user:action.payload,isLogin:action.payload===null?false:true}
    default:
      return state;

  }
  return state;
}

export default LoginReducer
