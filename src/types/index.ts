import { LoginActions, LoginState } from '../types/Login';
import {TodoState,TodoActions} from './Todo';

export type RootActions = LoginActions;
export type RootState = LoginState&TodoState ;
