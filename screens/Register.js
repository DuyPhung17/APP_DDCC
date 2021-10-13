import React from 'react';
import {StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import BackIcon from 'react-native-vector-icons/Feather';
import logo from '../assets/logo.png'

const Register = ({navigation})=>{
    function navigate() {
        navigation.navigate('login');
    }
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Image style={styles.logo} source={logo}/>
            </View>
            <View style={styles.botView}>
                <Text style={styles.title}>- Tạo Tài Khoản -</Text>
                <View style={styles.form}>
                    <TextInput style={styles.input} placeholder={"Tên đăng nhập"} placeholderTextColor={"#8340bd"}/>
                    <TextInput style={styles.input} placeholder={"Mật khẩu"} placeholderTextColor={"#8340bd"} secureTextEntry={true}/>
                    <TextInput style={styles.input} placeholder={"Nhập lại mật khẩu"} placeholderTextColor={"#8340bd"} secureTextEntry={true}/>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={navigate}>
                    <Text style={styles.registerText}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Register

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
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    botView: {
        width: '100%',
        height: '70%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    logo: {
        height: '50%',
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
        color: '#8340bd',
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
        color: 'white',
    },

    registerText:{
        fontSize: 17,
        fontWeight: 'bold',
        color: '#8340bd'
    }

});