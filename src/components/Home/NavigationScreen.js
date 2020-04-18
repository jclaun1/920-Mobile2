import React, { Component } from 'react';
import {
    StyleSheet,
    Text, FlatList,Easing,
    View, ImageBackground, Animated, TouchableOpacity, Image,
    Dimensions,
} from 'react-native';
import { SimpleAnimation } from 'react-native-simple-animations';
const { width, height } = Dimensions.get('window');
import { ScrollableTabView } from '@valdio/react-native-scrollable-tabview'
import TabBar from "react-native-underline-tabbar";
const fontsizerwidth = Dimensions.get('window').width
import { Card } from "react-native-elements";
import HomeSlotItem from './HomeSlotItem';
import HomeSettingItem from './HomeSettingItem';


const data = [
    {
        color: "#396E22",
        title: "Lot 29",
        open: "45 Open",
        label: 'A',
        selected: false,
        id: 1
    },
    {
        color: "#A84918",
        title: "Lot 19",
        open: "15 Open",
        label: 'A',
        selected: false,
        id: 2
    },
    {
        color: "#396E22",
        title: "Lot 29",
        open: "45 Open",
        label: 'A',
        selected: true,
        id: 3
    },
    {
        color: "#A84918",
        title: "Lot 29",
        open: "5 Open",
        label: 'D',
        selected: false,
        id: 4
    },
    {
        color: "#396E22",
        title: "Lot 29",
        open: "45 Open",
        label: 'A',
        selected: false,
        id: 5
    },
    {
        color: "#396E22",
        title: "Lot 29",
        open: "45 Open",
        label: 'A',
        selected: false,
        id: 6
    }
];

spinValue = new Animated.Value(0)

// First set up animation 
Animated.timing(
    this.spinValue,
  {
    toValue: 1,
    duration: 3000,
    easing: Easing.linear
  }
).start()

// Second interpolate beginning and end values (in this case 0 and 1)
const spin = this.spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg']
})

