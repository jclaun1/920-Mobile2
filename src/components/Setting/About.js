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
import SettingItem from '../Home/SettingItem';
import SettingHeader from './SettingHeader';
import FlyButton from '../Common/FlyButton';


export default class About extends Component {



    render() {
        return (
            <ImageBackground source={require('../../../assets/images/screen_bg.png')}
                style={[{
                    resizeMode: 'stretch', flexDirection: "column", justifyContent: 'space-around',
                    height: "100%"
                }]}>
                <View style={[styles.headerLayoutStyle, { marginTop: 100, flex: 1 }]}>



                    <View style={{ width: width - 20, height: '100%', bottom: 0, position: 'absolute' }}>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10, }}>
                            <View style={{ width: 150, height: 5, borderRadius: 10, marginTop: 10, backgroundColor: '#272727', verticalAlign: 'central', marginTop: 5 }} />
                        </View>

                        <SettingHeader onPressBack={() => this.props.navigation.navigate('Setting')} imagesource={require('../../../assets/images/ic_about.png')} title='About' />


                        <SettingItem 
                        onPress={()=>this.props.navigation.navigate('NewVersion')}
                        imagesource={require('../../../assets/images/ic_build_version.png')} title='Build version ' subtitle='1.2201'  />
                        <SettingItem imagesource={require('../../../assets/images/ic_whats_new.png')} title="What's new?"  />
                        <SettingItem 
                        onPress={()=>this.props.navigation.navigate('TermsOfUse')}
                        imagesource={require('../../../assets/images/ic_terms_of_use.png')} title='Terms of use'  />

                       
                    </View>
                </View>
            </ImageBackground>

        );
    }
}
