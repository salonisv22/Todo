import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {View, Button} from 'react-native';
import CustomInput from '../atoms/CustomInput';
import useTodo from '../../hooks/useTodo';
import GlobalButton from '../atoms/GlobalButton';
import {ref} from './Navigation';
import DrawerLayout from '../molecules/DrawerLayout';

const ViewEditForm = ({route}: any) => {
  const {params} = route;
  const {
    id,
    title,
    description,
    action,
  }: {
    id: number;
    title: string;
    description: string;
    action: string;
  } = params;
  const {control, handleSubmit, reset} = useForm({
    defaultValues: {
      title: title,
      description: description,
    },
  });
  const {updateTodoItem}: any = useTodo();
  type FormValues = {
    title: string;
    description: string;
  };
  const onSubmit = (data: any) => {
    updateTodoItem(id, data);
    reset();
    exit();
  };
  const exit = () => {
    if (ref.isReady()) {
      ref.navigate('Home');
    }
  };

  return (
    <DrawerLayout>
      <View>
        <GlobalButton
          size="lg"
          shape="rd-box"
          border={0}
          action={() => exit()}
          text="X"
        />
        <View className="flex h-full w-full justify-center items-center">
          <CustomInput
            style="w-[80vw] border-2 border-slate-200  rounded-lg p-2 m-4"
            control={control}
            name="title"
            placeholder="Title"
            editable={action != 'view'}
            defaultValues={title}
          />
          <CustomInput
            style="w-[80vw] border-2 border-slate-200  rounded-lg p-2"
            control={control}
            name="description"
            placeholder="Password"
            setValue={id != -1 ? description : ''}
            editable={action != 'view'}
            defaultValues={description}
          />
          {action === 'view' ? null : (
            <View className="my-2">
              <Button title="Edit" onPress={handleSubmit(onSubmit)} />
            </View>
          )}
        </View>
      </View>
    </DrawerLayout>
  );
};

export default ViewEditForm;
