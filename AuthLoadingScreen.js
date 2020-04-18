import React from 'react'
import styles from './assets/css/style'
import { StyleSheet, ImageBackground, View, StatusBar, Image, Dimensions, Animated, TouchableWithoutFeedback, Text } from 'react-native'
import { SimpleAnimation } from 'react-native-simple-animations';

import { connect } from 'react-redux'
const { width, height } = Dimensions.get('window');

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);

    this._bootstrapAsync(props);
    this.moveAnimation = new Animated.ValueXY({ x: width / 2, y: height })

  }

  componnetWillMount() {
    this._movelogo();
  }

  _movelogo() {
    Animated.spring(this.moveAnimation, {
      toValue: { x: width / 3, y: height / 3 },
    }).start()
  }


  ActivityIndicatorLoadingView() {
    return (

      <ActivityIndicator
        color='#201B1B'
        size='large'
        style={stylesLoading.ActivityIndicatorStyle}
      />
    )
  }

  _bootstrapAsync = async () => {

    setTimeout(() => {
      this.props.navigation.navigate('UnAuthenticated')
    }, 2500)

  }



  render() {
    return (
      <View source={require('./assets/images/Splash.png')}
        style={[{
          resizeMode: 'stretch', flexDirection: "column", justifyContent: 'space-around',
          height: "100%", backgroundColor: '#201B1B'
        }]}>
        <StatusBar
          backgroundColor="#201B1B"
          barStyle="light-content"
        />

        <SimpleAnimation delay={0} duration={4000} fade staticType='zoom'>
          <Image source={require('./assets/images/logo.png')}
            style={{ width: '100%', Height: 350, resizeMode: 'contain' }} />
        </SimpleAnimation>
      </View>
    )
  }

}


const stylesLoading = StyleSheet.create({
  ActivityIndicatorStyle: {
    // position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default connect(null, null)(AuthLoadingScreen)