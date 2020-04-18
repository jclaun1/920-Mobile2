import React from 'react';
import { Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { Provider } from 'react-redux';
import { onUserRequest, onCurrencyRequest } from './src/redux/actions/authAction';
import pushUrlAction from './src/routes/pushUrlAction';
import { apiDomain } from './src/config/env';
import axios from 'axios';
import { USER_FAILURE } from './src/redux/actions/types';
import SplashScreen from 'react-native-splash-screen';
import { store, AppWithNavigationState } from './src/redux/storeFunc';

export default class App extends React.Component {
  constructor(props) {
    super(props);

  }


  async componentDidMount() {

    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>


          <AppWithNavigationState />

      </Provider>
    );
  }
}
