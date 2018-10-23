

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
    const issfield = "cardreader7@totemic-ground-219514.iam.gserviceaccount.com";
    const scopefield = 'https://www.googleapis.com/auth/cloud-platform';
    const audfield = 'https://www.googleapis.com/oauth2/v4/token';
    const dateTime = Date.now();
    const iatField = String(Math.floor(dateTime/1000));
    const expField = String(Math.floor(dateTime/1000) + 3600);
    var jwt = require('react-native-jwt');
    const payload = {
      iss: issfield,
      scope: scopefield,
      aud: audfield,
      exp: expField,
      iat: iatField
    }
    const secret = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC9J2LP3kPixNxw\ngeFwAW+T7IsUueXBheKvqp89jQFqTYpZOgwvM4Dru/2Wb1VI8XvOFj9IoNvJLd/T\nKNixoPu+yKZG9G+R8NyZIDjJO5bi+ulZI8GpCW9+YlLIN/MTOevUJ5bgrZZe2keI\nZLbwBgm+JyoIVMAnUW7LnX7lZeUPPKGCVeUPZCWrM3YGNPnPa4QQinzmtWZd/6pz\n2caBnhC9dqOlVLQsCK2o/2fnfrTWD67X/TTkc2reOOWppWo3fMDcnsZnDZqNQ9i5\nCgPYMc0nE/zdjM1rshnqklebu6sgt8lBnHqfGqz1WJyAiYgb5TSks3yCMZFSt6ff\nECbF46j/AgMBAAECggEAHdO9ICbeBj9MEi2uPTmXZ6MQQhds+c7r8mQcXNoEVB1K\nvfaKVKhxduVw/9d/LP5vVbhqXZXdXTmaUYjftWWQ7QJk6KFuNSbfEle4vKVkjgGf\nlEqFekCeT+FJ89U8GQG0L1iC0TEY73d0z4wve2U9r2TWRZ6095OUE2WQIgpRoXeE\ni5welgL2ioSp26vu+ZriyPoRLtCVdDr6N10TlB3GnICJ5iwLNUEBMOMvEaActff+\nwMJeze2O+LpV8y1DVqVM7sX1810onv0+3GURY5hqGQYd9mvX3uBc198sTYfWHmU3\neLsNeQelmWbHRIuC06dlxybDvfiEApevRbNf6WRRAQKBgQD4D68aVcEPraZe/9qh\nRPO3JNUq+MhcEExtMtrcWOLKjjSD6jpzLYMVlRefbAMiYInB/fMPHHbBIONEb1Qj\nsvZ6+h7AoQr7794Mkg7zOeKU4QKvU0H6Z8WnuclWqmatA07HrOmLW+aYqZb1YI0k\n26ZNsr0R6G6mgoLXRxjDU2jbgQKBgQDDNRXdIJmNNIXfPRqPGY2l1ZDikQu1lqzp\nUY+TPQTk+SLvQFn5WuYcR3zNlw63bMLe5yyEUcqvLqqFwF5w+HUK0ZeDV4iYFoKg\nlmwrh2aBMOYeI2+zxtr47UPeEkRL//syM3CueVXJT3zWMyosXF9meSlus+n9uEJx\nUeujxNDEfwKBgQCF6lGpceoLwL80QgORVFwN3wCFdlEUAmh/+xhUJFgq6aJIJMbx\nLvy5Rge+tNzsThmQdLwmyEMD9/E5HLDbpN2Tfjvj2gzH/bJuLtuLSxCbNu3wII5Z\n1HPMHGwpMUzE0ihRe3OJHE/c0pEAXuNTppCdGYUgic5SbdqcxXEE4Z6WAQKBgEom\n3TJNkua3v+7IKFGZlFwdX1chYABPx0kuCUsWD8jm9qVJnaQCKo0tfrQeIKH+t5uy\n1w9AfqzDHlWGeJmTV+qPKW3kD2gujNpxqY9zdLW4nIFwVptE+6M5heFSsQzppUMx\nlSlBwBujjTlU4D1PrZGgjuOVhlox51Nimg9w0RkDAoGAIlAWYoaurk5klIabjoVt\nUnSs8GO3h1YF3TnnkXNeV39V9cLETfJgFy1nRdEDzL2aOXZPeObyY2r1CEByERv7\n3WOy1MXAPiazluZz2LHYjmZzXtIstFmPahbbsk10YiqHN/ji6XepzyXXu//vw3/m\nZkQZ6gyPaTJG4KkaFetUyTM=\n-----END PRIVATE KEY-----\n";
    const assertion = jwt.encode(payload, secret, 'RS256');

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



