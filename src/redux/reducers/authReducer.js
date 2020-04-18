import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, USER_REQUEST, USER_SUCCESS, USER_IS_SET,
  USER_FAILURE, USER_CURRENCY, NOTIFICATIONS, NOTIFICATION_PUSH, NOTIFICATION_READ, NOTIFICATION_INC_DEC,
  NOTIFICATION_COUNT, INBOXES, INBOX_PUSH, INBOX_READ, INBOX_COUNT, INBOX_INC_DEC, USER_LOGOUT, 
  ACCOUNT, ALL_TRIPS, PAST_TRIPS, UPCOMMING_TRIPS, RECEIVED_ORDERS, INACTIVE_ORDERS, TRANSIT_ORDERS, 
  REQUEST_ORDERS, ALL_ORDERS, DELIVERY_ALL_ORDERS, REQUESTED_ORDERS, TO_DELIVERY_ORDERS, DELIVERED_ORDERS
 } from "../actions/types"
import moment from 'moment'

const initalState = {
  id:-1,
  access_token:'',
  refresh_token:'',
  expires:null,
  isFetching:false,
  isAuth:false,
  error:false,
  errorMessage: '',
  user: {},
  inboxes: [],
  inbox_count: 0,
  notifications: [],
  notification_count: 0,
  currency: null,
  account: {},

  myTrips: [],
  pastTrips: [],
  upCommingTrips: [],

  allOrders: [],
  receivedOrders: [],
  inactiveOrders: [],
  transitOrders: [],
  requestOrders: []
}

const authReducer = (state = initalState, action) => {
    switch (action.type) {

      case USER_REQUEST:
        return { ...state, isFetching: true, isAuth: false }
      case USER_SUCCESS:
        return { ...state, isFetching: false, isAuth: true, user: action.payload}
      case USER_IS_SET:
        return { ...state, isFetching: false, isAuth: true}
      case USER_FAILURE:
        return { ...state, isFetching: false, isAuth: false, error: true}
      case USER_LOGOUT:
        return { ...state, isFetching: false, isAuth: false, user: {}, inboxes:[], inbox_count: 0, notifications: [], notification_count: 0 };

      case LOGIN_REQUEST:
        return { ...state, isFetching: true }
      case LOGIN_FAILURE:
        return { ...state, isFetching: false, error: true,  errorMessage: action.payload }
      case LOGIN_SUCCESS:
        return {
          ...state,
          isFetching: false,
          access_token: action.payload.access_token,
          refresh_token: action.payload.refresh_token,
          expires:action.payload.expires,
          error: false
        }
      case NOTIFICATIONS:
        return { ...state,  notifications: action.payload };
      case NOTIFICATION_PUSH:
        var notifications = state.notifications
        notifications.unshift(action.payload)
        return { ...state,  notifications: notifications };
      case NOTIFICATION_READ:
        var notifications = state.notifications
        notifications[action.payload]['read_at'] = moment()
        return { ...state,  notifications: notifications };
      case NOTIFICATION_COUNT:
        return { ...state, notification_count: action.payload };
      case NOTIFICATION_INC_DEC:
        var notificationCount = state.notification_count
        notificationCount = action.payload ? notificationCount + 1 : notificationCount - 1
        return { ...state, notification_count: notificationCount};


      case INBOXES:
        return { ...state, inboxes: action.payload };
      case INBOX_PUSH:
        var inboxes = state.inboxes
        inboxes.unshift(action.payload)
        return { ...state,  inboxes: inboxes };
      case INBOX_READ:
        var inboxes = state.inboxes
        inboxes[action.payload]['read_at'] = moment()
        return { ...state,  inboxes: inboxes };
      case INBOX_COUNT:
        return { ...state, inbox_count: action.payload };
      case INBOX_INC_DEC:
        var inboxCount = state.inbox_count
        inboxCount = action.payload ? inboxCount + 1 : inboxCount - 1
        return { ...state, inbox_count: inboxCount};


      case USER_CURRENCY:
        return { ...state, isFetching: false,  currency: action.payload };
      case ACCOUNT:
        return { ...state, account: action.payload };

      
      case ALL_TRIPS:
        return { ...state,  myTrips: action.payload };
      case PAST_TRIPS:
        return { ...state, pastTrips: action.payload };
      case UPCOMMING_TRIPS:
        return { ...state, upCommingTrips: action.payload };

      
      case RECEIVED_ORDERS:
        return { ...state, receivedOrders: action.payload };
      case INACTIVE_ORDERS:
        return { ...state, inactiveOrders: action.payload };
      case TRANSIT_ORDERS:
        return { ...state, transitOrders: action.payload };
      case REQUEST_ORDERS:
        return { ...state, requestOrders: action.payload };
      case ALL_ORDERS:
        return { ...state, allOrders: action.payload };

      default:
        return state
    }
}

export default authReducer