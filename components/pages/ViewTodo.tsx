import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {View, Button, Text} from 'react-native';
import CustomInput from '../atoms/CustomInput';
import useTodo from '../../hooks/useTodo';
import GlobalButton from '../atoms/GlobalButton';
import {ref} from './Navigation';
import DrawerLayout from '../molecules/DrawerLayout';

const ViewTodo = ({route}: any) => {
  const {params} = route;
  const [fetchedData, setFetchedData] = useState({
    title: '',
    description: '',
  });
  const {
    id,
  }: {
    id: number;
  } = params;

  const {getTodoItem}: any = useTodo();

  async function getData() {
    setFetchedData(await getTodoItem(id));
  }
  useEffect(() => {
    getData();
  }, []);

  const {loading}: any = useTodo();

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
              <Text className="text-lg">{fetchedData.title}</Text>
            </View>
            <View className="flex-row justify-center items-center border-2 w-[80vw] p-2 bg-slate-200 rounded-lg m-2">
              <Text className="text-lg">{fetchedData.description}</Text>
            </View>
          </View>
        </View>
      )}
    </DrawerLayout>
  );
};

export default ViewTodo;
