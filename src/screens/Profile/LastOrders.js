import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LastOrdersStyle} from '../../styles/Styles';
import SakaSvg from '../../../assets/svg/SakaSvg';

function LastOrders({navigation}) {
  const [lastOrder, setLastOrder] = useState(false);
  return (
    <SafeAreaView style={LastOrdersStyle.container}>
      <View style={LastOrdersStyle.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={LastOrdersStyle.headerButtonArea}>
          <Ionicons name="chevron-back" color="#fff" size={25} />
        </TouchableOpacity>
        <Text style={LastOrdersStyle.title}>Siparişlerim</Text>
        <View style={LastOrdersStyle.headerButtonArea}></View>
      </View>

      {lastOrder ? (
        <ScrollView style={LastOrdersStyle.body}>
          <View style={LastOrdersStyle.standartCell}>
            <View style={LastOrdersStyle.row}>
              <View style={LastOrdersStyle.dealerLogoBox}>
                <SakaSvg />
              </View>

              <View style={LastOrdersStyle.textArea}>
                <Text style={LastOrdersStyle.adressText}>
                  Ev (Odunluk Mah.)
                </Text>
                <Text style={LastOrdersStyle.timeText}>Sipariş Tarihi</Text>
                <Text style={LastOrdersStyle.time}>14 Ağustos Cumartesi</Text>
              </View>
            </View>

            <View style={{}}>
              <Text style={LastOrdersStyle.costText}>392,00 TL</Text>
            </View>
          </View>
        </ScrollView>
      ) : (
        <View style={{alignSelf: 'center', marginTop: 30}}>
          <Text style={LastOrdersStyle.statusText}>
            Henüz sipariş vermediniz.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

export default LastOrders;
