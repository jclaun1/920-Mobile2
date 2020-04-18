import React from 'react';
import { PLACCE_API } from '../../config/env';
import { View,Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class GooglePlaces extends React.Component {
  render() {
    return (
      <View style={{flexDirection:'row',borderTopWidth: 0,
      borderBottomWidth: 1,
      borderLeftWidth: 0,
      borderColor:'#D8D8D8',
      borderRightWidth: 0,}}>
        <Image
          source={require('../../../assets/images/ic_pick_location.png')}
          style={{
            height: 17, width: 17, resizeMode: 'cover',
            alignSelf: 'center',tintColor:'#ABB0B7'
          }}
        />
        <GooglePlacesAutocomplete
          placeholder={this.props.placeHolder ? this.props.placeHolder : 'Search'}
          minLength={2} // minimum length of text to search
          autoFocus={this.props.isFocus ? this.props.isFocus : false}
          fetchDetails={true}
          onPress={(data, details = null) => this.props.onSelectAddress(details)}
          getDefaultValue={() => {
            return this.props.defaultText ? this.props.defaultText : ''; // text input default value
          }}
          query={
            this.props.isLocal
              ? {
                key: PLACCE_API,
                language: 'en',
                location:
                  this.props.cityDetails.lat +
                  ',' +
                  this.props.cityDetails.lang,
                radius: '15000', //15 km
                components: 'country:' + this.props.countryCode.toLowerCase(),
                strictbounds: true,
              }
              : {
                key: PLACCE_API,
                language: 'en', // language of the results
                types: '(cities)',
                components: this.props.countryCode
                  ? 'country:' + this.props.countryCode.toLowerCase()
                  : null,
              }
          }
          styles={{
            textInputContainer: {
              backgroundColor: 'rgba(0,0,0,0)',
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              // borderColor: '#ccc',
            },
            description: {
              fontWeight: 'bold',
            },
            textInput: {
              marginLeft: 12,
              marginRight: 0,
              height: 30,
              color: '#000',
              fontSize: 12,
              fontFamily:''
            },
            predefinedPlacesDescription: {
              color: '#000',
            },
          }}
          // text=''
          listViewDisplayed={this.props.listDisplayed}
          currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
          currentLocationLabel="Current location"
          nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
          GoogleReverseGeocodingQuery={
            {
              // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
            }
          }
        />

      </View>
    );
  }
}
