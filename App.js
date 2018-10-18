/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, Dimensions, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
//import RNFetchBlob from 'rn-fetch-blob'
import Camera from 'react-native-camera';

const options = {
  title: 'Select a photo',
  takePhotoButtonTitle: 'Take a photo',
  chooseFromLibraryButtonTitle: 'Choose from gallery',
  quality: 1,
};

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      imageSource: null,
      data: null,
    }

  }
  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
  selectPhoto() {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        let source = { uri: response.uri };

        this.setState({
          imageSource: source,
          data: response.data,
        });
      }
    });
  }

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
      <View style={StyleSheet.container}>
        <Image style={styles.image}
          source={this.state.imageSource != null ? this.state.imageSource :
            require('./images/Nikitty.jpg')}
        />
        <TouchableOpacity style={styles.button} onPress={this.selectPhoto.bind(this)}>
          <Text style={styles.text}>Select</Text>
        </TouchableOpacity>
        <Camera
          ref={cam => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}> [CAPTURE] </Text>
        </Camera>
        
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A0A0A0',
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: '#330066',
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 15,
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  image: {
    width: 200,
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



