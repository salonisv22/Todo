import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import useTodo from '../../hooks/useTodo';
import CustomInput from '../atoms/CustomInput';
import TodoItem from './TodoItem';
import {SafeAreaView} from 'react-native-safe-area-context';

const TodoDisplay = ({navigation}: any) => {
  const {todoList}: any = useTodo();
  return (
    <ScrollView>
      {todoList.map((item: any) => {
        return (
          <TodoItem
            key={item.id}
            item={item}
            id={item.id}
            title={item.title}
            description={item.description}
            navigation={navigation}
          />
        );
      })}
    </ScrollView>
  );
};

export default TodoDisplay;
