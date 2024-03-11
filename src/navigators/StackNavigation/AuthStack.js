import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterVerification from '../../screens/Auth/RegisterVerification';
import RegisterVerificationStep2 from '../../screens/Auth/RegisterVerificationStep2';
import BottomTabNavigator from '../TabNavigation/BottomTabNavigator';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="RegisterVerification"
        component={RegisterVerification}
      />
      <Stack.Screen
        name="RegisterVerificationStep2"
        component={RegisterVerificationStep2}
      />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default AuthStack;
