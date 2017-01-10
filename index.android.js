/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

import Toggle from './Toggle'

export default class FeInn extends Component {
  state = {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  }
  render() {
    const {flexDirection,justifyContent,alignItems} = this.state
    const layoutStyle = {flexDirection,justifyContent,alignItems}
    const primaryAxis = flexDirection === 'row' ? 'Horizontal' : 'Vertical'
    const secondaryAxis = flexDirection === 'row' ? 'Vertical' : 'Horizontal'
    return (
      <ScrollView style={styles.container}>
        <ScrollView horizontal>
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
        </ScrollView>
        <View style={styles.boxLarge} />
        <View style={styles.boxSmall} />
        <View style={styles.boxLarge} />
        <View>
          <Image style={styles.image} source={{uri: 'http://www.reactnativeexpress.com/logo.png'}}/>
          <Toggle
            label={'Primary axis (flexDirection)'}
            value={flexDirection}
            options={['row', 'column']}
            onChange={(option) => this.setState({flexDirection: option})}
          />
          <Toggle
            label={primaryAxis + ' distribution (justifyContent)'}
            value={justifyContent}
            options={['flex-start', 'center', 'flex-end', 'space-around', 'space-between']}
            onChange={(option) => this.setState({justifyContent: option})}
          />
          <Toggle
            label={secondaryAxis + ' alignment (alignItems)'}
            value={alignItems}
            options={['flex-start', 'center', 'flex-end', 'stretch']}
            onChange={(option) => this.setState({alignItems: option})}
          />
          <View style={[styles.layout, layoutStyle]}>
            <View style={styles.box} />
            <View style={styles.box} />
            <View style={styles.box} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  box: {
    padding: 25,
    backgroundColor: 'steelblue',
    margin: 5,
  },
  image:{
    width:200,
    height:200,
  },
  boxSmall: {
    width: 100,
    height: 100,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
  boxLarge: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'steelblue',
  },
})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('FeInn', () => FeInn);
