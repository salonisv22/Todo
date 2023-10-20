import React from 'react';
import {ScrollView} from 'react-native';
import useTodo from '../../hooks/useTodo';
import TodoItem from './TodoItem';

const TodoDisplay = () => {
  const {todoList}: any = useTodo();
  console.log(todoList, ' in Tododisplay');
  return (
    <ScrollView className="h-[70vh] m-2">
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
