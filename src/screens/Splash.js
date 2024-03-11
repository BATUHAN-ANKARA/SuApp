/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useEffect, useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../assets/svg/Logo';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('OnBoard');
  }, 1500);

  //   const getData = async () => {
  //     try {
  //       const jsonValue = await AsyncStorage.getItem('user');
  //       let parsed = JSON.parse(jsonValue);
  //       if (parsed === null) {
  //         navigation.navigate('OnBoard');
  //       } else {
  //         navigation.navigate('App');
  //       }
  //     } catch (e) {
  //       // error reading value
  //     }
  //   };
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0.0, y: 0.0}}
        end={{x: 0, y: 0.9}}
        colors={['#4CC4DE', '#135985']}
        style={styles.linearGradient}>
        <View style={styles.body}>
          <Logo />
        </View>
        <ActivityIndicator size="large" color="#fff" />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Current Version: 1.0.0</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4CC4DE',
  },
  linearGradient: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 11,
    lineHeight: 15,
    opacity: 0.4,
  },
  img: {},
  logo: {
    marginBottom: 20,
  },
  body_title: {
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 36,
    lineHeight: 45,
  },
  body_text: {
    marginBottom: 0,
    color: 'white',
    fontSize: 18,
    lineHeight: 22,
  },
});
