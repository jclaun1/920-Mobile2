import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  BackHandler, Dimensions, ImageBackground
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../../../assets/css/style';
import { connect } from 'react-redux';

import axios from 'axios';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LocationItem from './LocationItem';


class ChooseLocation extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
     isLoading: false,
     
    };

    this._componentWillLoad();
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#660165',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };



 

  componentWillUnmount() {
    this.setState({ isLoading: false, isOrderSubmitting: false });
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack(null);
      return true;
    });
  }

  async _componentWillLoad() {
    
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
            <View style={[styles.containerbox, {
              justifyContent: 'center',
              width: '100%',
            }]}>
              <ScrollView contentContainerStyle={{
                flexGrow: 1, justifyContent: 'center',
                width: '100%',
              }} style={{ flex: 1, }}>
                <View style={[styles.SignUpwraper, { justifyContent: 'center', alignItems: 'center', }]}>


                  <View style={[{ justifyContent: 'center', paddingLeft: 10, paddingRight: 10, paddingBottom: 30, alignItems: 'center', backgroundColor: '#201B1B',  borderRadius: 10, elevation: 5 }]}>

                    <Text
                      style={styles.topheader}
                    >
                      {' '}
                      Choose Location {' '}
                    </Text>

                    <Text
                      style={styles.topSubHeader}
                    >
                      {' '}
                      There's more to come! {' '}
                    </Text>
                    
                    <LocationItem 
                    style={{ width: Dimensions.get('window').width - 60,marginTop:20,}}
                    title='UMBC'
                    onPress={()=>{    this.props.navigation.navigate('ChoosePermit')                  }}
                    />
                   
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
  {  },
)(ChooseLocation);
