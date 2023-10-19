import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createNavigationContainerRef} from '@react-navigation/native';
import LoginForm from './LoginForm';
import {ProvideAuth} from '../../providers/ProvideAuth';
import Home from './Home';
import {ProvideTodo} from '../../providers/ProvideTodo';
import ViewEditForm from '../atoms/ViewEditForm';
const Stack = createNativeStackNavigator();
const navigationRef: any = createNavigationContainerRef();
const Navigation = () => {
  return (
    <ProvideAuth>
      <ProvideTodo>
        <NavigationContainer ref={navigationRef}>
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
            <Stack.Screen
              name="ViewEdit"
              component={ViewEditForm}
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
export const ref = navigationRef;
