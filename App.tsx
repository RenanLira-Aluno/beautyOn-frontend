
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes';
import { AuthProvider } from './src/contexts/Auth.context';
import {decode, encode} from 'base-64'
import Geolocation from '@react-native-community/geolocation';



if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';



  return (
    <NavigationContainer onReady={() => {
      Geolocation.setRNConfiguration({authorizationLevel: 'whenInUse', skipPermissionRequests: false})
    }}>
      <AuthProvider>
        <Routes />
        <StatusBar translucent backgroundColor={`transparent`} />
      </AuthProvider>
    </NavigationContainer>
  );
}



export default App;
