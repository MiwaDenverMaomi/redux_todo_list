
import { RootState,RootActions } from '../types';
import { LoginState,LoginActions } from '../types/Login';

type InitialState = LoginState['login'];

const initialState:InitialState = {
  isLogin:false
};
const LoginReducer = (state = initialState, action:LoginActions)=> {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLogin: !action.payload };
    default:
      return state;
  }
  return state;
}

export default LoginReducer
