import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Subscriptions from '../../screens/Subscriptions/Subscriptions';
import {StyleSheet, Text, View, TouchableOpacity, Platform} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyOrders from '../../screens/MyOrders/MyOrders';
import HomeStack from '../StackNavigation/HomeStack';
import ProfileStack from '../StackNavigation/ProfileStack';
import CartStack from '../StackNavigation/CartStack';

const Bottom = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      bottom: Platform.OS === 'android' ? 50 : 30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}>
    <View
      style={{
        width: 80,
        height: 80,
        borderRadius: 100,
        backgroundColor: '#4CC4DE',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const BottomTabNavigator = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#E8F9FD'}}>
      <Bottom.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#fff',
            borderRadius: 20,
            height: 99,
            flexDirection: 'row',
            tabBarIconStyle: {display: 'none'},
            shadowColor: '#4CC4DE',
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 24,
          },
        }}>
        <Bottom.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons
                  name="home-outline"
                  size={28}
                  color={focused ? '#4CC4DE' : '#626D7C'}
                />
                <Text
                  style={{
                    color: focused ? '#4CC4DE' : '#626D7C',
                    fontSize: 10,
                    fontFamily: 'GothamRounded-Medium',
                    marginTop: 5,
                  }}>
                  Anasayfa
                </Text>
              </View>
            ),
          }}
        />

        <Bottom.Screen
          name="MyOrders"
          component={MyOrders}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons
                  name="reader-outline"
                  size={28}
                  color={focused ? '#4CC4DE' : '#626D7C'}
                />
                <Text
                  style={{
                    color: focused ? '#4CC4DE' : '#626D7C',
                    marginTop: 5,
                    fontSize: 10,
                    fontFamily: 'GothamRounded-Medium',
                  }}>
                  Siparişlerim
                </Text>
              </View>
            ),
          }}
        />

        <Bottom.Screen
          name="CartStack"
          component={CartStack}
          options={{
            tabBarStyle: {display: 'none'},
            tabBarIcon: ({focused}) => (
              <Ionicons
                name="cart-outline"
                size={35}
                color={focused ? '#fff' : '#fff'}
              />
            ),
            tabBarButton: props => <CustomTabBarButton {...props} />,
          }}
        />

        <Bottom.Screen
          name="Subscriptions"
          component={Subscriptions}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons
                  name="bookmark-outline"
                  size={28}
                  color={focused ? '#4CC4DE' : '#626D7C'}
                />
                <Text
                  style={{
                    color: focused ? '#4CC4DE' : '#626D7C',
                    marginTop: 5,
                    fontSize: 10,
                    fontFamily: 'GothamRounded-Medium',
                  }}>
                  Aboneliklerim
                </Text>
              </View>
            ),
          }}
        />

        <Bottom.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons
                  name="person-circle-outline"
                  size={28}
                  color={focused ? '#4CC4DE' : '#748c94'}
                />
                <Text
                  style={{
                    color: focused ? '#4CC4DE' : '#748c94',
                    fontSize: 10,
                    fontFamily: 'GothamRounded-Medium',
                    marginTop: 5,
                  }}>
                  Hesabım
                </Text>
              </View>
            ),
          }}
        />
      </Bottom.Navigator>
    </View>
  );
};
export default BottomTabNavigator;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#4CC4DE',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
