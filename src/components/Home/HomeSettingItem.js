import React, { Component } from 'react';

import {
    View,
    TouchableOpacity,
    Text, TextInput, Image
} from 'react-native';
import { connect } from 'react-redux'
import { TextInputLayout } from 'rn-textinputlayout';
import styles from '../../../assets/css/style';
import ToggleSwitch from 'toggle-switch-react-native';

class HomeSettingItem extends Component {

    state = {
        isOn: false,
    }

    render() {

        return (
            <TouchableOpacity style={[{
                width: "100%",
                height: 55,
                justifyContent: 'center', marginBottom: 10,

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
                        <View style={{
                            flexDirection: 'row', flex: 1, justifyContent: 'space-between', borderBottomColor: '#764943',
                            borderBottomWidth: 1, width: '100%',paddingBottom:10,marginLeft:10,marginTop:10
                        }}>
                            <Text
                                style={{
                                    fontFamily: 'Lato-Light',
                                    color: '#EABFB9',
                                    marginLeft: 10,
                                    textAlign: 'left',
                                    fontSize: 22,
                                    flex: 3,
                                }}>
                                {this.props.title}
                            </Text>
                            {
                                (this.props.showToggle) ? <View style={{ marginLeft: 10, left: 10, flex: 1, }}>
                                    <ToggleSwitch
                                        isOn={this.state.isOn}
                                        onColor="#23739D"
                                        offColor="#474747"

                                        labelStyle={{ color: "transparent", fontWeight: "900" }}
                                        onToggle={isOn => {
                                            console.log("changed to : ", isOn)
                                            this.setState({ isOn })
                                        }}
                                    />
                                </View> :
                                    <View style={{ marginLeft: 10, left: 10, flex: 1, }}>

                                    </View>
                            }
                  
                        </View>




                    </View>

                </View>
            </TouchableOpacity>);

    }
}


export default HomeSettingItem;