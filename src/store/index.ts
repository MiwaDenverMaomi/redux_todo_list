import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import  thunk  from 'redux-thunk';
import reducers from '../reducers';

const store = createStore(reducers,applyMiddleware(thunk));

export default store;
