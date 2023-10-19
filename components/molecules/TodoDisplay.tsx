import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import useTodo from '../../hooks/useTodo';
import CustomInput from '../atoms/CustomInput';
import TodoItem from './TodoItem';
import {SafeAreaView} from 'react-native-safe-area-context';

const TodoDisplay = () => {
  const {todoList}: any = useTodo();
  console.log(todoList, ' in Tododisplay');
  return (
    <ScrollView className="h-[60vh]">
      {todoList.map((item: any) => {
        return (
          <TodoItem
            key={item.id}
            item={item}
            id={item.id}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </ScrollView>
  );
};

export default TodoDisplay;
