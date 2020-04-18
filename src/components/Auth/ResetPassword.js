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


export default class ResetPassword extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            isLoading: false
        }
    }
    componentWillUnmount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
          this.props.navigation.navigate('ConfirmCode');
          return true;
        });
      }
      componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
          this.props.navigation.navigate('ConfirmCode');
          return true;
        });
      }

    async _handleSubmit() {
        this.props.navigation.navigate('Login');
    }

    render() {

        return (
            // <Modal
            //     animationType="slide"
            //     transparent={false}
            //     animationInTiming={600}
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
                                        <Text style={styles.topheader}>Reset Password</Text>
                                    </View>
                                    <Text style={styles.topSubHeader}>Try not to forget this time </Text>

                                    <InputFields
                                        placeholder="Password"
                                        secureTextEntry={true}
                                        onChangeText={(email) => this.setState({ email })}
                                    />
                                    <InputFields
                                        placeholder="Confirm Password"
                                        secureTextEntry={true}
                                        onChangeText={(email) => this.setState({ email })}
                                    />



                                    <View style={{ flexDirection: 'column', width: "100%", justifyContent: "center", marginLeft: 20, marginRight: 20,marginTop:50 }}>
                                        <FlyButton onPress={() => this._handleSubmit()} title={this.state.isLoading ? 'Confirming..' : 'Change password'} />
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
