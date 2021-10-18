import React from 'react';
import {StyleSheet, View, Button, Image, TextInput, TouchableOpacity} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from './Home'

const Tab = createMaterialBottomTabNavigator();

function TEST() {
  return (
    <View>
      <Text>HELOOOOO</Text>
    </View>
  );
}

function BottomNav() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="white"
      barStyle={{ backgroundColor: '#8340bd' }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="notify"
        component={TEST}
        options={{
          tabBarLabel: 'Thông báo',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={TEST}
        options={{
          tabBarLabel: 'Tài khoản',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="setting"
        component={TEST}
        options={{
          tabBarLabel: 'Cài đặt',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNav

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#8340bd',
    }
});