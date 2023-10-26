import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TodoDisplay from '../molecules/TodoDisplay';
import DrawerLayout from '../molecules/DrawerLayout';
import Draggable from 'react-native-draggable';
import GlobalButton from '../atoms/GlobalButton';
import {ref} from '../pages/Navigation';
import {getTodoList} from '../../feature/countTodoSlice';
import {useDispatch, useSelector} from 'react-redux';

const Home = () => {
  const dispatch = useDispatch<any>();
  const loading = useSelector((state: any) => state.counter.loading);

  useEffect(() => {
    dispatch(getTodoList());
  }, []);

  return (
    <DrawerLayout>
      <SafeAreaView>
        <View className="flex justify-center items-center">
          {loading ? <Text>Loading...</Text> : <TodoDisplay />}
        </View>
        <View className="ml-[40%]">
          {loading ? (
            <></>
          ) : (
            <Draggable shouldReverse>
              <GlobalButton
                size="2xl"
                shape="rd"
                border={2}
                text="+"
                filled={true}
                action={() => {
                  if (ref.isReady()) {
                    ref.navigate('AddTodo', {action: 'create'});
                  }
                }}
              />
            </Draggable>
          )}
        </View>
      </SafeAreaView>
    </DrawerLayout>
  );
};

export default Home;
