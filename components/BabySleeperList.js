import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AudioPlayer from './AudioPlayer';

export default class BabySleeperList extends Component {
  constructor(props) {
    super(props)
    this.onStateChange = this.onStateChange.bind(this)
  }

   onStateChange(newState) {
     const value = newState ? 'ON' : 'OFF';
     this.setState({ toogleText: value })
   }

 render() {
   return (

     <View style={styles.container}>
     <Text h1>Relaxing Sounds</Text>
      <View style={{ width: 400, height: 50, flex: 1, backgroundColor: 'pink', flexDirection: 'row', justifyContent: 'center' }}>
         <AudioPlayer image={require('../../assets/images/vacuum-cleaner.png')} source={require('/home/rabia/reactnativeprojeler/AppYeni/babySleeper/assets/sounds/vacuumsound.mp3')} />
         <AudioPlayer image={require('../../assets/images/clef.png' )} source={require('/home/rabia/reactnativeprojeler/AppYeni/babySleeper/assets/sounds/meditation_piano.mp3')} />
         <AudioPlayer image={require('../../assets/images/dove.png' )} source={require('/home/rabia/reactnativeprojeler/AppYeni/babySleeper/assets/sounds/forest_birds.mp3')} />
         <AudioPlayer image={require('../../assets/images/car.png')} source={require('/home/rabia/reactnativeprojeler/AppYeni/babySleeper/assets/sounds/city_traffic.mp3')}/>
      </View>
      <View style={{ width: 400, height: 50, flex: 1, backgroundColor: 'pink', flexDirection: 'row', justifyContent: 'center' }}>
         <AudioPlayer image={require('../../assets/images/forest.png')} source={require('/home/rabia/reactnativeprojeler/AppYeni/babySleeper/assets/sounds/forest_forest.mp3')}/>
         <AudioPlayer image={require('../../assets/images/hair-dryer.png')} source={require('/home/rabia/reactnativeprojeler/AppYeni/babySleeper/assets/sounds/hairdryersound.mp3')} />
         <AudioPlayer image={require('../../assets/images/washing-machine.png')} source={require('/home/rabia/reactnativeprojeler/AppYeni/babySleeper/assets/sounds/washingmachinesound.mp3')} />
         <AudioPlayer image={require('../../assets/images/coffee-cup.png')} source={require('/home/rabia/reactnativeprojeler/AppYeni/babySleeper/assets/sounds/city_restaurant.mp3')} />
      </View>
      <View style={{ width: 400, height: 50, flex: 1, backgroundColor: 'pink', flexDirection: 'row', justifyContent: 'center' }}>
         <AudioPlayer image={require('../../assets/images/wave.png')} source={require('/home/rabia/reactnativeprojeler/AppYeni/babySleeper/assets/sounds/rain_ocean.mp3')}/>
         <AudioPlayer image={require('../../assets/images/waterfall.png')}source={require('/home/rabia/reactnativeprojeler/AppYeni/babySleeper/assets/sounds/forest_waterfall.mp3')}/>
         <AudioPlayer image={require('../../assets/images/rain.png')} source={require('/home/rabia/reactnativeprojeler/AppYeni/babySleeper/assets/sounds/rain_normal.mp3')}/>
         <AudioPlayer image={require('../../assets/images/train.png')} source={require('/home/rabia/reactnativeprojeler/AppYeni/babySleeper/assets/sounds/city_subway.mp3')}/>
      </View>
    </View>

   );
 }
}

const styles = StyleSheet.create({
 container: {
   paddingTop: 150,
   flex: 1,
   justifyContent: 'center',
   // alignItems: 'flex-end',
   backgroundColor: 'white',
 },

 imageStyle: {
   padding: 25,
   margin: 5,
   flexDirection: 'row',
   justifyContent: 'space-between',
   width: 75,
   height: 75,
   backgroundColor: 'red',
 },
});
