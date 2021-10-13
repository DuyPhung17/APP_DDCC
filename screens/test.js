import React from 'react';
import {StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity} from 'react-native';
import logo from '../assets/logo.png'

const Login = ({navigation})=>{
    function navigate() {
        navigation.navigate('register')
    };
    function navHome() {
        navigation.navigate('bottomNav')
    }

    return (
        <View style={styles.container}>
            <Text>TEST PAGE !</Text>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#8340bd',
    },
});