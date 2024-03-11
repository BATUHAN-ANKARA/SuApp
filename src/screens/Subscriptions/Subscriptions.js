import React from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Subscription() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontFamily: 'GothamRounded-Bold'}}>Subscriptions</Text>
      <Ionicons name="bookmark-outline" size={35} />
    </View>
  );
}

export default Subscription;
