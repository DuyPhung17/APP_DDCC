import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, Button, IconButton } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './screens/Login'
import Register from './screens/Register'
import MainPage from './screens/MainPage';
import Camera from './screens/Camera';
import Manage from './screens/Manage';

const Stack = createNativeStackNavigator();

export default function App(navigation) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name='register' component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name='mainPage' component={MainPage} options={{ headerShown: false }}/>
        <Stack.Screen name='camera' component={Camera}/>
        <Stack.Screen name='manage' component={Manage}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
