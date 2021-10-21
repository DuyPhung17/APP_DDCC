import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, Picker} from 'react-native'; 
import logo from '../assets/logo.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownPicker from 'react-native-dropdown-picker';

const Manage = ()=>{
    return (
        <View style={styles.container}>
            <View style={styles.controlView} >
                <Text>HElo</Text>
            </View>
        </View>
    )
}

export default Manage

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#fff',
    },  
});