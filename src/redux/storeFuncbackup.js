import UserMiddleware from './UserMiddleware';
import {createStore, applyMiddleware} from 'redux';
import AppReducer from './reducers';
import thunk from 'redux-thunk';

const createStoreapplyMiddleware = applyMiddleware(thunk, UserMiddleware)(
  createStore,
);

const store = createStoreapplyMiddleware(AppReducer);

export default store;
