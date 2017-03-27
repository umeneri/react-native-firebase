/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, { Component } from 'react';
import ReactNative from 'react-native';
import TodoContainer from './components/MessengerContainer'
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
      <TodoContainer/>
    );
  }
}
AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
