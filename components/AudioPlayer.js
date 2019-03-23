import React, { Component } from 'react';
import { View, TouchableOpacity, Alert, StyleSheet, Image, Slider } from 'react-native';
import { Audio } from 'expo';

export default class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { isPlaying: false, show: false, sliderValue: 50 };
    this.loadAudio = this.loadAudio.bind(this);
    this.toggleAudioPlayback = this.toggleAudioPlayback.bind(this);
  }

  componentDidMount() {
    this.loadAudio();
  }

  componentWillUnmount() {
    this.soundObject.stopAsync();
  }

  async loadAudio() {
    this.soundObject = new Audio.Sound();
    try {
      await this.soundObject.loadAsync(this.props.source);
      this.soundObject.setIsLoopingAsync(1);
    } catch (e) {
      console.log('ERROR Loading Audio', e);
    }
  }

   toggleAudioPlayback() {
    this.setState({ isPlaying: !this.state.isPlaying, }, () => (this.state.isPlaying
      ? this.playAsync()
      : this.stopAsync()));
  }
  playAsync() {
    this.soundObject.playAsync()
    this.setState({ show: true })
  }
  stopAsync() {
    this.soundObject.stopAsync()
    this.setState({ show: false })
  }

  sliderValueHasChanged(val) {
    this.soundObject.setVolumeAsync(val / 100);
  }

  render() {
    const { image } = this.props;
    return (
      <View>
        <TouchableOpacity onPress={this.toggleAudioPlayback}>
          <Image
            resizeMode='contain'
            source={image}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
          {this.state.show &&
              <Slider
                 step={1}
                 minimumValue={0}
                 maximumValue={100}
                 minimumTrackTintColor="#009688"
                 value={this.state.sliderValue}
                 onValueChange={(ChangedValue) => this.setState({ sliderValue: ChangedValue })}
                 onSlidingComplete={eventValue => this.sliderValueHasChanged(eventValue)}
                 style={{ width: '100%' }}
              />
            }
      </View>
    );
  }
}

const styles = StyleSheet.create({
imageStyle: {
  paddingTop: 10,
  paddingBottom: 20,
  margin: 50,
  flexDirection: 'row',

  width: 40,
  height: 40,
  backgroundColor: '#ffffff',
  marginHorizontal: 10,
},
});
