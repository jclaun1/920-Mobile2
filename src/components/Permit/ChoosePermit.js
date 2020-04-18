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
import PermitItem from './PermitItem';


class ChoosePermit extends React.Component {


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


  onClickEvent(type) {

  }


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


                <View style={[{ justifyContent: 'center', paddingLeft: 10, paddingRight: 10, paddingBottom: 30, alignItems: 'center', backgroundColor: '#201B1B', borderRadius: 10, elevation: 5 }]}>

                  <Text
                    style={styles.topheader}
                  >
                    {' '}
                    Choose Permit {' '}
                  </Text>

                  <Text
                    style={styles.topSubHeader}
                  >
                    {' '}
                    We'll only show you spots in these zones. {' '}
                  </Text>

                  <PermitItem
                    style={{ width: Dimensions.get('window').width - 60, marginTop: 20, }}
                    title='Commuter'
                    onPress={() => this.props.navigation.navigate('MainScreen')}
                    source={require("../../../assets/images/ic_umbc.png")}
                    type='A'
                    color='#AB0D0D'
                  />

                  <PermitItem
                    style={{ width: Dimensions.get('window').width - 60, marginTop: 20, }}
                    title='Residential'
                    onPress={() => this.props.navigation.navigate('MainScreen')}
                    type='C'
                    color='#CFC536'
                  />

                  <PermitItem
                    style={{ width: Dimensions.get('window').width - 60, marginTop: 20, }}
                    title='Faculty'
                    onPress={() => this.props.navigation.navigate('MainScreen')}
                    type='D'
                    color='#720DAB'
                  />

                  <PermitItem
                    style={{ width: Dimensions.get('window').width - 60, marginTop: 20, }}
                    title='Walker Resident'
                    onPress={() => this.props.navigation.navigate('MainScreen')}
                    type='B'
                    color='#216E1F'
                  />

                  <PermitItem
                    style={{ width: Dimensions.get('window').width - 60, marginTop: 20, }}
                    title='Visitor'
                    onPress={() => this.props.navigation.navigate('MainScreen')}
                    type='P'
                    color='#228BB2'
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
  };
};

export default connect(
  mapStateToProps,
  {},
)(ChoosePermit);
