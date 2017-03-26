/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, { Component } from 'react';
import ReactNative from 'react-native';
import MessengerContainer from './components/MessengerContainer'

const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = ReactNative;

class GroceryApp extends Component {
  render() {
    return (
      <MessengerContainer/>
    );
  }
}
AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
