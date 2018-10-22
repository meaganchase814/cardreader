/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, Dimensions, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
//import ImagePicker from 'react-native-image-picker';
//import RNFetchBlob from 'rn-fetch-blob'
//import Camera from 'react-native-camera';
import Camera from './components/Camera.js';

// const options = {
//   title: 'Select a photo',
//   takePhotoButtonTitle: 'Take a photo',
//   chooseFromLibraryButtonTitle: 'Choose from gallery',
//   quality: 1,
// };


export default class Form extends Component {
  constructor(props) {
    super(props)
    process.nextTick = setImmediate,
    this.state = {
      imageSource: null,
      data: null,
      
       
    }

  }


  // takePicture() {
  //   this.camera.capture()
  //     .then((data) => console.log(data))
  //     .catch(err => console.error(err));
  // }
  // selectPhoto() {
  //   ImagePicker.showImagePicker(options, (response) => {
  //     console.log('Response = ', response);

  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     } else {
  //       let source = { uri: response.uri };

  //       this.setState({
  //         imageSource: source,
  //         data: response.data,
  //       });
  //     }
  //   });
  // }

  // uploadPhoto() {
  //   RNFetchBlob.fetch('POST', 'http://www.example.com/upload-form', {
  //     Authorization: "Bearer access-token",
  //     otherHeader: "foo",
  //     'Content-Type': 'multipart/form-data',
  //   }, [
  //       { name: 'image', filename: 'image.jpg', type: 'image/jpg', data: this.state.data },

  //     ]).then((resp) => {
  //       // ...
  //     }).catch((err) => {
  //       // ...
  //     })
  // }
  render() {
    return (
      <View style={styles.container} accessible={true} >
        {/* <TouchableOpacity accessible={true} acessibilityLabel="Card Whisperer" accessibilityHint="Card Whisperer" >
        <Image style={styles.image}
          source={this.state.imageSource != null ? this.state.imageSource :
            require('./images/card_whisperer_logo2.jpg')}
        /></TouchableOpacity>
        <TouchableOpacity  style={styles.button} onPress={this.selectPhoto.bind(this)}>
          <Text accessible={true}
      acessibilityLabel="Select" accessibilityHint="Tap to start Card Whisperer" style={styles.text}>Select</Text>
        </TouchableOpacity> */}
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
  button: {
    flex: 1,
    width: 400,
    height: 250,
    backgroundColor: '#000000',
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 15,
   
    
  },
  text: {
    color: 'white',
    fontSize: 100,
    textAlign: 'center',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    height: 200,
    marginTop: 30,
    
    
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
})
AppRegistry.registerComponent('cardreader',() => cardreader);



