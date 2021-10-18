import React from 'react';
import {StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import logo from '../assets/logo.png'
import BottomNav from './BottomNav'
import myDrawer from './Drawer'
import Home from './Home';

const Drawer = createDrawerNavigator();

function TEST() {
    return (
      <View>
        <Text>HELOOOOO</Text>
      </View>
    );
  }
  
export default function MainPage() {
    return (
        <Drawer.Navigator>
          <Drawer.Screen name="homePage" component={BottomNav} options={{
            title: "VinaAI", 
          }} />
          <Drawer.Screen name="test1" component={TEST} options={{
            title: "Test1",
          }} />
          <Drawer.Screen name="test2" component={TEST} options={{
            title: "Test2",
          }} />
          <Drawer.Screen name="test3" component={TEST} options={{
            title: "Test3",
          }} />
          <Drawer.Screen name="test4" component={TEST} options={{
            title: "Test4",
          }} />
          <Drawer.Screen name="test5" component={TEST} options={{
            title: "Test5",
          }} />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
});