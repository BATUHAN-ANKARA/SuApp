import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-view';
import MyInvoices from '../../screens/Profile/MyInvoices';
import MyAdresses from '../../screens/Profile/MyAdresses';
import {AddressInvoiceInfoStyle} from '../../styles/Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();
function TopTabs() {
  return (
    <Tab.Navigator
      tabBarPosition="top"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#fff',
          marginTop: 0,
        },
        tabBarActiveTintColor: '#4CC4DE',
        tabBarLabelStyle: {
          fontSize: 15,
          textTransform: 'none',
        },
        tabBarInactiveTintColor: '#0D0F1E',
        tabBarIndicatorStyle: {
          backgroundColor: '#4CC4DE',
          height: 4,
          borderRadius: 99,
        },
      }}>
      <Tab.Screen name="Teslimat Adresim" component={MyAdresses} />
      <Tab.Screen name="Fatura Bilgilerim" component={MyInvoices} />
    </Tab.Navigator>
  );
}
const TopTab = ({navigation}) => {
  const safeArea = useSafeArea();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: safeArea.top,
        backgroundColor: '#4CC4DE',
      }}>
      <View style={AddressInvoiceInfoStyle.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={AddressInvoiceInfoStyle.headerButtonArea}>
          <Ionicons name="chevron-back" color="#fff" size={25} />
        </TouchableOpacity>
        <Text style={AddressInvoiceInfoStyle.title}>
          Adres Ve Fatura Bilgilerim
        </Text>
        <View style={AddressInvoiceInfoStyle.headerButtonArea}></View>
      </View>
      <TopTabs />
    </SafeAreaView>
  );
};
export default TopTab;
