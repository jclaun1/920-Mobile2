import React, { Component } from 'react';
import {
    StyleSheet,
    Text, Image,
    View, ImageBackground, Animated, TouchableOpacity,
    Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import styles from '../../../assets/css/style';
import ToggleSwitch from 'toggle-switch-react-native';

import SlidingPanel from 'react-native-sliding-up-down-panels';
import SettingItem from '../Home/SettingItem';
import SettingHeader from './SettingHeader';
import FlyButton from '../Common/FlyButton';


export default class Options extends Component {

    state = {
        isOn: false,
    }

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

                        <SettingHeader onPressBack={() => this.props.navigation.navigate('Setting')} imagesource={require('../../../assets/images/ic_settings.png')} title='Options' />

                        <TouchableOpacity style={[{
                            width: "100%",
                            height: 55,
                            justifyContent: 'center', marginBottom: 10,

                        }, this.props.style]}
                            onPress={this.props.onPress}>

                            <View style={{
                                width: '100%',
                            }}>

                                <View style={{ width: '100%', marginLeft: 10, flexDirection: 'row', justifyContent: 'flex-start' }}>

                                    <Image
                                        style={{
                                            height: 25, width: 25,
                                            resizeMode: 'contain', alignSelf: 'center', alignItems: 'center', marginTop: 5
                                        }}
                                        source={require('../../../assets/images/ic_notification.png')}
                                    />
                                    <View style={{
                                        flexDirection: 'row', flex: 1, justifyContent: 'space-between',
                                      width: '100%', paddingBottom: 10, marginLeft: 10, marginTop: 10
                                    }}>
                                        <Text
                                            style={{
                                                fontFamily: 'Lato-Light',
                                                color: '#EABFB9',
                                                marginLeft: 10,
                                                textAlign: 'left',
                                                fontSize: 22,
                                                flex: 3,
                                            }}>
                                            Allow Notifications
                            </Text>
                                        {
                                            (true) ? <View style={{ marginLeft: 10, left: 10, flex: 1, }}>
                                                <ToggleSwitch
                                                    isOn={this.state.isOn}
                                                    onColor="#23739D"
                                                    offColor="#474747"

                                                    labelStyle={{ color: "transparent", fontWeight: "900" }}
                                                    onToggle={isOn => {
                                                        console.log("changed to : ", isOn)
                                                        this.setState({ isOn })
                                                    }}
                                                />
                                            </View> :
                                                <View style={{ marginLeft: 10, left: 10, flex: 1, }}>

                                                </View>
                                        }

                                    </View>




                                </View>

                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </ImageBackground>

        );
    }
}
