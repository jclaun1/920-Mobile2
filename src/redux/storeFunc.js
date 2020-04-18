import UserMiddleware from './UserMiddleware';
import auth from './reducers/authReducer';
import commonReducers from './reducers/commonReducers';
import thunk from 'redux-thunk';
import {Router} from '../routes';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import {connect} from 'react-redux';

const navReducer = createNavigationReducer(Router);
const AppReducers = combineReducers({
  nav: navReducer,
  auth,
  commonReducers,
});
const middleware = createReactNavigationReduxMiddleware(
  // "root",
  state => state.nav,
);

// const App = createReduxContainer(Router);
const App = createReduxContainer(Router);
const mapStateToProps = state => ({
  state: state.nav,
});

export const AppWithNavigationState = connect(mapStateToProps)(App);

export const store = createStore(
  AppReducers,
  applyMiddleware(thunk, UserMiddleware, middleware),
);
