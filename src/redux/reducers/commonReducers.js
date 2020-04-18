import { USERS_ONLINE, HOME_DATA_REQUESTING, HOME_DATA, HOME_DATA_FAILD} from "../actions/types"

const initalState = {
  users: [],
  homeDatas: [[], []],
  isLoading: true
}

const commonReducers = (state = initalState, action) => {
  switch (action.type) {
    case USERS_ONLINE:
      return { ...state, users: action.payload}
    case HOME_DATA_REQUESTING:
      return { ...state, isLoading: true}
    case HOME_DATA:
      return { ...state, isLoading: false,  homeDatas: action.payload}
    case HOME_DATA_FAILD:
      return { ...state, isLoading: false}
    default:
      return state
  }
}

export default commonReducers