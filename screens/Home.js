import React from 'react';
import {StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import logo from '../assets/logo.png'

const Home = ({navigation})=>{
    function navCam() {navigation.navigate('camera')};
    function navMan() {navigation.navigate('manage')};

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navCam} style={styles.itemView}>
                <MaterialCommunityIcons name="camera" color="white" size={50} />
                <Text style={{color:'white', marginTop:10}}>Theo dõi Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navMan} style={styles.itemView}>
                <MaterialCommunityIcons name="folder" color="white" size={50} />
                <Text style={{color:'white', marginTop:10}}>Quản lý</Text>
            </TouchableOpacity>
            <View style={styles.itemView}>
                <MaterialCommunityIcons name="account-check" color="white" size={50} />
                <Text style={{color:'white', marginTop:10}}>Điểm danh</Text>
            </View>
            <View style={styles.itemView}>
                <MaterialCommunityIcons name="account-clock" color="white" size={50} />
                <Text style={{color:'white', marginTop:10}}>Chấm công</Text>
            </View>
            <View style={styles.itemView}>
                <MaterialCommunityIcons name="face-recognition" color="white" size={50} />
                <Text style={{color:'white', marginTop:10}}>Dữ liệu</Text>
            </View>
            <View style={styles.itemView}>
                <MaterialCommunityIcons name="chart-bar" color="white" size={50} />
                <Text style={{color:'white', marginTop:10}}>Thống kê</Text>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      flexWrap: 'wrap',
      paddingTop: 30
    },

    itemView: {
        width: '40%',
        aspectRatio:1,
        margin: 10,
        backgroundColor: '#8340bd',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

});