import React from 'react';
import {View, Button} from 'react-native';
import CustomInput from '../atoms/CustomInput';
import useTodo from '../../hooks/useTodo';
import {useForm} from 'react-hook-form';
import DrawerLayout from '../molecules/DrawerLayout';
import {ref} from './Navigation';

const AddTodo = () => {
  type FormValues = {
    title: string;
    description: string;
  };
  const {createTodoItem}: any = useTodo();
  const {control, handleSubmit, reset} = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    createTodoItem(data);
    if (ref.isReady()) {
      ref.navigate('Home');
    }

    reset();
  };
  return (
    <DrawerLayout>
      <View className="flex-1 items-center justify-center">
        <CustomInput
          style="w-[80vw] border-2 border-slate-200  rounded-lg p-2 mx-auto my-2"
          control={control}
          name="title"
          placeholder="Todo"
        />
        <CustomInput
          style="w-[80vw] border-2 border-slate-200  rounded-lg p-2 mx-auto my-2"
          control={control}
          name="description"
          placeholder="Description"
        />
        <View className="my-2">
          <Button title="Add To do" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </DrawerLayout>
  );
};

export default AddTodo;
