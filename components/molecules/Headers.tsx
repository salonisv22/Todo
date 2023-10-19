import React from 'react';
import {View, Text, Pressable} from 'react-native';

type props = {
  onPress: () => void;
  text: string;
};

const Headers = ({onPress, text}: props) => {
  return (
    <View className="p-2 flex-row">
      <View className="">
        <Pressable onPress={onPress}>
          <Text className="text-2xl">{text}</Text>
        </Pressable>
      </View>
      <View className=" flex-1">
        <Text className="text-xl text-center">Todocount:</Text>
      </View>
    </View>
  );
};

export default Headers;
