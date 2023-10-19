import React from 'react';
import {useForm} from 'react-hook-form';
import {View, Button} from 'react-native';
import CustomInput from '../atoms/CustomInput';
import useAuth from '../../hooks/useAuth';
import useTodo from '../../hooks/useTodo';

const LoginForm = ({navigation}: any) => {
  const {signin}: any = useAuth();
  const {getTodoList}: any = useTodo();

  type FormValues = {
    username: string;
    password: string;
  };
  const {control, handleSubmit} = useForm<FormValues>();

  const onSubmit = (loginFormData: FormValues) => {
    signin(loginFormData);
    getTodoList();
    navigation.navigate('Home');
  };

  return (
    <View className="flex h-full w-full justify-center items-center">
      <CustomInput
        style="w-[80vw] border-2 border-slate-200  rounded-lg p-2 m-4"
        control={control}
        name="username"
        placeholder="Username"
      />
      <CustomInput
        style="w-[80vw] border-2 border-slate-200  rounded-lg p-2"
        control={control}
        name="password"
        placeholder="Password"
      />
      <View className="my-2">
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

export default LoginForm;
