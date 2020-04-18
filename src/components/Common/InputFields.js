import React, { Component } from 'react';

import {
    View,
    TouchableOpacity,
    Text, TextInput
} from 'react-native';
import { connect } from 'react-redux'
import { TextInputLayout } from 'rn-textinputlayout';
import styles from '../../../assets/css/style';


class InputFields extends Component {


    render() {
        keyboardType = this.props.keyboardType?this.props.keyboardType:'text';
        multiline = this.props.multiline?this.props.multiline:false;
        return (
            <View style={{width:'100%'}}>

         
                    <TextInput
                        style={styles.inputboxLogin}

                        placeholder={this.props.placeholder}
                        placeholderTextColor="#EABFB9"
                        underlineColorAndroid="transparent"
                        value={this.props.value}
                        returnKeyType={'next'}
                        ref={this.props.ref}
                        keyboardType={keyboardType}
                        onChangeText={this.props.onChangeText}
                        secureTextEntry={this.props.secureTextEntry}
                        multiline={multiline}
                    />
            


            </View>);

    }
}


export default InputFields;