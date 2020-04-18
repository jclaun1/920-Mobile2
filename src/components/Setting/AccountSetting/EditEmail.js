import React, { Component } from 'react';
import {
    StyleSheet,
    Text,TextInput,Image,
    View, ImageBackground, Animated, TouchableOpacity,
    Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import styles from '../../../../assets/css/style';

import SlidingPanel from 'react-native-sliding-up-down-panels';

import FlyButton from '../../Common/FlyButton';
import AccountSettingHeader from './AccountSettingHeader';


export default class EditEmail extends Component {



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

                        <AccountSettingHeader onPressBack={() => this.props.navigation.navigate('AccountDetail')} 
                        title='Edit Email' />

                        <View style={{
                            width: '100%', borderBottomColor: '#764943',
                            borderBottomWidth: .5, marginBottom: 10,
                        }}>

                            <View style={{ width: '100%', flexDirection: 'row', }}>

                                <Image
                                    style={{
                                        height: 20, width: 25,  marginRight: 20,marginLeft: 20,
                                        resizeMode: 'contain', alignSelf: 'center', alignItems: 'center', marginTop: 5
                                    }}
                                    source={require("../../../../assets/images/ic_email.png")}
                                />

                                <TextInput
                                    style={[styles.inputBoxEdit, { marginTop: 5 }]}

                                    placeholder={"example@gmail.com"}
                                    placeholderTextColor="#EABFB9"
                                    underlineColorAndroid="rgba(0, 0, 0,0)"
                                    value={this.props.value}
                                    returnKeyType={'next'}
                                    ref={this.props.ref}

                                    onChangeText={this.props.onChangeText}
                                    secureTextEntry={this.props.secureTextEntry}

                                />

                            </View>

                        </View>
                    </View>
                </View>
            </ImageBackground>

        );
    }
}
