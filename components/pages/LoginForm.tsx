import React, {useEffect, useContext} from 'react';
import {useForm} from 'react-hook-form';
import {View, Button} from 'react-native';
import CustomInput from '../atoms/CustomInput';
import {useAuth} from '../../hooks/ProvideAuth';

const LoginForm = () => {
  const {user, signin}: any = useAuth();

  type FormValues = {
    username: string;
    password: string;
  };
  const {control, handleSubmit} = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    signin(data).then(function () {
      console.log('signed in');
    });
  };

  return (
    <View>
      <CustomInput control={control} name="username" placeholder="Username" />
      <CustomInput control={control} name="password" placeholder="Password" />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default LoginForm;
