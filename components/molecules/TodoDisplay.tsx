import React from 'react';
import {Pressable, View, Text} from 'react-native';
import TodoItem from './TodoItem';
import {ref} from '../pages/Navigation';
import useAuth from '../../hooks/useAuth';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';

const TodoDisplay = () => {
  const todoList = useSelector((state: any) => state.counter.todoList);
  const {user}: any = useAuth();
  return (
    <View className="h-[70vh] m-2">
      {todoList.length != 0 ? (
        <FlatList
          data={todoList}
          renderItem={({item}) => (
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
          )}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text className="text-3xl">Hello {user}! Add a todo item.</Text>
      )}
    </View>
  );
};

export default TodoDisplay;
