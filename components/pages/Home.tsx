import React, {useEffect} from 'react';
import {View, Button, Text, Pressable} from 'react-native';
import useTodo from '../../hooks/useTodo';
import {SafeAreaView} from 'react-native-safe-area-context';

import TodoDisplay from '../molecules/TodoDisplay';
import DrawerLayout from '../molecules/DrawerLayout';
import Draggable from 'react-native-draggable';
import GlobalButton from '../atoms/GlobalButton';
import {ref} from '../pages/Navigation';

const Home = () => {
  const {loading, getTodoList}: any = useTodo();

  useEffect(() => {
    getTodoList();
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
                    ref.navigate('AddTodo');
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
