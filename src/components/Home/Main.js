import React, { Component } from 'react';
import {
  StyleSheet,
  Text, FlatList,
  View, ImageBackground, Animated, TouchableOpacity, Image,
  Dimensions, SafeAreaView
} from 'react-native';
import { SimpleAnimation } from 'react-native-simple-animations';
const { width, height } = Dimensions.get('window');
import { ScrollableTabView } from '@valdio/react-native-scrollable-tabview'
import TabBar from "react-native-underline-tabbar";
const fontsizerwidth = Dimensions.get('window').width
import { Card } from "react-native-elements";
import HomeSlotItem from './HomeSlotItem';
import MapboxGL from '@react-native-mapbox-gl/maps';
MapboxGL.setAccessToken(
    'pk.eyJ1IjoibmxhbWJlMiIsImEiOiJjazVubXJyM3IweDRwM25wNndlbWhjc3U5In0.4y-pp1CsRG42pY_h5xTdcA'
);

const data = [
  {
    color: "#396E22",
    title: "Lot 29",
    open: "45 Open",
    label: 'A',
    selected: false,
    longSelected: false,
    isFav: false,
    id: 1
  },
  {
    color: "#A84918",
    title: "Lot 19",
    open: "15 Open",
    label: 'A',
    selected: false,
    longSelected: false,
    isFav: false,
    id: 2
  },
  {
    color: "#396E22",
    title: "Lot 29",
    open: "45 Open",
    label: 'A',
    selected: false,
    longSelected: false,
    isFav: true,
    id: 3
  },
  {
    color: "#A84918",
    title: "Lot 29",
    open: "5 Open",
    label: 'D',
    selected: false,
    longSelected: false,
    isFav: false,
    id: 4
  },
  {
    color: "#396E22",
    title: "Lot 29",
    open: "45 Open",
    label: 'A',
    selected: false,
    longSelected: false,
    isFav: false,
    id: 5
  },
  {
    color: "#396E22",
    title: "Lot 29",
    open: "45 Open",
    label: 'A',
    selected: false,
    longSelected: false,
    isFav: false,
    id: 6
  }
];


