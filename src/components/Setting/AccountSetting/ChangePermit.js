import React, { Component } from 'react';
import {
    StyleSheet,
    Text, FlatList,
    View, ImageBackground, Animated, TouchableOpacity, Image,
    Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { ScrollableTabView } from '@valdio/react-native-scrollable-tabview'
import TabBar from "react-native-underline-tabbar";
import AccountSettingHeader from './AccountSettingHeader';
import PermitItem from './PermitItem';
const fontsizerwidth = Dimensions.get('window').width


const data = [
    {
        id: 0,
        color: "#396E22",
        title: "Commuter",
        open: "45 Open",
        label: 'A',
        selected: false
    },
    {
        id: 1,
        color: "#A84918",
        title: "Residential",
        open: "15 Open",
        label: 'A',
        selected: false
    },
    {
        id: 2,
        color: "#396E22",
        title: "Faculty",
        open: "45 Open",
        label: 'A',
        selected: false
    },
    {
        id: 3,
        color: "#216E1F",
        title: "Walker Resident",
        open: "5 Open",
        label: 'D',
        selected: false
    },
    {
        id: 4,
        color: "#396E22",
        title: "Visitor",
        open: "45 Open",
        label: 'A',
        selected: false
    }
];



export default class ChangePermitAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: data,
            selectedIndex: -1,
        };
    }
    setSelectedItem(value) {

        var temp = this.state.data;
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].id == value) {
                if (temp[i].selected) {
                    temp[i].selected = false;
                } else {
                    temp[i].selected = true;
                }
            } else {
                temp[i].selected = false;
            }
        }

        if (value == this.state.selectedIndex)
            this.setState({ selectedIndex: -1, data: temp });
        else
            this.setState({ selectedIndex: value, data: temp });

        console.log('selected Index', this.state.data);

    }

    render() {
        con = this;
        return (
            <ImageBackground source={require('../../../../assets/images/screen_bg.png')}
                style={[{
                    resizeMode: 'stretch', flexDirection: "column", justifyContent: 'space-around',
                    height: "100%"
                }]}>
                <View style={[styles.headerLayoutStyle, { marginTop: 100, flex: 1 }]}>



                    <View style={{ width: width, height: '100%', bottom: 0, position: 'absolute' }}>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10, }}>
                            <View style={{ width: 150, height: 5, borderRadius: 10, marginTop: 10, backgroundColor: '#272727', verticalAlign: 'central', marginTop: 5 }} />
                        </View>

                        <AccountSettingHeader onPressBack={() => this.props.navigation.navigate('AccountDetail')} title='Change Permit' />


                        <View style={[styles.container, styles.headerLayoutStyle, {}]}>




                            <View >
                                {
                                    (this.state.selectedIndex != -2) ?
                                        <FlatList
                                       
                                            data={this.state.data}
                                            extraData={this.state}
                                            renderItem={({ item }) => {
                                                return (
                                                    <PermitItem item={item}
                                                        onClick={(val) => this.setSelectedItem(val)} />);
                                            }}
                                            keyExtractor={(item) => item.id}
                                        /> : null
                                }

                            </View>





                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bodyViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerLayoutStyle: {
        width,
        backgroundColor: 'orange',

        backgroundColor: '#201B1B',
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
    },
    slidingPanelLayoutStyle: {
        width,
        height: height / 2,
        backgroundColor: '#201B1B',
        justifyContent: 'center',
        alignItems: 'center',
    },
    commonTextStyle: {
        color: 'white',
        fontSize: 18,
    },
});
