import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, Button, IconButton } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Login from './screens/Login'
import Register from './screens/Register'
import BottomNav from './screens/BottomNav'

const LoginStack = createNativeStackNavigator();
const RegisterStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const LoginScreen = ({navigation})=>{
  <LoginStack.Navigator>
    <LoginStack.Screen name="login" component={{Login}} options={{
      headerLeft: ()=>(
        <MaterialCommunityIcons name="menu" color={color} size={26} 
        onPress = {()=> navigation.openDrawer()}/>
      )}}/>
  </LoginStack.Navigator>
};

const RegisterScreen = ({navigation})=>{
  <RegisterStack.Navigator screenOptions={{
    headerStyle: {backgroundColor: '#8340bd',},
    headerTintColor: '#fff',
  }}>
    <RegisterStack.Screen name="register" component={{Register}}/>
  </RegisterStack.Navigator>
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="login">
        <Drawer.Screen name="login" component={Login} />
        <Drawer.Screen name="register" component={Register} />
        <Drawer.Screen name="bottomNav" component={BottomNav} />
      </Drawer.Navigator>
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
