import React from 'react'
import {Text, View, TouchableOpacity, Image, Modal, SafeAreaView, StatusBar} from 'react-native'
import styles from '../../../assets/css/style'
import Entypo from 'react-native-vector-icons/Entypo'


export default class ImageViewer extends React.Component {


    render() {

        return (
            <SafeAreaView>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.isShowModal}
                    onRequestClose={() => {
                        this.props.onClose(false)
                    }}>
                    <TouchableOpacity style={{position:'absolute',top:30,right:10,zIndex:1,}} 
                            onPress={() => this.props.onClose(false)}>
                        <Text> <Entypo name="cross" size={40} style={{color:'#000'}} /></Text>
                    </TouchableOpacity>
                    <View style={[styles.chatpopupcontainer,]}>
                        <StatusBar hidden={true} />
                            <Image source={{uri:this.props.imageUrl}}
                                resizeMode="contain"
                                style={styles.canvas}
                            />
                    </View>
                </Modal>
            </SafeAreaView>
        )

    }
}
