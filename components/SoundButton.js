import { Audio } from 'expo';
import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';

const source = {
   uri: 'https://freesound.org/data/previews/413/413854_4337854-hq.mp3',
};


export default class SoundButton extends Component {
  state = {
   playingStatus: true,
   buttonText: 'Stop'
 };
 componentDidMount() {
   // this._playRecording();
 }

 _onPressButton() {
  Alert.alert('You tapped the button!');
}

 async _playRecording() {
   const { sound } = await Audio.Sound.createAsync(
     source,
     {
       shouldPlay: true,
       isLooping: true,
     },
   );
   this.sound = sound;
 }
  async _pauseAndPlayRecording() {
    if (this.sound != null) {
      if (this.state.playingStatus) {
        await this.sound.pauseAsync();
        this.setState({
          playingStatus: false,
          buttonText: 'Start'
        });
        await this.sound.playAsync();
      } else {
        this.setState({
          playingStatus: true,
          buttonText: 'Stop'
        });
      }
    }
  }

  _playAndPause = () => {
    this._pauseAndPlayRecording();

  }

  render() {
    const { image } = this.props;

    return (
      <TouchableOpacity onPress={this._playAndPause}>
        <Image
        resizeMode='contain'
        source={image}
        style={styles.imageStyle}
        />

      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
 container: {
   paddingTop: 50,
   flex: 1,
   flexDirection: 'row',
   // justifyContent: 'flex-end',
   // alignItems: 'flex-end',
   backgroundColor: 'white',
 },

 imageStyle: {
   padding: 10,
   margin: 5,
   flexDirection: 'row',
   justifyContent: 'space-between',
   width: 75,
   height: 75,
   backgroundColor: '#ffffff',
   marginHorizontal: 10,
 },
 button: {
  height: 100,
  borderColor: '#48BBEC',
  backgroundColor: '#48BBEC',
  marginLeft: 10,
  width: 100,
  justifyContent: 'center',
},
buttonText: {
  fontSize: 18,
  color: 'black',
  alignSelf: 'center',
}
});
