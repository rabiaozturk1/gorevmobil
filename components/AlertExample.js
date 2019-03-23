import React, { Component } from 'react';
import { Alert, View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default class AlertExample extends Component {
   showAlert() {
      Alert.alert (
         'You need to...'
      );
   }
   render() {
   return (
     <View style={styles.container}>
     <TouchableOpacity onPress={this.showAlert} style={styles.button}>
        <Text style={styles.text} >5</Text>
     </TouchableOpacity>
      </View>

    );
}
}

const styles = StyleSheet.create ({
   button: {
      backgroundColor: 'lightblue',
      width: 50,
      height: 50,
      borderRadius: 50,
      alignItems: 'center',
      marginTop: 70,
   }
});
