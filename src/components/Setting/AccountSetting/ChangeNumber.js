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
import AccountSettingHeader from './AccountSettingHeader';


export default class ChangeNumber extends Component {

    constructor() {
        super();


    }

    state = {
        step: 0,
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
                            onPressBack={() => this.props.navigation.navigate('AccountDetail')}
                            title='Phone Number'
                            dontShow={true} />
                        {
                            (this.state.step == 0) ?
                                <View>

                                    <View style={{
                                        width: '100%', borderBottomColor: '#764943',
                                        borderBottomWidth: .5, marginBottom: 10, flexDirection: 'row', justifyContent: 'center'
                                    }}>

                                        <TextInput
                                            style={[styles.inputBoxEdit, { marginTop: 5, width: 60, color: '#1662C5' }]}

                                            placeholder={"+1"}
                                            placeholderTextColor="#1662C5"
                                            underlineColorAndroid="rgba(0, 0, 0,0)"
                                            value={this.props.value}
                                            returnKeyType={'next'}
                                            ref={this.props.ref}

                                            onChangeText={this.props.onChangeText}
                                            secureTextEntry={false}

                                        />
                                        <View style={{ width: 2, height: 25, backgroundColor: '#ffffff', marginTop: 15, verticalAlign: 'central' }} />

                                        <View style={{ width: 250, flexDirection: 'row' }}>


                                            <TextInput
                                                style={[styles.inputBoxEdit, { marginTop: 5, marginLeft: 30 }]}

                                                placeholder={"410-444-4444"}
                                                placeholderTextColor="#EABFB9"
                                                underlineColorAndroid="rgba(0, 0, 0,0)"
                                                value={this.props.value}
                                                returnKeyType={'next'}
                                                ref={this.props.ref}

                                                onChangeText={this.props.onChangeText}
                                                secureTextEntry={false}

                                            />

                                        </View>

                                    </View>
                                    <View style={{ width: '100%', marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
                                        <FlyButton style={{ width: 300 }} title='Next' onPress={()=> {this.setState({step:1})}}/>
                                        <Text style={{
                                            fontFamily: 'OpenSans-Regular',
                                            marginTop: 10,
                                            color: '#EABFB9',
                                            textAlign: 'center'
                                        }}> You will receive a confirmation code from 920</Text>
                                    </View>
                                </View>
                                :
                                <View>
                                    <View style={{
                                        width: '100%', borderBottomColor: '#764943',
                                        borderBottomWidth: .5, marginBottom: 10, flexDirection: 'row', justifyContent: 'center'
                                    }}>

                               
                                        <View style={{ width: "100%", flexDirection: 'row' }}>


                                            <TextInput
                                                style={[styles.inputBoxEdit, { marginTop: 5, textAlign:'center' }]}

                                                placeholder={"Enter Code"}
                                                placeholderTextColor="#EABFB9"
                                                underlineColorAndroid="rgba(0, 0, 0,0)"
                                                value={this.props.value}
                                                returnKeyType={'next'}
                                                ref={this.props.ref}

                                                onChangeText={this.props.onChangeText}
                                                secureTextEntry={false}

                                            />

                                        </View>

                                    </View>
                                    <View style={{ width: '100%', marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
                                        <FlyButton style={{ width: 300 }} title='Confirm'
                                        onPress={()=> this.props.navigation.navigate('AccountDetail')} />
                                      
                                    </View>
                                </View>
                        }
                     
                    </View>
                </View>
            </ImageBackground>

        );
    }
}
