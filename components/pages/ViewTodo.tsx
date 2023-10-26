import React, {useEffect, useState} from 'react';
import {View, Button, Text} from 'react-native';
import GlobalButton from '../atoms/GlobalButton';
import {ref} from './Navigation';
import DrawerLayout from '../molecules/DrawerLayout';
import {getTodoItem} from '../../feature/countTodoSlice';
import {useDispatch, useSelector} from 'react-redux';

const ViewTodo = ({route}: any) => {
  const {params} = route;
  const dispatch = useDispatch<any>();
  const {
    id,
  }: {
    id: number;
  } = params;
  const todoItem = useSelector((state: any) => state.counter.todoItem);
  const loading = useSelector((state: any) => state.counter.itemLoading);

  useEffect(() => {
    dispatch(getTodoItem(id));
  }, []);

  const exit = () => {
    if (ref.isReady()) {
      ref.navigate('Home');
    }
  };

  return (
    <DrawerLayout>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <GlobalButton
            size="lg"
            shape="rd-box"
            border={0}
            action={() => exit()}
            text="X"
          />
          <View className="flex h-full w-full justify-center items-center">
            <View className="flex-row justify-center items-center border-2 w-[80vw] p-2 bg-slate-200 rounded-lg m-2">
              <Text className="text-lg">{todoItem.title}</Text>
            </View>
            <View className="flex-row justify-center items-center border-2 w-[80vw] p-2 bg-slate-200 rounded-lg m-2">
              <Text className="text-lg">{todoItem.description}</Text>
            </View>
          </View>
        </View>
      )}
    </DrawerLayout>
  );
};

export default ViewTodo;
