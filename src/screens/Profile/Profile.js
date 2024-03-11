import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BlueTruckSvg from '../../../assets/svg/BlueTuckSvg';
import ShareSvg from '../../../assets/svg/ShareSvg';
import {ProfileStyle} from '../../styles/Styles';

function Profile({navigation}) {
  return (
    <SafeAreaView style={ProfileStyle.container}>
      <View style={ProfileStyle.header}>
        <View style={ProfileStyle.headerButtonArea}></View>
        <Text style={ProfileStyle.title}>Hesabım</Text>
        <View style={ProfileStyle.headerButtonArea}></View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={ProfileStyle.body}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProfileInfo')}
          style={ProfileStyle.accountInfoCell}>
          <View style={ProfileStyle.column}>
            <Text style={ProfileStyle.accountInfoCellName}>Büşra Çaylar</Text>
            <Text style={ProfileStyle.accountInfoCellPhone}>555 555 55 55</Text>
          </View>
          <Ionicons name="calendar" size={20} color="#4CC4DE" />
        </TouchableOpacity>

        <View>
          <TouchableOpacity style={ProfileStyle.standartCell}>
            <Ionicons name="card-outline" size={20} color="#4CC4DE" />
            <Text style={ProfileStyle.standartCellText}>Ödeme Yöntemlerim</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('TopTab')}
            style={ProfileStyle.standartCell}>
            <Ionicons name="location-outline" size={20} color="#4CC4DE" />
            <Text style={ProfileStyle.standartCellText}>
              Adres ve Fatura Bilgilerim
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('LastOrders')}
            style={{...ProfileStyle.standartCell, borderBottomWidth: 1}}>
            <BlueTruckSvg />
            <Text style={ProfileStyle.standartCellText}>Siparişlerim</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ApplicationSettings')}
            style={{...ProfileStyle.standartCell, marginTop: 10}}>
            <Ionicons name="settings-outline" size={20} color="#4CC4DE" />
            <Text style={ProfileStyle.standartCellText}>Ayarlar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ProfileStyle.standartCell}>
            <Ionicons name="star-outline" size={20} color="#4CC4DE" />
            <Text style={ProfileStyle.standartCellText}>Bizi Değerlendir</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{...ProfileStyle.standartCell, borderBottomWidth: 1}}>
            <ShareSvg />
            <Text style={ProfileStyle.standartCellText}>Uygulamayı Paylaş</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={{...ProfileStyle.outCell, marginTop: 10}}>
            <Ionicons name="log-out-outline" size={20} color="#FF8642" />
            <Text style={ProfileStyle.outCellText}>Uygulamadan Çıkış Yap</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Profile;
