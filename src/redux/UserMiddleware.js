import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  USER_IS_SET,
  NOTIFICATION_PUSH,
  NOTIFICATION_INC_DEC,
  INBOX_PUSH,
  INBOX_INC_DEC,
  USERS_ONLINE,
} from './actions/types';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js/react-native';
import {PUSHER_APP_KEY, PUSHER_APP_CLUSTER, SOCKET_SERVER} from '../config/env';
import moment from 'moment';
import axios from 'axios';
import {NavigationActions} from 'react-navigation';

export const _pushTo = (store, type, data) => {
  let dispatch = store.dispatch;

  
};

export const registerDevice = async token => {
  
};

export const checkPermission = async () => {

  
};

//3
export const getToken = async () => {
 
};

//2
export const requestPermission = async () => {
  
};

export const createNotificationListeners = async store => {
 
 
};

showAlert = (title, body) => {
  Alert.alert(
    title,
    body,
    [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    {cancelable: false},
  );
};

export const _userIsOnline = async store => {

};

export const _notificationsend = (userId, store) => {
 
};

const _upDateAction = async (id, store) => {
 
};

const UserMiddleware = store => next => action => {
  if (action.type === USER_IS_SET) {
    checkPermission(store);
    createNotificationListeners(store);
    var user = store.getState().auth.user;
    _upDateAction(user.id, store);
  }
  next(action);
};

export default UserMiddleware;
