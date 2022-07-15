import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import reducers from '../reducers';

const store = createStore(reducers);

export default store;
