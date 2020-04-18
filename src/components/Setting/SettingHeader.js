import React, { Component } from 'react';

import {
    View,
    TouchableOpacity,
    Text, TextInput, Image
} from 'react-native';
import { connect } from 'react-redux'
import { TextInputLayout } from 'rn-textinputlayout';
import styles from '../../../assets/css/style';


class SettingHeader extends Component {


    render() {

        return (
            // <TouchableOpacity style={[{
            //     width: "100%",
            //     height: 55,
            //     justifyContent: 'center', borderBottomColor: '#764943',
            //     borderBottomWidth: 1, marginBottom: 10,

            // }, this.props.style]}
            //     onPress={onPress}>

                <View style={{
                    width: '100%',height: 45,
                    borderBottomColor: '#764943',
                    borderBottomWidth: 1, marginBottom: 10,
                }}>

                    <View style={{ width: '100%', marginLeft: 10, flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <View style={{ flexDirection: 'row',  justifyContent: 'space-between',position:'absolute' }}>

                            <TouchableOpacity onPress={this.props.onPressBack}>

                                <Image
                                    style={{
                                        height: 30, width: 25,
                                        resizeMode: 'contain', alignSelf: 'center', alignItems: 'center', marginTop: 5
                                    }}
                                    source={require('../../../assets/images/ic_back.png')}
                                />
                            </TouchableOpacity>
                           
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1,width:'90%', justifyContent: 'center',marginLeft:-20 }}>
                           <Image
                                style={{
                                    height: 25, width: 25,
                                    resizeMode: 'contain', 
                                    alignSelf: 'center', alignItems: 'center', marginTop: 5
                                }}
                                source={this.props.imagesource}
                            />
                            <Text
                                style={{
                                    fontFamily: 'Lato-SemiBold',
                                    color: '#EABFB9',
                                    marginLeft: 10,
                                    textAlign: 'center',
                                    fontSize: 22,
                                   
                                }}>
                                {this.props.title}
                            </Text>

                        </View>




                    </View>

                </View>
            // </TouchableOpacity>
        );

    }
}


export default SettingHeader;