import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
const GlobalButton = ({placeholder}: any) => {
  return (
    <View>
      <Pressable>
        <TextInput />
      </Pressable>
    </View>
  );
};

export default GlobalButton;
