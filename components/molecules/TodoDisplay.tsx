import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import useTodo from '../../hooks/useTodo';
import CustomInput from '../atoms/CustomInput';
import TodoItem from '../atoms/TodoItem';
import {SafeAreaView} from 'react-native-safe-area-context';

const TodoDisplay = () => {
  const {todoList}: any = useTodo();
  console.log('inside TodoDisplay' + JSON.stringify(todoList));
  return (
    <ScrollView>
      {todoList.map((item: any, index: number) => {
        return <TodoItem key={index} text={item.title} />;
      })}
    </ScrollView>
  );
};

export default TodoDisplay;
