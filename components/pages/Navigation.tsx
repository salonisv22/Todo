import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginForm from './LoginForm';
import {ProvideAuth} from '../../hooks/ProvideAuth';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <ProvideAuth>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginForm}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProvideAuth>
  );
};

export default Navigation;
