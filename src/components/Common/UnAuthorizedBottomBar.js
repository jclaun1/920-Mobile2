import React, { Component } from 'react';

import {
    View,
    TouchableOpacity,
    Text, Image, ImageBackground, Animated
} from 'react-native';
import { connect } from 'react-redux'
import { SimpleAnimation } from 'react-native-simple-animations';


class UnAuthorizedBottomBar extends Component {

    state = {
        selected: 0,
        animation: new Animated.Value()

    };

    render() {

        enableColor = '#610760';
        disableColor = '#C3C3D0';

        tab0 = disableColor;
        tab1 = disableColor;

        icon0 = '#fff';
        icon1 = '#fff';

        if (this.state.selected == 1) {
            tab1 = '#A258A215';
            icon1 = '#7E356B';
        } else {
            tab1 = 'transparent';
            icon1 = '#fff';

        }
        if (this.state.selected == 0) {
            tab0 = '#24272f';
            icon0 = '#255B9A';
        } else {
            tab0 = 'transparent';
            icon0 = '#fff';

        }

        return (


            <View
                style={[{
                    width: '100%',
                    height: 50, backgroundColor: 'transparent', justifyContent: 'center',

                }]}>



                <ImageBackground
                    style={[{
                        width: '100%', resizeMode: 'cover',
                        height: 50, alignSelf: 'center', marginBottom: 10,
                        justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10,
                        flexDirection: 'row', alignItems: 'center',
                    }]}>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('Home')
                            this.setState({ selected: 0 })
                        }}
                        style={{ flex: 1 }} >
                        <Animated.View style={{ width: 130, alignItems: 'center', flexDirection: 'row', backgroundColor: tab0, borderRadius: 30, paddingTop: 5, paddingBottom: 5, paddingLeft: 15, paddingRight: 15, }}>

                            <Image
                                style={{
                                    height: 27, width: 30, tintColor: icon0, resizeMode: 'stretch', alignSelf: 'center'
                                }}
                                source={require('../../../assets/images/ic_home.png')}
                            />
                            {
                                (this.state.selected == 0) ? (
                                    <SimpleAnimation delay={100} duration={2000} fade staticType='slide'>

                                <Text style={{ fontSize: 16, color: '#fff', marginLeft: 20, }}>
                                    Home
                        </Text>
                        </SimpleAnimation>) : <Text />
                            }

                        </Animated.View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('Setting')
                            this.setState({ selected: 1 })
                        }}

                        style={{}} >
                        <Animated.View style={{ alignItems: 'center', flexDirection: 'row', 
                        backgroundColor: tab1, borderRadius: 30, paddingTop: 5, paddingBottom: 5, paddingLeft: 15, paddingRight: 15, }}>

                            <Image
                                style={{
                                    height: 27, width: 27, tintColor: icon1, resizeMode: 'stretch', alignSelf: 'center'
                                }}
                                source={require('../../../assets/images/ic_menu.png')}
                            />
                            {
                                (this.state.selected == 1) ? (
                                    <SimpleAnimation delay={100} duration={2000} fade staticType='slide'>
                                        <Text style={{ fontSize: 19, color: '#fff', marginLeft: 20,fontFamily:'Lato-Regular' }}>
                                            Menu</Text>
                                    </SimpleAnimation>) : <Text />
                            }

                        </Animated.View>

                    </TouchableOpacity>


                </ImageBackground>
            </View>

        );
    }
}


const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, null)(UnAuthorizedBottomBar)