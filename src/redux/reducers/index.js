import { combineReducers } from 'redux'
import auth from './authReducer'
import commonReducers from './commonReducers'

const AppReducer = combineReducers({
  auth,
  commonReducers
})

export default AppReducer
