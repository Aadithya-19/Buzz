import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TransactionScreen from './screens/inst';
import SearchScreen from './screens/fb';

import {createAppContainer} from 'react-navigation';

import {createBottomTabNavigator} from 'react-navigation-tab';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
      );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook:{screen : Facebook},
  Instagram: {screen: Instagram}
})

const AppContainer = createAppContainer(TabNavigator);
