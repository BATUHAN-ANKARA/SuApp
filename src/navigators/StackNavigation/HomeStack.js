import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/Home/Home';
import Products from '../../screens/Home/Products';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
};
export default HomeStack;
