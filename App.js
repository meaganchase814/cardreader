

import React, { Component } from 'react';
import {AppRegistry, View, StyleSheet, } from 'react-native';
import Camera from './components/Camera.js';




export default class App extends React.Component {

	constructor(props){
		super(props);
    process.nextTick = setImmediate;
    this.state = {
      bearerToken: [],
    }
    this.getJWTToken=this.getJWTToken.bind(this);
	}
  getJWTToken() {
    const assertion = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJjYXJkcmVhZGVyN0B0b3RlbWljLWdyb3VuZC0yMTk1MTQuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2xvdWQtcGxhdGZvcm0iLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOiIxNTQwMzI2MzQyIiwiaWF0IjoiMTU0MDMyMjc0MiJ9.ln3E61uywHhpvFyeZ7mpMODez6_oq_QPX-YzpzaHGZFpWe8mlPGrKWp0E0j9dqtmTzwvWAVTt2F-D0z-t4PWxnho6Dnba60psr6Uhrp52Hl8yxI-2x_zwcZ5YeZeZ7-Cdegx87qMY8SFdPSnUmLkCLzrq7N2BEoKdOqVcw8M4RnqYsXmQMF_NhoGt3BJ3fJnUq2sEpnkNslJXmHEkoyo9LY5TtUN6zYJ7uCqIBZ0I9dpbBFRMeLrEcXIqxG1TjmoYnyEY0Veo_1zn0TqbmSjwspIO3NEC2PkJw4LQ0fT6VIrnzMiTbBy69_6Fp8pb8XGYN2WBY7gA7rd5kP6FgpxTA`

    axios({
      method: 'post',
      url: "https://www.googleapis.com/oauth2/v4/token",
      data: {
        "grant_type" : "urn:ietf:params:oauth:grant-type:jwt-bearer",
        "assertion": assertion
      }
    })
      .then((response) => {
        this.setState({bearerToken: response.data});      
    })
  }


  render() {
    return (
      <View style={styles.container} accessible={true} >
       
        <Camera
        bearerToken={this.state.bearerToken}/>
        
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



