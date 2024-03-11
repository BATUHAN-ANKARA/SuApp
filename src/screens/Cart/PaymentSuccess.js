import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import OnBoardThirdSvg from '../../../assets/svg/OnBoardThirdSvg';
import {StackActions} from '@react-navigation/native';

function PaymentSuccess({navigation}) {
  setTimeout(() => {
    handleSigninNavigation();
  }, 1500);
  const handleSigninNavigation = () => {
    navigation.dispatch(StackActions.popToTop());
    navigation.navigate('MyOrders');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <OnBoardThirdSvg />
        <View style={{}}>
          <Text style={styles.mainText}>Siparişiniz Tamamlandı.</Text>
          <Text style={styles.secondaryText}>
            Siparişiniz en kısa sürede adresinizde olacak.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default PaymentSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F9FD',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  mainText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 20,
    color: '#626D7C',
    lineHeight: 23,
    textAlign: 'center',
  },
  secondaryText: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 14,
    color: '#626D7C',
    lineHeight: 23,
    textAlign: 'center',
  },
});
