import React, { Component } from 'react';

import {
    View,
    TouchableOpacity,
    Text, TextInput, Image
} from 'react-native';
import { connect } from 'react-redux'
import { TextInputLayout } from 'rn-textinputlayout';
import styles from '../../../../assets/css/style';


class PermitItem extends Component {


    render() {
        openColor = this.props.item.color;
        backgroundColorSelected = (this.props.item.selected) ? '#707070' : '';

        return (

            <TouchableOpacity onPress={() => { this.props.onClick(this.props.item.id); }}>
               { this.props.item.selected ?  <View
                    style={[{
                        width: '100%', height: 50, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10,
                        paddingRight: 10, alignItems: 'center', alignContent: 'center',
                        borderBottomWidth: 1, borderBottomColor: '#764943', backgroundColor: '#707070',

                    }]}
                >

                    <Text style={{
                        padding: 2,
                        color: '#EABFB9',
                        textAlign: 'center', fontSize: 20
                    }}>
                        {this.props.item.title}
                    </Text>
                    <Text style={{
                        width: 20, padding: 2, marginTop: 5,
                        borderRadius: 15, backgroundColor: openColor, color: '#ffffff',
                        textAlign: 'center', fontSize: 12
                    }}>
                        {this.props.item.label}
                    </Text>
                </View>
                :
                 <View
                    style={[{
                        width: '100%', height: 50, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10,
                        paddingRight: 10, alignItems: 'center', alignContent: 'center',
                        borderBottomWidth: 1, borderBottomColor: '#764943', backgroundColor: '',

                    }]}
                >

                    <Text style={{
                        padding: 2,
                        color: '#EABFB9',
                        textAlign: 'center', fontSize: 20
                    }}>
                        {this.props.item.title}
                    </Text>
                    <Text style={{
                        width: 20, padding: 2, marginTop: 5,
                        borderRadius: 15, backgroundColor: openColor, color: '#ffffff',
                        textAlign: 'center', fontSize: 12
                    }}>
                        {this.props.item.label}
                    </Text>
                </View>
               }
            </TouchableOpacity>);

    }
}


export default PermitItem;