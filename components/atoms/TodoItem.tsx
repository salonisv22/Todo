import React from 'react';
import {View, Text, Pressable} from 'react-native';

const TodoItem = ({text}: any) => {
  console.log('inside TodoItem' + text);
  return (
    <View className="flex-row justify-center items-center border-2 w-[80vw] p-2 bg-slate-200 rounded-lg m-2">
      <Text className="flex-1 text-lg">{text}</Text>
      <Pressable>
        <Text className="text-xl">⋮</Text>
      </Pressable>
    </View>
  );
};

export default TodoItem;
