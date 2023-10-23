import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {View, Button, Text} from 'react-native';
import CustomInput from '../atoms/CustomInput';
import useTodo from '../../hooks/useTodo';
import GlobalButton from '../atoms/GlobalButton';
import {ref} from './Navigation';
import DrawerLayout from '../molecules/DrawerLayout';

const ViewEditForm = ({route}: any) => {
  const {params} = route;
  const [fetchedData, setFetchedData] = useState({
    title: '',
    description: '',
  });
  const {
    id,
    action,
  }: {
    id: number;
    action: string;
  } = params;

  const {getTodoItem}: any = useTodo();

  async function getData() {
    setFetchedData(await getTodoItem(id));
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    let defaultValues: any = {};
    defaultValues.title = `${fetchedData['title']}`;
    defaultValues.description = `${fetchedData['description']}`;
    reset({...defaultValues});
  }, [fetchedData['title'], fetchedData['description']]);

  const {control, handleSubmit, reset} = useForm();
  const {loading, updateTodoItem}: any = useTodo();
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
            <CustomInput
              style="w-[80vw] border-2 border-slate-200  rounded-lg p-2 m-4"
              control={control}
              name="title"
              placeholder="Title"
              editable={action != 'view'}
              defaultValues={fetchedData.title}
            />
            <CustomInput
              style="w-[80vw] border-2 border-slate-200  rounded-lg p-2"
              control={control}
              name="description"
              placeholder="Password"
              editable={action != 'view'}
              defaultValues={fetchedData.description}
            />
            {action === 'view' ? null : (
              <View className="my-2">
                <Button title="Edit" onPress={handleSubmit(onSubmit)} />
              </View>
            )}
          </View>
        </View>
      )}
    </DrawerLayout>
  );
};

export default ViewEditForm;
