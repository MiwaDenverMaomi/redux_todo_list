
import { RootState,RootActions } from '../types';
import { LoginState,LoginActions } from '../types/Login';

type InitialState = LoginState['login'];

const initialState:InitialState = {
  isLogin: false,
  signUpResult: '',
  user: null,
  userState:false,
};
const LoginReducer = (state = initialState, action:LoginActions)=> {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLogin: !action.payload };
      break;
    case 'SIGNUP':
      return { ...state, signUpResult: action.payload, isLogin: true }
      break;
    case 'CHECK_AUTH_STATE':
      return {...state,user:action.payload,userState:action.payload===null?false:true}
    default:
      return state;

  }
  return state;
}

export default LoginReducer
