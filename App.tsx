
import React from 'react';
import type { PropsWithChildren } from 'react';
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

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';



  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
        <StatusBar translucent backgroundColor={`transparent`} />
      </AuthProvider>
    </NavigationContainer>
  );
}



export default App;
