import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Cart from '../../screens/Cart/Cart';
import PaymentType from '../../screens/Cart/PaymentType';
import Payment from '../../screens/Cart/Payment';
import PaymentSuccess from '../../screens/Cart/PaymentSuccess';

const Stack = createStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="PaymentType" component={PaymentType} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
    </Stack.Navigator>
  );
};
export default CartStack;
