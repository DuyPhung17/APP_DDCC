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
            <View style={styles.topView}>
                <Image style={styles.logo} source={logo}/>
            </View>
            <View style={styles.botView}>
                <Text style={styles.title}>- Đăng Nhập -</Text>
                <View style={styles.form}>
                    <TextInput style={styles.input} placeholder={"Tên đăng nhập"} placeholderTextColor={"#8340bd"}/>
                    <TextInput style={styles.input} placeholder={"Mật khẩu"} placeholderTextColor={"#8340bd"} secureTextEntry={true}/>
                    <TouchableOpacity style={styles.button} onPress={navHome}>
                        <Text style={styles.buttonText}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={navigate}>
                    <Text style={styles.registerText}>Tạo tài khoản</Text>
                </TouchableOpacity>
            </View>
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
    
    topView: {
        width: '100%',
        height: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    botView: {
        width: '100%',
        height: '60%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    logo: {
        height: '60%',
        resizeMode: 'contain'
    },

    title: {
      fontSize: 30,
      marginBottom: 20,
      color: '#8340bd',
      fontWeight: 'bold',
      alignSelf: 'center',
    },
    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    input: {
        width: '80%',
        height: 55,
        borderWidth: 1,
        borderColor: '#8340bd',
        borderRadius: 13,
        marginTop: 20,
        paddingLeft: 20,
        color: 'white',
        fontSize: 17,
    },

    button:{
        width: '80%',
        height: 50,
        backgroundColor: '#8340bd',
        borderRadius: 13,
        marginTop: 20,
        marginBottom:20,
        alignItems: 'center',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'
    },

    buttonText:{
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    },

    registerText:{
        fontSize: 17,
        fontWeight: 'bold',
        color: '#8340bd',
    }

  });