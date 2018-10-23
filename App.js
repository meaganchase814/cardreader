

import React, { Component } from 'react';
import {AppRegistry, View, StyleSheet, } from 'react-native';
import Camera from './components/Camera.js';




export default class App extends React.Component {

	constructor(props){
		super(props);
		process.nextTick = setImmediate;
	}

  



  render() {
    return (
      <View style={styles.container} accessible={true} >
       
        <Camera/>
        
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff00',
  },
  
})
AppRegistry.registerComponent('cardreader',() => cardreader);



