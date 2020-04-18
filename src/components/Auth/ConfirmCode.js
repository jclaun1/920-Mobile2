import React from 'react'
import {
    Text, View, TouchableOpacity,
    KeyboardAvoidingView,BackHandler,
    TextInput, ScrollView, Image, Modal, Alert, ImageBackground
} from 'react-native'
import styles from '../../../assets/css/style'
import axios from 'axios'
import { TextInputLayout } from 'rn-textinputlayout';
import FlyButton from '../Common/FlyButton';
import InputFields from '../Common/InputFields';


export default class ConfirmCode extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            isLoading: false
        }
    }

    async _handleSubmit() {
        // this.props.onSentEmail();
        this.props.navigation.navigate('ResetPassword')

    }
    componentWillUnmount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
          this.props.navigation.navigate('ForgetPassword');
          return true;
        });
      }
      componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
          this.props.navigation.goBack(null);
          return true;
        });
      }

    render() {

        return (
            // <Modal
            //     animationType="slide"
            //     animationInTiming={600}
            //     transparent={false}
            //     visible={this.props.visible}
            //     onRequestClose={() => {
            //         this.props.onClose(false)
            //     }}>
                <KeyboardAvoidingView behavior="" enabled style={styles.containerbox}>
                    <ImageBackground source={require('../../../assets/images/screen_bg.png')}
                        style={[{
                            resizeMode: 'stretch', flexDirection: "column", justifyContent: 'space-around',
                            height: "100%"
                        }]}>
                        <ScrollView style={{ margin: 20, }} contentContainerStyle={{ flexGrow: 1 }}>
                            <View style={[styles.container, { margin: 20, width: "100%", justifyContent: 'center', }]}>
                                <View style={{ margin: 20, width: "100%",position:'absolute' }} >
                                    <TouchableOpacity onPress={() => this.props.onClose(false)}>
                                        <Image
                                            source={require('../../../assets/images/ic_back.png')}
                                            style={{
                                                height: 20, width: 20,margin:20, resizeMode: 'cover',
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>

                                <View style={[{ width:'100%',justifyContent: 'center', paddingLeft: 10, paddingRight: 10, paddingBottom: 30, alignItems: 'center', backgroundColor: '#201B1B', borderRadius: 10, elevation: 5 }]}>

                                    <View style={{ marginTop: 20,marginBottom:10, width: "100%", }}>
                                        <Text style={styles.topheader}>Enter Code</Text>

                                    </View>

                                    <View style={{ marginTop: 0,marginBottom:10, width: "100%", }}>
                                    <Text style={[styles.topSubHeader,{marginBottom:10}]}>Enter the code sent to your email.</Text>

                                    </View>

                                    <InputFields
                                    style={{marginTop:10,}}
                                        placeholder="Code"
                                        onChangeText={(email) => this.setState({ email })}
                                    />



                                    <View style={{ flexDirection: 'column', width: "100%", justifyContent: "center", marginLeft:20,marginRight:20,marginTop:50 }}>
                                        <FlyButton onPress={() => this._handleSubmit()} title={this.state.isLoading ? 'Confirming..' : 'Submit'} />
                                    </View>

                                </View>

                            </View>

                        </ScrollView>
                    </ImageBackground>
                </KeyboardAvoidingView>
            // </Modal>
        )

    }
}
