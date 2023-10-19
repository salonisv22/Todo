import React from 'react';
import {View, Text, Pressable} from 'react-native';

const Headers = () => {
  return (
    <View className="p-2 flex-row">
      <View className="">
        <Pressable>
          <Text className="text-2xl">≡</Text>
        </Pressable>
      </View>
      <View className=" flex-1">
        <Text className="text-xl text-center">Todocount:</Text>
      </View>
    </View>
  );
};

export default Headers;
