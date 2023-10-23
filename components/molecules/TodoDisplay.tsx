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
            key={item.id}
            onPress={() => {
              if (ref.isReady()) {
                ref.navigate('ViewEdit', {
                  id: item.id,
                  action: 'view',
                });
              }
            }}>
            <TodoItem item={item} title={item.title} id={item.id} />
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default TodoDisplay;
