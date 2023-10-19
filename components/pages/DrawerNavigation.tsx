import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text} from 'react-native';
import Home from './Home';

const Drawer = createDrawerNavigator();
const Hello = () => {
  return <Text>Stacked</Text>;
};
const Bello = () => {
  return <Text>Stacked</Text>;
};
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{headerShown: true}}
      />
      <Drawer.Screen
        name="Bello"
        component={Bello}
        options={{headerShown: true}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
