import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createNavigationContainerRef} from '@react-navigation/native';

import LoginForm from './LoginForm';
import AddTodo from './AddTodo';
import Home from './Home';
import ViewEditForm from './ViewEditForm';

import useAuth from '../../hooks/useAuth';

const Stack = createNativeStackNavigator();
const navigationRef: any = createNavigationContainerRef();

const Navigation = () => {
  const {user}: any = useAuth();
  console.log('user', user);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={Boolean(user) ? 'Home' : 'Login'}>
        <Stack.Screen
          name="Login"
          component={LoginForm}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ViewEdit"
          component={ViewEditForm}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddTodo"
          component={AddTodo}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
export const ref = navigationRef;
