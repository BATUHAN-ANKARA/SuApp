import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-view';
import {AddressInvoiceInfoStyle} from '../../styles/Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IndividualInvoice from '../../screens/Profile/IndividualInvoice';
import InstittutionInvoice from '../../screens/Profile/InstitutionInvoice';

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
      <Tab.Screen name="Bireysel Fatura" component={IndividualInvoice} />
      <Tab.Screen name="Kurumsal Fatura" component={InstittutionInvoice} />
    </Tab.Navigator>
  );
}
const InvoiceTop = ({navigation}) => {
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
          Yeni Fatura Bilgisi Ekle
        </Text>
        <View style={AddressInvoiceInfoStyle.headerButtonArea}></View>
      </View>
      <TopTabs />
    </SafeAreaView>
  );
};
export default InvoiceTop;
