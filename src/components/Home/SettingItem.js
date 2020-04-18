import React, { Component } from 'react';

import {
    View,
    TouchableOpacity,
    Text, TextInput, Image
} from 'react-native';
import { connect } from 'react-redux'
import { TextInputLayout } from 'rn-textinputlayout';
import styles from '../../../assets/css/style';


class SettingItem extends Component {


    render() {

        return (
            <TouchableOpacity style={[{
                width: "100%",
                height: 55,
                justifyContent: 'center', borderBottomColor: '#764943',
                borderBottomWidth: 1, marginBottom: 10,

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
                            source={this.props.imagesource}
                        />
                        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                            <Text
                                style={{
                                    fontFamily: 'Lato-Light',
                                    color: '#EABFB9',
                                    marginLeft: 10,
                                    textAlign: 'left',
                                    fontSize: 22,
                                    flex: 1,
                                }}>
                                {this.props.title}
                            </Text>
                            <Text
                                style={{
                                    fontFamily: 'Lato-Light',
                                    color: '#EABFB9',
                                    marginTop: 10,
                                    marginRight: 10,
                                    textAlign: 'center',
                                    fontSize: 11,
                                }}>
                                {this.props.subtitle}
                            </Text>
                            {
                                this.props.showPermit ?
                                    <Text
                                        style={{
                                            fontFamily: 'OpenSans-SemiBold',
                                            color: '#fff',
                                            backgroundColor: "red",
                                            width: 16, height: 16, borderRadius: 10,
                                            textAlign: 'center', right: 12,marginLeft:10,
                                            fontSize: 12,  marginTop:10
                                        }}>
                                        A
                                    </Text>
                                    : null
                            }
                        </View>




                    </View>

                </View>
            </TouchableOpacity>);

    }
}


export default SettingItem;