import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {View, Button, Text} from 'react-native';
import useTodo from '../../hooks/useTodo';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomInput from '../atoms/CustomInput';
import TodoDisplay from '../molecules/TodoDisplay';
import DrawerLayout from '../molecules/DrawerLayout';

const Home = () => {
  type FormValues = {
    title: string;
    description: string;
  };

  const {control, handleSubmit, reset} = useForm<FormValues>();
  const {createTodoItem, loading, getTodoList}: any = useTodo();

  const onSubmit = (data: FormValues) => {
    createTodoItem(data);
    reset();
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <DrawerLayout>
      <SafeAreaView>
        <View className="flex justify-center items-center">
          <CustomInput
            style="w-[80vw] border-2 border-slate-200  rounded-lg p-2 m-4"
            control={control}
            name="title"
            placeholder="Todo"
          />
          <CustomInput
            style="w-[80vw] border-2 border-slate-200  rounded-lg p-2"
            control={control}
            name="description"
            placeholder="Description"
          />
          <View className="my-2">
            <Button title="Add To do" onPress={handleSubmit(onSubmit)} />
          </View>
          {loading ? <Text>Loading...</Text> : <TodoDisplay />}
        </View>
      </SafeAreaView>
    </DrawerLayout>
  );
};

export default Home;
