import React, { Component } from 'react';

import {
    View,
    TouchableOpacity,
    Text, Image
} from 'react-native';
import { connect } from 'react-redux'


class LocationItem extends Component {


    render() {
        color = (!this.props.color) ? '#2B2727' : this.props.color;
        onPress = this.props.onPress;

        if (this.props.isInActive) {
            color = '#D9DDE2';
            onPress = null;
        }

        return (
            <TouchableOpacity style={[{
                backgroundColor: '#2B2727',
                width: "100%",
                height: 40,
                borderRadius: 5,
                justifyContent: 'center',
                elevation: 5,

            }, this.props.style]}
                onPress={onPress}>
                <View style={{ width: '100%', flexDirection: 'row', }}>

                    <Text
                        style={{
                            fontFamily: 'OpenSans-SemiBold',
                            color: '#EABFB9',
                            width: "100%",
                            textAlign: 'center',
                            fontSize: 22,
                        }}>
                        {this.props.title}
                    </Text>
                    {/* <Image
                        style={{
                            height: 25, width: 20, right: 20, position: 'absolute',
                            resizeMode: 'contain', alignSelf: 'center', alignItems: 'center',
                        }}
                        source={this.props.source}
                    /> */}

                    <Text
                        style={{
                            fontFamily: 'OpenSans-SemiBold',
                            color: '#fff',
                            backgroundColor: color,
                            width: 20, height: 20, borderRadius: 10,
                            textAlign: 'center',right: 20, position: 'absolute',
                            fontSize: 12,paddingBottom:4,marginTop:5
                        }}>
                        {this.props.type}
                    </Text>
                </View>

            </TouchableOpacity>
        );
    }
}


export default LocationItem;