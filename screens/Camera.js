import React from 'react';
import {StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity} from 'react-native';
import logo from '../assets/logo.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Camera = ()=>{
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.itemView}>
                <Icon name="camera" color="white" size={50} />
                <Text style={{color:'white', marginTop:10}}>Theo dõi Camera</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Camera

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#8340bd',
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