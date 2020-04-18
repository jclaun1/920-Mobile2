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


export default class RequestFeature extends Component {

    constructor() {
        super();


    }

    state = {

        value: ''
    }


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
                            title='Requests'
                            dontShow={true} />


                        <View>
                            <View style={{
                                width: '100%', borderBottomColor: '#764943',
                                borderBottomWidth: .5, marginBottom: 10, flexDirection: 'row', justifyContent: 'center'
                            }}>


                                <View style={{ width: "100%", flexDirection: 'row' }}>


                                    <TextInput
                                        style={[styles.inputBoxEdit, { marginTop: 5,  }]}

                                        placeholder={"Have an idea for a feature you want to see? Let us know!"}
                                        placeholderTextColor="#EABFB9"
                                        underlineColorAndroid="rgba(0, 0, 0,0)"
                                        value={this.props.value}
                                        returnKeyType={'next'}
                                        ref={this.props.ref}
                                        maxLength={2000}
                                        onChangeText={(value) => this.setState({ value })}

                                        secureTextEntry={false}

                                    />

                                </View>
                              
                            </View>
                            <Text style={{
                                    width: '100%', justifyContent: 'flex-end', fontFamily: 'OpenSans-SemiBold',
                                    color: '#EABFB9',

                                    marginRight: 10,
                                    width: '100%',
                                    textAlign: 'right',
                                    fontSize: 12,
                                }}>
                                    Characters Left: {2000 - this.state.value.length}
                                </Text>




                            <View style={{ width: '100%', marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
                                <FlyButton style={{ width: 300 }} title='Submit'
                                    onPress={() => this.props.navigation.navigate('FeebackDetail')} />

                            </View>
                        </View>


                    </View>
                </View>
            </ImageBackground>

        );
    }
}
