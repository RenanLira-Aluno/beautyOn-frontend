
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import {NavigationContainer} from '@react-navigation/native'
import { Routes } from './src/routes';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  

  return (
    <NavigationContainer>
      <Routes />
      <StatusBar translucent backgroundColor={`transparent`}/>
    </NavigationContainer>
  );
}



export default App;
