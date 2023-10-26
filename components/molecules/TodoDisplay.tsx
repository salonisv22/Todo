import React from 'react';
import {Pressable, ScrollView, Text} from 'react-native';
import TodoItem from './TodoItem';
import {ref} from '../pages/Navigation';
import useAuth from '../../hooks/useAuth';
import {useSelector} from 'react-redux';

const TodoDisplay = () => {
  const todoList = useSelector((state: any) => state.counter.todoList);
  const {user}: any = useAuth();
  console.log(todoList, ' in Tododisplay');
  return (
    <ScrollView className="h-[70vh] m-2">
      {todoList.length != 0 ? (
        todoList.map((item: any) => {
          return (
            <Pressable
              key={item.id}
              onPress={() => {
                if (ref.isReady()) {
                  ref.navigate('ViewTodo', {
                    id: item.id,
                    action: 'view',
                  });
                }
              }}>
              <TodoItem item={item} title={item.title} id={item.id} />
            </Pressable>
          );
        })
      ) : (
        <Text className="text-3xl">Hello {user}! Add a todo item.</Text>
      )}
      {}
    </ScrollView>
  );
};

export default TodoDisplay;
