import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginForm from './LoginForm';
import {ProvideAuth} from '../../providers/ProvideAuth';
import Home from './Home';
import {ProvideTodo} from '../../providers/ProvideTodo';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <ProvideAuth>
      <ProvideTodo>
        <NavigationContainer>
          <Stack.Navigator>
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
          </Stack.Navigator>
        </NavigationContainer>
      </ProvideTodo>
    </ProvideAuth>
  );
};

export default Navigation;
