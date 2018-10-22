import React  from 'react';
import { StyleSheet, Button, TouchableHighlight } from 'react-native';

export default class CaptureButton extends React.Component {
    render() {
        return (
            <TouchableHighlight style={styles.captureButton} >
            <Button onPress={this.props.onClick}  title="Capture" accessibilityLabel="Take picture"/>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    captureButton: {
        marginBottom:30,
        width:160,
        borderRadius:10,
        backgroundColor: "white",
    }
 });