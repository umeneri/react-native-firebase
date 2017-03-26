'use strict';

import React, { Component } from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js');
const constants = styles.constants;
const { StyleSheet, Text, View, TouchableHighlight} = ReactNative;

class StatusBar extends Component {
  render() {
    return (
      <View>
        <View style={styles.statusbar}/>
          <View style={styles.navbar}>
            <Text style={styles.navbarTitle}>{this.props.title}</Text>
          </View>
        </View>
    );
  }
}

module.exports = StatusBar;
