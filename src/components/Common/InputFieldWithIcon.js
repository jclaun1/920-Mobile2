import React, { Component } from 'react';

import {
    View,
    TouchableOpacity,
    Text, TextInput, Image
} from 'react-native';
import { connect } from 'react-redux'
import { TextInputLayout } from 'rn-textinputlayout';
import styles from '../../../assets/css/style';


class InputFieldWithIcon extends Component {


    render() {

        return (

            <View style={{
                width: '100%', borderBottomColor: '#ABB0B7',
                borderBottomWidth: .5,marginBottom:10,
            }}>
                <Text style={styles.inputlabel}>{this.props.label.toUpperCase()}</Text>

                <View style={{ width: '100%', flexDirection: 'row', }}>

                    <Image
                        style={{
                            height: 25, width: 20, tintColor: '#ABB0B7', marginRight: 20,
                            resizeMode: 'contain', alignSelf: 'center', alignItems: 'center', marginTop: 5
                        }}
                        source={this.props.imageSource}
                    />

                    <TextInput
                        style={[styles.inputboxLogin,{marginTop:5}]}

                        placeholder={this.props.label}
                        placeholderTextColor="#ABB0B7"
                        underlineColorAndroid="rgba(0, 0, 0,0)"
                        value={this.props.value}
                        returnKeyType={'next'}
                        ref={this.props.ref}

                        onChangeText={this.props.onChangeText}
                        secureTextEntry={this.props.secureTextEntry}

                    />

                </View>

            </View>);

    }
}


export default InputFieldWithIcon;