const IS_ANDROID=Platform.OS=== 'android';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: data,
      selectedIndex: -1,
      selectedLongIndex: -1,
      showFilter: 0,
      selectedFilter: 0,
      singleSelected: false,
      isAndroidPermissionGranted:false,
      isFetchingAndroidPermission:IS_ANDROID,
      coordinates:[[-76.862000,39.222000]],
      showUserLocation:true,
      location:[-76.862000,39.222000],
    };
  }

  async UNSAFE_componentWillMount(){
      if(IS_ANDROID) {
          const isGranted = await MapboxGL.requestAndroidLocationPermissions();
          this.setState({
              isAndroidPermissionGranted: isGranted,
              isFetchingAndroidPermission:false,
          })
      }
  }

  navigateToMap(value) {
    this.props.navigation.navigate('NavigationScreen');
  }

  selectLongSelection(value) {
    console.log('selected long ', value);

    var temp = this.state.data;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id == value) {
        if (temp[i].longSelected) {
          temp[i].longSelected = false;
        } else {
          temp[i].longSelected = true;
          temp[i].selected = false;
        }
      } else {
        temp[i].longSelected = false;
      }
    }

    if (value == this.state.selectedLongIndex)
      this.setState({ selectedIndex: -1, data: temp });
    else
      this.setState({ selectedIndex: value, data: temp });

    console.log('selected ', value, ' data: ', data);

  }

  setFav(value) {
    console.log('selected long ', value);

    var temp = this.state.data;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id == value) {
        if (temp[i].longSelected) {
          temp[i].longSelected = false;
        } else {
          temp[i].longSelected = false;
          temp[i].selected = false;
        }
      } else {
        temp[i].longSelected = false;
      }
    }

    if (value == this.state.selectedIndex)
      this.setState({singleSelected:false, selectedIndex: -3, data: temp });
    else
      this.setState({ singleSelected:false,selectedIndex: value, data: temp });

    console.log('selected ', value, ' data: ', data);

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
          temp[i].longSelected = false;

        }
      } else {
        temp[i].selected = false;
      }
    }

    if (value == this.state.selectedIndex)
      this.setState({singleSelected:false, selectedIndex: -1, data: temp });
    else
      this.setState({ singleSelected:true,selectedIndex: value, data: temp });

    console.log('selected ', value, ' data: ', data);


  }


  render() {

    bgOption1 = "transparent";
    bgOption2 = "transparent";
    bgOption3 = "transparent";

    if (this.state.selectedFilter == 1) {
      bgOption1 = "#95554C";
      bgOption2 = "transparent";
      bgOption3 = "transparent";
    }

    if (this.state.selectedFilter == 1) {
      bgOption1 = "#95554C";
      bgOption2 = "transparent";
      bgOption3 = "transparent";
    }

    if (this.state.selectedFilter == 2) {
      bgOption2 = "#95554C";
      bgOption1 = "transparent";
      bgOption3 = "transparent";
    }

    if (this.state.selectedFilter == 3) {
      bgOption3 = "#95554C";
      bgOption1 = "transparent";
      bgOption2 = "transparent";
    }

    return (
      <ImageBackground source={require('../../../assets/images/screen_bg.png')}
        style={[{
          resizeMode: 'stretch', flexDirection: "column", justifyContent: 'space-around',
          height: "100%"
        }]}>

        {
          (this.state.selectedIndex != -1 && this.state.singleSelected) ?
            <View style={{ width: 215, height: 35, borderRadius: 20, backgroundColor: '#828282', flexDirection: 'row', justifyContent: 'space-around',top:10,alignSelf:'center' ,position:'absolute'}}>

              <Text style={{ alignItems: 'center', height: 35,justifyContent:'center' , textAlign: 'center', color: '#fff', fontSize: 26, fontFamily: 'Lato-Bold', flex: 1 }}> Lot 29 </Text>
              <Text style={{ alignItems: 'center', height: 35,justifyContent:'center' ,textAlign: 'center', color: '#fff',backgroundColor:'#396E22',borderRadius:20, fontSize: 19, fontFamily: 'Lato-Regular', flex: 1,paddingTop:3 }}> Open 12 </Text>

            </View> :
            <View />
        }

        {
          (this.state.showFilter == 1) ?

            <TouchableOpacity style={[{ bottom: 220, position: 'absolute', alignSelf: 'center', elevation: 5 }]} onPress={() => this.setState({ showFilter: 0 })}>

              <Image style={{ width: 60, height: 60, alignSelf: 'center' }} source={require('../../../assets/images/ic_cross_rounded.png')} />
            </TouchableOpacity>
            : <View />
        }

        {
          (this.state.selectedIndex != -1) ?

            <TouchableOpacity style={[{ bottom: 220, position: 'absolute', alignSelf: 'center', elevation: 5 }]}
                             onPress={() => {
                               this.selectLongSelection(-1)
                               this.setSelectedItem(-1)
                              }}>

              <Image style={{ width: 60, height: 60, alignSelf: 'center' }} source={require('../../../assets/images/ic_cross_rounded.png')} />
            </TouchableOpacity>
            : <View />
        }
        <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <MapboxGL.MapView
            ref = {c=>(this._map=c)}
                zoomLevel={14}
                centerCoordinate={this.state.coordinates[0]}
                showUserLocation={true}
                userTrackingMode={this.state.userSelectedUserTrackingMode}
                style={styles.container}
                styleURL={'mapbox://styles/nlambe2/ck86i3hez09j11kmpnr4rd6vy'}
            >
            <MapboxGL.Camera
                zoomLevel={16}
                animationMode={'flyTo'}
                animationDuration={1}
                ref={c=>(this.camera=c)}
                centerCoordinate={this.state.location}
            >
            </MapboxGL.Camera>
                <MapboxGL.UserLocation>

                </MapboxGL.UserLocation>

            </MapboxGL.MapView>

        </View>
        </SafeAreaView>
        <View style={[styles.container, styles.headerLayoutStyle, { bottom: 0, position: 'absolute' }]}>



          <View style={{ width: width, marginTop: 10 }}>

            <View style={{}}>
              {
                (this.state.showFilter == 0) ?
                  <SimpleAnimation delay={100} duration={2000} fade staticType='slide'>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10, }}>
                      <TouchableOpacity style={{ left: 0, position: 'absolute' }} onPress={() => this.setState({ showFilter: 1 })}>

                        <Text style={{
                          marginBottom: 10, marginLeft: 10, marginTop: 20, width: 73, padding: 4,
                          borderRadius: 15, backgroundColor: '#272727', color: '#EABFB9', fontFamily: 'Lato-Light',
                          textAlign: 'center', fontSize: 12
                        }}>
                          Sort by
                      </Text>

                      </TouchableOpacity>

                      <View style={{ width: 150, height: 6, borderRadius: 10, backgroundColor: '#272727', verticalAlign: 'central', marginTop: 5 }} />
                    </View>
                  </SimpleAnimation> :

                  <SimpleAnimation delay={100} duration={3000} fade staticType='in' direction='right'>


                    <Animated.View style={{
                      marginBottom: 10, marginLeft: 10, marginTop: 10, width: width - 20, padding: 2,
                      borderRadius: 25, backgroundColor: '#272727', color: '#EABFB9',
                      textAlign: 'center', fontSize: 10, flexDirection: 'row', justifyContent: 'space-around'
                    }}>
                      <TouchableOpacity onPress={() => this.setState({ selectedFilter: 1 })}>
                        <Text style={{
                          marginBottom: 2, marginLeft: 10, marginTop: 2, width: 70, padding: 2,
                          borderRadius: 15, backgroundColor: bgOption1, color: '#EABFB9',
                          textAlign: 'center', fontSize: 12
                        }}>
                          Favorites
                      </Text>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => this.setState({ selectedFilter: 2 })}>
                        <Text style={{
                          marginBottom: 2, marginLeft: 10, marginTop: 2, width: 70, padding: 2,
                          borderRadius: 15, backgroundColor: bgOption2, color: '#EABFB9',
                          textAlign: 'center', fontSize: 12
                        }}>
                          Availability
                      </Text>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => this.setState({ selectedFilter: 3 })}>
                        <Text style={{
                          marginBottom: 2, marginLeft: 10, marginTop: 2, width: 70, padding: 2,
                          borderRadius: 15, backgroundColor: bgOption3, color: '#EABFB9',
                          textAlign: 'center', fontSize: 12
                        }}>
                          Permit type
                      </Text>
                      </TouchableOpacity>
                    </Animated.View>
                  </SimpleAnimation>
              }

            </View>



            <View >
              {
                this.state.selectedIndex != -2 ?
                  <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={this.state.data}
                    refreshing={true}

                    extraData={this.state.selectedIndex}

                    renderItem={({ item }) => {
                      return (
                        <HomeSlotItem
                          navigateToMap={(val) => this.navigateToMap(val)}
                          setFav={(val) => this.setFav(val)}
                          onPress={(value) => this.setSelectedItem(value)}
                          onLongPress={(value) => this.selectLongSelection(value)}
                          data={item} />

                      );
                    }}
                    keyExtractor={(item) => item.id}
                  /> :
                  null
              }

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
    height: 200,
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
