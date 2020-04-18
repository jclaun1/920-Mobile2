import React, { Component } from 'react';
import {
    StyleSheet,
    Text, TextInput, Image,
    View, ImageBackground, Animated, TouchableOpacity,
    Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import styles from '../../../../assets/css/style';

import SlidingPanel from 'react-native-sliding-up-down-panels';

import FlyButton from '../../Common/FlyButton';
import AccountSettingHeader from '../AccountSetting/AccountSettingHeader';


export default class Review extends Component {

    state = {
        value: ''
    };

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

                        <AccountSettingHeader
                            onPressBack={() => this.props.navigation.navigate('FeebackDetail')}
                            title='Review'
                            dontShow={true} />

                        <View>

                            <View style={{
                                width: '100%', marginBottom: 10, flexDirection: 'row', justifyContent: 'center'
                            }}>

                                <TextInput
                                    style={[{ width: '100%', height: 300, margin: 10, backgroundColor: '#fff', borderRadius: 15 }]}
                                    maxLength={2000}
                                    placeholder={""}
                                    placeholderTextColor="#EABFB9"
                                    value={this.props.value}
                                    ref={this.props.ref}
                                    multiline={true}
                                    onChangeText={(value) => this.setState({ value })}

                                    underlineColorAndroid='transparent'
                                    secureTextEntry={false}

                                />


                            </View>
                            <Text style={{ width: '100%',  justifyContent:'flex-end',  fontFamily: 'OpenSans-SemiBold',
                                color: '#EABFB9',
                             
                                marginRight: 10,
                                width:'100%',
                                textAlign: 'right',
                                fontSize: 12, }}>
                                Characters Left: {2000 - this.state.value.length}
                                </Text>
                            <View style={{ width: '100%', marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <FlyButton style={{ width: 300 }} title='Submit' onPress={() => { this.setState({ step: 1 }) }} />

                            </View>
                        </View>

                    </View>
                </View>
            </ImageBackground>

        );
    }
}
