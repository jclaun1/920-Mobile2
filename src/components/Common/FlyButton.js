import React, { Component } from 'react';

import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import { connect } from 'react-redux'
import styles from '../../../assets/css/style';

class FlyButton extends Component {

    
    render() {
        color = (!this.props.color)?'#2B2727':this.props.color;
        onPress = this.props.onPress;

        if(this.props.isInActive){
            color = '#D9DDE2';
            onPress = null;
        }

        return (
        <TouchableOpacity  style={[styles.shadow,{
            backgroundColor: color,
            width: "100%",
            height:40,
            borderRadius:3,
            justifyContent: 'center',
            elevation:15,
            
        },this.props.style]}
            onPress={onPress}>
            <Text
                style={{
                    fontFamily: 'Lato-Regular',
                    color: '#EABFB9',
                    width: "100%",
                    textAlign: 'center',
                    fontSize:22,
                }}>
                {this.props.title}
            </Text>
        </TouchableOpacity>
        );
    }
}


export default FlyButton;