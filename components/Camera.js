
import React from 'react';
import { Text, Dimensions, Alert, StyleSheet, ActivityIndicator } from 'react-native';
import { RNCamera } from 'react-native-camera';
import CaptureButton from './CaptureButton.js'

export default class Camera extends React.Component {

   constructor(props){
       super(props);
       this.state = {
           identifiedAs: '',
           loading: false,
       }
   }

   takePicture = async function(){

       if (this.camera) {
            console.log("this is where we are")
           // Pause the camera's preview
           this.camera.pausePreview();

           // Set the activity indicator
           this.setState((previousState, props) => ({
               loading: true
           }));

           // Set options
           const options = {
               base64: true
           };
           
            console.log("about to take picture")
           // Get the base64 version of the image
           const data = await this.camera.takePictureAsync(options)
           console.log("took picture async")
           // Get the identified image
           
           this.identifyImage(data.base64);
       }
   }

   identifyImage(imageData){
    console.log("this is the identify part")
       // Initialise Clarifai api
       const Clarifai = require('clarifai');

       const app = new Clarifai.App({
           apiKey: '3e6679b029c0487da7c3c9bb8fd84eab'
       });

       // Identify the image
       app.models.predict(Clarifai.GENERAL_MODEL, {base64: imageData})
       .then((response) => this.displayAnswer(response.outputs[0].data.concepts[0].name)
       .catch((err) => alert(err))
       );
   }

   displayAnswer(identifiedImage){

       // Dismiss the acitivty indicator
       this.setState((prevState, props) => ({
           identifiedAs:identifiedImage,
           loading:false
       }));

   // Show an alert with the answer on
        Alert.alert(
           this.state.identifiedAs,
           '',
           { cancelable: false }
       )

       // Resume the preview
       this.camera.resumePreview();
   }

   render() {
       return (
           <RNCamera ref={ref => {this.camera = ref;}} style={styles.preview} accessible={true}>
           <ActivityIndicator size="large" style={styles.loadingIndicator} color="#fff" animating={this.state.loading}/>
           <CaptureButton buttonDisabled={this.state.loading} onClick={this.takePicture.bind(this)} accessible={true}/>
           </RNCamera>
       );
   }
}

const styles = StyleSheet.create({
   preview: {
       flex: 1,
       justifyContent: 'flex-end',
       alignItems: 'center',
       height: Dimensions.get('window').height,
       width: Dimensions.get('window').width,
   },
   loadingIndicator: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
   }
});