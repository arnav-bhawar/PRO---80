import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ExchangeScreen from './screens/ExchangeScreen';
import SettingsScreen from './screens/SettingsScreen';
import CreateDrawerNavigator from react-navigation-drawer 

export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigation = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator}
})

const AppContainer = createAppContainer(switchNavigator);

