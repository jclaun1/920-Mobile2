import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
  KeyboardAvoidingView,
  ScrollView,StatusBar,
  BackHandler, Dimensions, ImageBackground
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../../../assets/css/style';
import { onLoginRequest, onUserRequest } from '../../redux/actions/authAction';
import { connect } from 'react-redux';
import {
  OAUTH_CLIENT_ID,
  OAUTH_CLIENT_SECRECT,
  LOGIN_URL,
} from '../../config/env';
import axios from 'axios';
import ForgetPassword from './ForgetPassword';
import ResetPassword from './ResetPassword';
import ConfirmCode from './ConfirmCode';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FlyButton from '../Common/FlyButton';
import InputFields from '../Common/InputFields';
import { TextInputLayout } from 'rn-textinputlayout';
import CheckBox from 'react-native-check-box'

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
class Login extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      username:
        process.env.NODE_ENV === 'production'
          ? ''
          : 'hamidjaved1995@gmail.com',
      password: process.env.NODE_ENV === 'production' ? '' : 'mmmmmmmm',
      isLoading: false,
      isForgetPass: false,
      isSentEmail: false,
      isShowResetPassword: false,
      isShowEnterCode: false,
      storageData: null,
      isOrderSubmitting: false,
    };

    this._componentWillLoad();
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#660165',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };



  async onSubmitForm() {
    // if (!this.state.username) {
    //   this.username.focus();
    //   return;
    // }

    // if (!this.state.password) {
    //   this.password.focus();
    //   return;
    // }

    // this.setState({
    //   isLoading: true,
    // });
    this.props.navigation.navigate('ChooseLocation')


  }

  async onForgotPassword() {

    this.props.navigation.navigate('ForgetPassword')


  }

  componentWillUnmount() {
    this.setState({ isLoading: false, isOrderSubmitting: false });
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack(null);
      return true;
    });
  }

  async _componentWillLoad() {
    let storageData = await AsyncStorage.getItem('submitdata');

    this.setState({ storageData });
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack(null);
      return true;
    });
  }

  render() {

    return (
      <KeyboardAvoidingView behavior="" enabled style={styles.containerbox}>
        <ImageBackground source={require('../../../assets/images/screen_bg.png')}
          style={[{
            resizeMode: 'stretch', flexDirection: "column", justifyContent: 'space-around',
            height: "100%"
          }]}>

          <StatusBar
            backgroundColor="#201B1B"
            barStyle="light-content"
          />

          {/* <ForgetPassword
            visible={this.state.isForgetPass}
            onClose={() => this.setState({ isForgetPass: false, isShowEnterCode: false, isSentEmail: false })}
            onSentEmail={() => this.setState({ isForgetPass: false, isShowEnterCode: true, isSentEmail: false })}
          /> */}

          {/* <ConfirmCode
            visible={this.state.isShowEnterCode}
            onClose={() => this.setState({ isForgetPass: true, isShowEnterCode: false, isShowResetPassword: false, isSentEmail: false })}
            onSentEmail={() => this.setState({ isForgetPass: false, isShowEnterCode: false, isShowResetPassword: true, isSentEmail: false })}
          /> */}

          {/* <ResetPassword
            visible={this.state.isShowResetPassword}

            onClose={() => this.setState({ isForgetPass: false, isShowEnterCode: true, isShowResetPassword: false, isSentEmail: false })}
            onSentEmail={() => this.setState({ isForgetPass: false, isShowEnterCode: false, isShowResetPassword: false, isSentEmail: true })}
          />
 */}

          <View style={[styles.containerbox, {
            justifyContent: 'center',
            width: '100%',
          }]}>
            <ScrollView contentContainerStyle={{
              flexGrow: 1, justifyContent: 'center',
              width: '100%',
            }} style={{ flex: 1, }}>
              <View style={[styles.SignUpwraper, { justifyContent: 'center', alignItems: 'center', }]}>


                <View style={[styles.shadow,{ justifyContent: 'center', paddingLeft: 10, paddingRight: 10, paddingBottom: 30, alignItems: 'center', backgroundColor: '#201B1B', borderRadius: 10, }]}>

                  <Text
                    style={styles.topheader}
                  >
                    {' '}
                    Welcome Back! {' '}
                  </Text>

                  <Text
                    style={styles.topSubHeader}
                  >
                    {' '}
                    Let's find you a spot. {' '}
                  </Text>

                  <View style={[styles.fromgprow]}>

                    <InputFields
                      placeholder="Email "
                      value={this.state.username}
                      returnKeyType={'next'}
                      ref={input => {
                        this.username = input;
                      }}
                      onChangeText={username => this.setState({ username })}
                    />

                  </View>
                  <View style={styles.fromgprow}>

                    <InputFields
                      placeholder="Password"
                      value={this.state.password}
                      returnKeyType={'done'}
                      ref={input => {
                        this.password = input;
                      }}
                      onChangeText={password => this.setState({ password })}
                      secureTextEntry={true}
                    />

                  </View>
                  <View style={{ marginBottom: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <CheckBox
                      style={{ flex: 1, padding: 10, color: '#EABFB9', }}
                      onClick={() => {
                        this.setState({
                          isChecked: !this.state.isChecked
                        })
                      }}
                      rightTextStyle={{ color: '#EABFB9' }}
                      isChecked={this.state.isChecked}
                      checkBoxColor='#fff'
                      uncheckedCheckBoxColor='#fff'
                      rightText={"Remember me"}
                    />

                    <TouchableOpacity
                      onPress={() => this.onForgotPassword()}>
                      <Text
                        style={{
                          fontFamily: 'OpenSans-Regular',
                          marginTop: 14,
                          color: '#EABFB9',
                          textAlign: 'right',
                          marginRight: 10,
                          textDecorationLine: 'underline',
                        }}>
                        Forgot Password
                        </Text>
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{
                      width: Dimensions.get('window').width - 70,
                      alignSelf: 'stretch',
                      marginTop: 10
                    }}>

                    <FlyButton style={{ width: '100%' }} onPress={e => {
                      this.onSubmitForm(e)
                    }} title="Login" />


                  </View>
                  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text
                      style={{
                        fontFamily: 'OpenSans-Regular',
                        marginTop: 20,
                        color: '#EABFB9',
                      }}>
                      Don't have a account?{" "}
                      <Text
                        style={{
                          fontFamily: 'OpenSans-Bold',
                          color: '#EABFB9',
                          textDecorationLine: 'underline',
                        }}
                        onPress={() => this.props.navigation.navigate('SignUp')}>

                        Sign Up
                        </Text>
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );

  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
  };
};

export default connect(
  mapStateToProps,
  { onLoginRequest, onUserRequest },
)(Login);
