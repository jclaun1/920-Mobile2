import React from 'react';
import {
  BackHandler,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  KeyboardAvoidingView, Dimensions,
  ScrollView,
  Linking, Image, ImageBackground
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../../../assets/css/style';
import { onLoginRequest, onUserRequest } from '../../redux/actions/authAction';
import { connect } from 'react-redux';
import axios from 'axios';
import { apiDomain } from '../../config/env';
import { TextInputLayout } from 'rn-textinputlayout';
import FlyButton from '../Common/FlyButton';
import CheckBox from 'react-native-check-box';
import InputFields from '../Common/InputFields';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      erromsg: '',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
      first_name: '',
      last_name: '',
      iserror: true,
      isAccepted: false,
      storageData: null,
      isLoading: false,
      privacyurl: apiDomain + 'privacy',
    };

    this._componentWillLoad();
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'transparent',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

 

  isValid(data) {
    var isValidData = true;
    for (let i = 0; i < Object.keys(data).length; i++) {
      if (!data[Object.keys(data)[i]]) {
        this[Object.keys(data)[i]].focus();
        isValidData = false;
        break;
      }
    }
    return isValidData;
  }

  async _onSubmitForm() {
    let checkdata = {
      email: this.state.email,
      confirmEmail: this.state.confirmEmail,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
    };

    if (!this.isValid(checkdata)) {
      return false;
    }



    this.setState({
      isLoading: true,
    });

    
  }

  async _componentWillLoad() {
  
  }
  componentWillUnmount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.navigate('Login');
      return true;
    });
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.navigate('Login');
      return true;
    });
  }

  handleClick = () => {
   
  };

  render() {
 
      return (
        <KeyboardAvoidingView behavior="" enabled style={styles.containerbox}>
          <ImageBackground source={require('../../../assets/images/screen_bg.png')}
            style={[{
              resizeMode: 'stretch', flexDirection: "column", justifyContent: 'space-around',
              height: "100%"
            }]}>
            <View style={[styles.containerbox, {
              justifyContent: 'center',
              width: '100%',
            }]}>
              <ScrollView contentContainerStyle={{
                flexGrow: 1, justifyContent: 'center',
                width: '100%',
              }} style={{ flex: 1, }}>
                <View style={[styles.SignUpwraper, { justifyContent: 'center', alignItems: 'center', }]}>


                  <View style={[styles.shadow,{ justifyContent: 'center', paddingLeft: 10, paddingRight: 10, paddingBottom: 30, alignItems: 'center', backgroundColor: '#201B1B', borderRadius: 10, elevation: 5 }]}>

                    <Text
                      style={styles.topheader}
                    >
                      
                      Create Your Account
                    </Text>

                    <Text
                      style={styles.topSubHeader}
                    >
                     
                      Let us take care of finding parking for you.  
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

                    <View style={[styles.fromgprow]}>

                      <InputFields
                        placeholder="Confirm Email "
                        value={this.state.confirmEmail}
                        returnKeyType={'next'}
                        ref={input => {
                        }}
                        onChangeText={confirmEmail => this.setState({ confirmEmail })}
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
                    <View style={styles.fromgprow}>

                      <InputFields
                        placeholder="Confirm Password"
                        value={this.state.confirmPassword}
                        returnKeyType={'done'}
                        ref={input => {
                        }}
                        onChangeText={confirmPassword => this.setState({ confirmPassword })}
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
                        rightText={"Login automatically"}
                      />


                    </View>

                    <View
                      style={{
                        width: Dimensions.get('window').width - 70,
                        alignSelf: 'stretch',
                        marginTop: 10
                      }}>

                      <FlyButton style={{ width: '100%' }} onPress={e => {
                        
                      }} title="Sign up" />


                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                      <Text
                        style={{
                          fontFamily: 'OpenSans-Regular',
                          marginTop: 20,
                          color: '#EABFB9',
                          textAlign: 'center'
                        }}>
                        By signing up you agree to terms & conditions stated by
920 Smart Solutions.

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
)(SignUp);
