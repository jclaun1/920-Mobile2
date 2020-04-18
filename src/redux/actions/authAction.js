import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USER_REQUEST,
  USER_SUCCESS,
  USER_IS_SET,
  USER_FAILURE,
  HOME_DATA_REQUESTING,
  HOME_DATA,
  HOME_DATA_FAILD,
  USER_CURRENCY,
} from './types';
import {
  OAUTH_CLIENT_ID,
  OAUTH_CLIENT_SECRECT,
  LOGIN_URL,
  apiDomain,
} from '../../config/env';

import {
  notifications,
  notificationCount,
  inboxes,
  inboxCount,
} from './notificationInboxAction';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
export const doLoginRequest = () => ({type: LOGIN_REQUEST});

export const doUserRequest = () => ({type: USER_REQUEST});

export const doCurrencySet = json => ({
  type: USER_CURRENCY,
  payload: json,
});

export const loginSuccess = json => ({
  type: LOGIN_SUCCESS,
  payload: json,
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const userSuccess = json => ({
  type: USER_SUCCESS,
  payload: json,
});

export const userSet = () => ({
  type: USER_IS_SET,
});

export const userFailure = error => ({
  type: USER_FAILURE,
  payload: error,
});

export const doHomeRequest = () => ({type: HOME_DATA_REQUESTING});

export const homeSuccess = json => ({
  type: HOME_DATA,
  payload: json,
});

export const onHomeRequestFaild = () => ({type: HOME_DATA_FAILD});

export const onLoginRequest = (email, password) => {
  return async dispatch => {
    dispatch(doLoginRequest);
    try {
      const data = {
        grant_type: 'password',
        client_id: OAUTH_CLIENT_ID,
        client_secret: OAUTH_CLIENT_SECRECT,
        username: email,
        password: password,
      };
      let response = await axios.post(LOGIN_URL, data);
      // let json     = await response.json()
      dispatch(loginSuccess(response.data));
      onUserRequest(response.data.access_token, dispatch);
      setStoring(
        response.data.access_token,
        response.data.expires_in + Date.now(),
      );
    } catch (error) {
      console.log(error);
      dispatch(loginFailure(error));
    }
  };
};

export const onUserRequest = accessToken => {
  return async dispatch => {
    dispatch(doUserRequest);
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      let response = await axios.get(apiDomain + 'api/user', config);

      if (typeof response.data.notifications == 'object') {
        const notiArray = Object.values(response.data.notifications);
        dispatch(notifications(notiArray));
      } else {
        dispatch(notifications(response.data.notifications));
      }

      if (typeof response.data.inbox == 'object') {
        const inboxArray = Object.values(response.data.inbox);
        dispatch(inboxes(inboxArray));
      } else {
        dispatch(inboxes(response.data.inbox));
      }

      dispatch(notificationCount(response.data.unread_notification_count));
      dispatch(inboxCount(response.data.inbox_count));

      await delete response.data['notifications'];
      await delete response.data['inbox'];
      await delete response.data['unread_notification_count'];
      await delete response.data['inbox_count'];
      await delete response.data['unread_notifications'];
      // console.log(response.data)
      dispatch(userSuccess(response.data));
      dispatch(userSet());
    } catch (error) {
      console.log(error);
      dispatch(userFailure(error));
      return;
    }
  };
};

export const onHomeRequest = () => {
  return async dispatch => {
    dispatch(doHomeRequest());
    try {
      let response = await axios.get(apiDomain + 'api/index/home');
      dispatch(homeSuccess(response.data));
      return;
    } catch (error) {
      // console.log(error.request.response)
      dispatch(onHomeRequestFaild());
      return;
    }
  };
};

export const onCurrencyRequest = () => {
  return async dispatch => {
    try {
      let response = await axios.get(apiDomain + 'api/user/location/currency');

      if (
        (response.data.status && response.data.country_code == 'IN') ||
        !response.data.status
      ) {
        dispatch(doCurrencySet('₹'));
        await AsyncStorage.setItem('currency', '1');
      } else {
        dispatch(doCurrencySet('$'));
        await AsyncStorage.setItem('currency', '2');
      }
      return;
    } catch (error) {
      // console.log(error)
      return;
    }
  };
};

export const setStoring = async (accessToken, expires_in) => {
  try {
    var token = await AsyncStorage.setItem('token', accessToken);
    var expiresin = await AsyncStorage.setItem('expiration', expires_in);
  } catch (error) {
    // console.log(error.message);
  }
};

export const getStoring = async () => {
  try {
    var token = await AsyncStorage.getItem('token');
    return token;
  } catch (error) {
    // console.log(error.message);
  }
};
