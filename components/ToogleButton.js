import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';


export default class ToogleButton extends Component {
  state = {
    toogle: false
  }

  _onPress() {
    const newState = !this.state.toogle;
    this.setState({ toggle: newState });
    this.props.onStateChange(newState);
  }
   render() {
     const { toogle } = this.state;
     const textValue = toogle ? 'ON' : 'OFF';
     const buttonBg = toogle ? 'dodgerblue' : 'white';
     const textColor = toogle ? 'white' : 'black';
     return (
       <View style={styles.container}>
       <View style={{ flexDirection: 'row' }}>
       <TouchableOpacity
       onPress={() => this._onPress()}
       style={{ margin: 10, flex: 1, height: 60, backgroundcolor: buttonBg, justifyContent: 'center', borderColor: 'dodgerblue', borderWidth: 2 }}>
       <Text style={{ color: textColor, textAlign: 'center', fontSize: 16 }}> {textValue} </Text>
       </TouchableOpacity>
       </View>
       </View>
     );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    alignItems: 'center',

  }
});
