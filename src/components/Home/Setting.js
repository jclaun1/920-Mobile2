import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, ImageBackground, Animated, TouchableOpacity,
  Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import styles from '../../../assets/css/style';

import SlidingPanel from 'react-native-sliding-up-down-panels';
import SettingItem from './SettingItem';


export default class Setting extends Component {



  render() {
    return (
      <ImageBackground source={require('../../../assets/images/screen_bg.png')}
        style={[{
          resizeMode: 'stretch', flexDirection: "column", justifyContent: 'space-around',
          height: "100%"
        }]}>
        <View style={[styles.headerLayoutStyle, { marginTop: 100, flex: 1 }]}>



          <View style={{ width: width - 20, height: '100%', bottom: 0, position: 'absolute' }}>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, }}>
              <View style={{ width: 150, height: 5, borderRadius: 10, marginTop: 10, backgroundColor: '#272727', verticalAlign: 'central', marginTop: 5 }} />
            </View>


            <Text
              style={[styles.topheader,{fontFamily:'Lato-Regular'}]}
            >
              {' '}
              Settings {' '}
            </Text>

            <SettingItem imagesource={require('../../../assets/images/ic_profile.png')} title='Account info'
              subtitle='Email, Password, Permit, Etc.'
              onPress={() => this.props.navigation.navigate('AccountDetail')} />

            {/* <SettingItem imagesource={require('../../../assets/images/ic_notification.png')}
              title='Notifications'
              onPress={() => this.props.navigation.navigate('Notifications')} /> */}

            <SettingItem imagesource={require('../../../assets/images/ic_feedback.png')}
              title='Feedback' subtitle='Reviews, Bug reports, Requests'
              onPress={() => this.props.navigation.navigate('FeebackDetail')} />

            <SettingItem imagesource={require('../../../assets/images/ic_settings.png')}
              title='Options'
              onPress={() => this.props.navigation.navigate('Options')} />

            <SettingItem imagesource={require('../../../assets/images/ic_about.png')} title='About'
              subtitle='Build version, Updates, Terms of use'
              onPress={() => this.props.navigation.navigate('About')} />


          </View>
        </View>
      </ImageBackground>

    );
  }
}
