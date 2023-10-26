import React, {useEffect, useState} from 'react';
import {View, Button} from 'react-native';
import CustomInput from '../atoms/CustomInput';
import {useForm} from 'react-hook-form';
import DrawerLayout from '../molecules/DrawerLayout';
import {ref} from './Navigation';
import GlobalButton from '../atoms/GlobalButton';
import {
  createTodoItem,
  getTodoItem,
  updateTodoItem,
} from '../../feature/countTodoSlice';
import {useDispatch} from 'react-redux';

const AddTodo = ({route}: any) => {
  const {params} = route;
  const {id, action} = params;
  const dispatch = useDispatch<any>();
  type FormValues = {
    title: string;
    description: string;
  };

  const [fetchedData, setFetchedData] = useState<any>({
    title: '',
    description: '',
  });
  const {control, handleSubmit, reset} = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    if (action == 'create') {
      dispatch(createTodoItem(data));
    } else if (action == 'edit') {
      dispatch(updateTodoItem({id, data}));
    }
    if (ref.isReady()) {
      ref.navigate('Home');
    }
    reset();
  };
  async function getData() {
    const response = await dispatch(getTodoItem(id));
    setFetchedData(response.payload);
  }

  useEffect(() => {
    if (action == 'edit') {
      getData();
    }
  }, []);
  useEffect(() => {
    let defaultValues: any = {};
    defaultValues.title = `${fetchedData['title']}`;
    defaultValues.description = `${fetchedData['description']}`;
    reset({...defaultValues});
  }, [fetchedData['title'], fetchedData['description']]);

  const exit = () => {
    if (ref.isReady()) {
      ref.navigate('Home');
    }
  };

  return (
    <DrawerLayout>
      <GlobalButton
        size="lg"
        shape="rd-box"
        border={0}
        action={() => exit()}
        text="X"
      />
      <View className="flex-1 items-center justify-center">
        <CustomInput
          style="w-[80vw] border-2 border-slate-200  rounded-lg p-2 mx-auto my-2"
          control={control}
          name="title"
          placeholder="Todo"
          defaultValues={fetchedData.title}
        />
        <CustomInput
          style="w-[80vw] border-2 border-slate-200  rounded-lg p-2 mx-auto my-2"
          control={control}
          name="description"
          placeholder="Description"
          defaultValues={fetchedData.title}
        />
        <View className="my-2">
          <Button title={action} onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </DrawerLayout>
  );
};

export default AddTodo;
