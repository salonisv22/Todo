import React from 'react';
import {Pressable, ScrollView} from 'react-native';
import useTodo from '../../hooks/useTodo';
import TodoItem from './TodoItem';
import {ref} from '../pages/Navigation';

const TodoDisplay = () => {
  const {todoList}: any = useTodo();
  console.log(todoList, ' in Tododisplay');
  return (
    <ScrollView className="h-[70vh] m-2">
      {todoList.map((item: any) => {
        return (
          <Pressable
            onPress={() => {
              if (ref.isReady()) {
                ref.navigate('ViewEdit', {
                  id: item.id,
                  title: item.title,
                  description: item.description,
                  action: 'view',
                });
              }
            }}>
            <TodoItem
              key={item.id}
              item={item}
              id={item.id}
              title={item.title}
              description={item.description}
            />
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default TodoDisplay;
