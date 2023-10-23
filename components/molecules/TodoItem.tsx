import React from 'react';
import {View, Text} from 'react-native';
import MenuDisplay from '../atoms/MenuDisplay';
const TodoItem = ({id, title, description}: any) => {
  return (
    <View>
      <View className="flex-row justify-center items-center border-2 w-[80vw] p-2 bg-slate-200 rounded-lg m-2">
        <Text className="flex-1 text-lg">{title}</Text>

        <MenuDisplay id={id} showMenuText=" ⋮ " />
      </View>
    </View>
  );
};

export default TodoItem;