export default class NavigationScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: data,
            selectedIndex: 3,
            expanded: false,
        };
    }


    
    setSelectedItem(value) {
        console.log('selected ', value);

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

        console.log('selected ', value, ' data: ', data);


    }

    onExpandCollapseClick() {
        console.log('expand click ', this.state.expanded);
        this.setState({
            expanded: !this.state.expanded,
        })
    }

    render() {

        if (this.state.expanded) rotate = '180deg';
        else rotate = '0deg';


        return (
            <ImageBackground source={require('../../../assets/images/screen_bg.png')}
                style={[{
                    resizeMode: 'stretch', flexDirection: "column", justifyContent: 'space-around',
                    height: "100%"
                }]}>

                <View style={{ width: "100%", height: 65, flexDirection: 'row', verticalAlign: 'central', justifyContent: 'center', backgroundColor: '#3466CB50', top: 10, alignSelf: 'center', alignContent: 'center', position: 'absolute' }}>

                    <Image style={{ height: 35, width: 30, position: 'absolute', left: 20, top: 10 }}
                        source={require('../../../assets/images/ic_arrow.png')} />

                    <Text style={{ alignItems: 'center', marginTop: 20, justifyContent: 'center', textAlign: 'center', verticalAlign: 'central', color: '#fff', fontSize: 19, fontFamily: 'Lato-Regular', paddingTop: 3 }}> Toward</Text>

                    <Text style={{ alignItems: 'center', marginTop: 15, justifyContent: 'center', textAlign: 'center', verticalAlign: 'central', color: '#fff', fontSize: 26, fontFamily: 'Lato-Bold', }}>  HillTop</Text>
                    <Text style={{ alignItems: 'center', marginTop: 20, justifyContent: 'center', textAlign: 'center', verticalAlign: 'central', color: '#fff', fontSize: 19, fontFamily: 'Lato-Regular', paddingTop: 3 }}> Rd </Text>

                </View>

                <View style={{ padding:2,width:100,  flexDirection: 'row',left:10,borderBottomStartRadius:10,borderBottomEndRadius:10, verticalAlign: 'central', justifyContent: 'center', backgroundColor: '#0048D9', top: 75, alignContent: 'center', position: 'absolute' }}>
                    <Text style={{ alignItems: 'center', justifyContent: 'center', 
                    textAlign: 'center', verticalAlign: 'central', color: '#fff', 
                    fontSize: 19, fontFamily: 'Lato-Regular', }}> Then</Text>

                    <Image style={{ height: 15, width: 15,left: 10,marginRight: 5,
                     top: 5 }}
                        source={require('../../../assets/images/ic_turn.png')} />

                </View>

                <View style={{ padding:2, left:10,borderRadius:10, borderColor:'#fff',borderWidth:1,alignContent: 'center', left:20,bottom:110,position: 'absolute' }}>
                   
                    <Text style={{ alignItems: 'center', justifyContent: 'center', 
                    textAlign: 'center', verticalAlign: 'central', color: '#fff', 
                    fontSize: 23, fontFamily: 'Lato-Regular', }}> 23 </Text>
                   
                    <Text style={{ alignItems: 'center', justifyContent: 'center', 
                    textAlign: 'center', verticalAlign: 'central', color: '#fff', 
                    fontSize: 15, fontFamily: 'Lato-Light', }}> mph </Text>

        
                </View>

                <View style={[styles.container, styles.headerLayoutStyle, { bottom: 0, position: 'absolute' }]}>



                    <View style={{ width: width, marginTop: 10 }}>

                        <View style={{}}>


                            <SimpleAnimation delay={100} duration={2000} fade staticType='slide'>

                                <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10, }}>

                                    <View style={{ width: 150, height: 6, borderRadius: 10, backgroundColor: '#272727', verticalAlign: 'central', marginTop: 5 }} />
                                </View>
                            </SimpleAnimation>
                        </View>



                        <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 10, marginBottom: 5, height: 60 }}>

                            {
                                (this.state.expanded) ?
                                    <View style={{ width: 60, height: 60 }} /> :
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
                                        <Image style={{ width: 60, height: 60 }}
                                            source={require('../../../assets/images/ic_close_rounded.png')}
                                        />
                                    </TouchableOpacity>
                            }


                            <View style={{ flex: 1, justifyContent: 'space-between', height: 55, marginLeft: 10 }}>
                                <Text style={{ fontSize: 25, fontFamily: 'Lato-Semibold', color: '#EABFB9' }}> 1 min </Text>
                                <Text style={{ fontSize: 17, fontFamily: 'Lato-Light', color: '#CE867C' }} > 0.3 mi * 9:20 AM </Text>

                            </View>

                            <TouchableOpacity onPress={() => this.onExpandCollapseClick()}>
                                <Animated.Image style={{
                                    width: 60, height: 60, right: 0,
                                    transform: [{ rotate: rotate }],
                                }}
                                    source={require('../../../assets/images/ic_show_options.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        {
                            (this.state.expanded) ?
                            <SimpleAnimation delay={100} duration={2000} fade staticType='slide'>

                                <View style={{ width: '100%', borderTopColor: '#764943', borderWidth: 1, }}>

                                    <HomeSettingItem imagesource={require('../../../assets/images/ic_mute.png')}
                                        title="Mute" showToggle={false} />
                                    <HomeSettingItem imagesource={require('../../../assets/images/ic_step_direction.png')}
                                        title="Step-by-step directions" showToggle={false} />
                                    <HomeSettingItem imagesource={require('../../../assets/images/ic_route.png')}
                                        title="Show route" showToggle={false} />
                                    <HomeSettingItem imagesource={require('../../../assets/images/ic_trafic.png')}
                                        title="Show traffic on map" showToggle={true} />
                                    <HomeSettingItem imagesource={require('../../../assets/images/ic_satellite.png')}
                                        title="Show satellite map" showToggle={true} />
                                    <HomeSettingItem imagesource={require('../../../assets/images/ic_settings.png')}
                                        title="Setting" showToggle={false} />

                                </View>
                                </SimpleAnimation> :
                                <View />
                        }





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
        elevation: 5,
        backgroundColor: '#201B1B',
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
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
    shadow: {
        borderColor: '#201B1B',
        borderWidth: 1,
        ...Platform.select({
            ios: {},
            android: {
                shadowColor: 'black',
                shadowRadius: 0,
                shadowOpacity: 1,
                elevation: 5,
                shadowColor: '#ccc',
                shadowOffset: { width: 5, height: 4 },
            },
        }),
    },
});
