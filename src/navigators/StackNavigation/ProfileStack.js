import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../../screens/Profile/Profile';
import ProfileInfo from '../../screens/Profile/ProfileInfo';
import TopTab from '../TabNavigation/TopTabNavigation';
import InvoiceTop from '../TabNavigation/InvoiceTopNavigation';
import NewAddress from '../../screens/Profile/NewAddress';
import ApplicationSettings from '../../screens/Profile/ApplicationSettings';
import LastOrders from '../../screens/Profile/LastOrders';
import GeoLocation from '../../screens/Profile/GetLocation';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ProfileInfo" component={ProfileInfo} />
      <Stack.Screen name="TopTab" component={TopTab} />
      <Stack.Screen name="InvoiceTop" component={InvoiceTop} />
      <Stack.Screen name="NewAddress" component={NewAddress} />
      <Stack.Screen name="LastOrders" component={LastOrders} />
      <Stack.Screen name="GeoLocation" component={GeoLocation} />
      <Stack.Screen
        name="ApplicationSettings"
        component={ApplicationSettings}
      />
    </Stack.Navigator>
  );
};
export default ProfileStack;
