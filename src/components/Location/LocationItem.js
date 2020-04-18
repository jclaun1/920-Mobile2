import React, { Component } from 'react';

import {
    View,
    TouchableOpacity,
    Text,Image
} from 'react-native';
import { connect } from 'react-redux'


class LocationItem extends Component {

    
    render() {
        color = (!this.props.color)?'#2B2727':this.props.color;
        onPress = this.props.onPress;

        if(this.props.isInActive){
            color = '#D9DDE2';
            onPress = null;
        }

        return (
        <TouchableOpacity  style={[{
            backgroundColor: color,
            width: "100%",
            height:40,
            borderRadius:5,
            justifyContent: 'center',
            elevation:5,
            
        },this.props.style]}
            onPress={onPress}>
            <View style={{ width: '100%', flexDirection: 'row', }}>
            <Image
                        style={{
                            height: 25, width: 20,  marginLeft: 20,position:'absolute',
                            resizeMode: 'contain', alignSelf: 'center', alignItems: 'center', 
                        }}
                        source={require("../../../assets/images/ic_umbc.png")}
                    />
            <Text
                style={{
                    fontFamily: 'OpenSans-SemiBold',
                    color: '#EABFB9',
                    width: "100%",
                    textAlign: 'center',
                    fontSize:22,
                }}>
                {this.props.title}
            </Text>
                </View>
            
        </TouchableOpacity>
        );
    }
}


export default LocationItem;