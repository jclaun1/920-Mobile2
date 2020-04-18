import React, { Component } from 'react';

import {
    View,
    TouchableOpacity,
    Text, Image
} from 'react-native';
import { connect } from 'react-redux'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


class HomeSlotItem extends Component {





    render() {
        color = (!this.props.color) ? '#2B2727' : this.props.color;
        onPress = this.props.onPress;
        rowData = this.props.data;
        openColor = rowData.color;


        return (
            <TouchableWithoutFeedback onLongPress={() => this.props.onLongPress(this.props.data.id)}
                onPress={() => this.props.undoSlection(this.props.data.id)}>
                {
                    (this.props.data.selected) ?
                        <TouchableOpacity onPress={() => this.props.navigateToMap(this.props.data.id)}
                            onLongPress={() => this.props.onLongPress(this.props.data.id)}
                        >
                            <View style={[{
                                width: 100, height: 100, justifyContent: 'center', paddingLeft: 10,
                                paddingRight: 10, paddingBottom: 10, alignItems: 'center', alignContent: 'center',
                                backgroundColor: '#39883F', borderRadius: 15, elevation: 5,
                                margin: 10
                            }]}
                            >

                                <Text style={{
                                    marginBottom: 20, width: 70, padding: 2,
                                    borderRadius: 15, color: '#ffffff',
                                    textAlign: 'center', fontSize: 12
                                }}>

                                    {rowData.title}
                                </Text>


                                <Image source={require('../../../assets/images/ic_open_lot.png')}
                                    style={{ width: 25, height: 25, alignItems: 'center', resizeMode: 'contain', }}
                                />
                            </View>
                        </TouchableOpacity> :
                        (this.props.data.longSelected) ?
                            <TouchableOpacity onPress={() => this.props.setFav(this.props.data.id)}
                                onLongPress={() => this.props.onLongPress(this.props.data.id)}>
                                <View style={[{
                                    width: 100, height: 100, justifyContent: 'center', paddingLeft: 10,
                                    paddingRight: 10, paddingBottom: 10, alignItems: 'center', alignContent: 'center',
                                    backgroundColor: '#DCDCDC', borderRadius: 15, elevation: 5,
                                    margin: 10
                                }]}
                                >

                                    <Text style={{
                                        marginBottom: 20, width: 80,
                                        color: '#000000',
                                        textAlign: 'center', fontSize: 15, fontFamily: 'Lato-Bold'
                                    }}>

                                        Set favorite
                                    </Text>


                                    <Image source={require('../../../assets/images/ic_star.png')}
                                        style={{ width: 25, height: 25, alignItems: 'center', resizeMode: 'contain', }}
                                    />
                                </View>
                            </TouchableOpacity> :
                            <TouchableOpacity onLongPress={() => this.props.onLongPress(this.props.data.id)} style={[{}, this.props.style]}
                                onPress={() => {

                                    this.props.onPress(this.props.data.id)
                                }}>
                                <View style={[{
                                    width: 100, height: 100, justifyContent: 'center', paddingLeft: 10,
                                    paddingRight: 10, paddingBottom: 10, alignItems: 'center', alignContent: 'center',
                                    backgroundColor: '#272727', borderRadius: 15, elevation: 5,
                                    margin: 10
                                }]}
                                >
                                    <Text style={{
                                        marginBottom: 10, marginTop: 20, width: 70, padding: 2,
                                        borderRadius: 15, backgroundColor: openColor, color: '#ffffff',
                                        textAlign: 'center', fontSize: 10
                                    }}>
                                        {rowData.open}
                                    </Text>
                                    <Text style={{
                                        marginBottom: 10, width: 70, padding: 2,
                                        borderRadius: 15, color: '#EABFB9',
                                        textAlign: 'center', fontSize: 12
                                    }}>
                                        {rowData.title}
                                    </Text>
                                    <Text style={{
                                        marginBottom: 10, width: 20, padding: 2,
                                        borderRadius: 15, backgroundColor: openColor, color: '#ffffff',
                                        textAlign: 'center', fontSize: 12
                                    }}>
                                        {rowData.label}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                }

                {
                    (this.props.data.isFav) ?
                        <Image source={require('../../../assets/images/ic_star_filled.png')}
                            style={{ width: 25, height: 25, alignItems: 'center', margin: 5, alignSelf: 'center', resizeMode: 'contain', }}
                        /> : null}
            </TouchableWithoutFeedback>
        );
    }



}


export default HomeSlotItem;