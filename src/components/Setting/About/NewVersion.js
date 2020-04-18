import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View, ImageBackground, Animated, TouchableOpacity,
    Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import styles from '../../../../assets/css/style';

import SlidingPanel from 'react-native-sliding-up-down-panels';
import SettingItem from '../../Home/SettingItem';
import SettingHeader from '../SettingHeader';
import FlyButton from '../../Common/FlyButton';


export default class NewVersion extends Component {



    render() {
        return (
            <ImageBackground source={require('../../../../assets/images/screen_bg.png')}
                style={[{
                    resizeMode: 'stretch', flexDirection: "column", justifyContent: 'space-around',
                    height: "100%"
                }]}>
                <View style={[styles.headerLayoutStyle, { marginTop: 100, flex: 1 }]}>



                    <View style={{ width: width - 20, height: '100%', bottom: 0, position: 'absolute' }}>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10, }}>
                            <View style={{ width: 150, height: 5, borderRadius: 10, marginTop: 10, backgroundColor: '#272727', verticalAlign: 'central', marginTop: 5 }} />
                        </View>

                        <SettingHeader onPressBack={() => this.props.navigation.navigate('About')} title='Updates' />

                        <Text style={{
                            marginBottom: 10, marginTop: 20, padding: 2,
                            borderRadius: 15, color: '#EABFB9',
                            fontSize: 14
                        }}>
                            Update 1.0 changelog
                      </Text>


                        <Text style={{
                            marginTop: 10, padding: 2,
                            borderRadius: 15, color: '#EABFB9',
                            fontSize: 10
                        }}>
                            +Added new free roam UI
                      </Text>

                        <Text style={{
                            marginBottom: 10, padding: 2,
                            borderRadius: 15, color: '#EABFB9',
                            fontSize: 10
                        }}>
                            +Fixed bug affecting destination arrival time
                      </Text>

                    </View>
                </View>
            </ImageBackground>

        );
    }
}
