import React from 'react';
import { Text, View } from 'react-native';

//baby sleeper details is a presentation of a component
//so in this js class is functional base component we dont need to use
//class base component or lifecycle methods
//when we use const then it is a functional component

const BabySleeperDetail = (props) => {
  return (
    <View>
      <Text>{props.data.title}</Text>
      </View>
  );
};

export default BabySleeperDetail;
