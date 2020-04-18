import React from 'react'
import {
    Text, View, TouchableOpacity,
    KeyboardAvoidingView,Dimensions,BackHandler,
    TextInput, ScrollView, Image, Modal, Alert, ImageBackground
} from 'react-native'
import styles from '../../../assets/css/style'
import axios from 'axios'
import { TextInputLayout } from 'rn-textinputlayout';
import FlyButton from '../Common/FlyButton';
import InputFields from '../Common/InputFields';


export default class ForgetPassword extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            isLoading: false
        }
    }

    async _handleSubmit() {

        // if (!this.state.email || this.state.isLoading) {
        //     return
        // }

        this.props.navigation.navigate('ConfirmCode')


    }
    componentWillUnmount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
          this.props.navigation.navigate('Login');
          return true;
        });
      }
      componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
          this.props.navigation.navigate('Login');
          return true;
        });
      }

  
    render() {

        return (
            // <Modal
            //     animationType="slide"
            //     transparent={false}
            //     animationInTiming={1600}
            //     animationOutTiming={1600}
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

                                    <View style={{ margin: 20, width:Dimensions.get('window').width - 40, }}>
                                        <Text style={styles.topheader}>Forget Password</Text>
                                    </View>
                                    <Text style={styles.topSubHeader}>Enter your email to recover password.</Text>

                                    <InputFields
                                        placeholder="Email"
                                        onChangeText={(email) => this.setState({ email })}
                                    />



                                    <View style={{ flexDirection: 'column',width:Dimensions.get('window').width - 70, justifyContent: "center",  marginTop:50 }}>
                                        <FlyButton onPress={() => this._handleSubmit()} title={this.state.isLoading ? 'Sending..' : 'Send Code'} />
                                    </View>


                                    <View style={{ flexDirection: 'column', width:Dimensions.get('window').width - 70, marginTop:20,justifyContent: "center", }}>
                                        <FlyButton style={{marginTop:10}} onPress={() => this._handleSubmit()} title={this.state.isLoading ? 'Sending..' : 'Resend Code'} />
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
