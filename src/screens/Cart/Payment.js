import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PaymentDealerSvg from '../../../assets/svg/PaymentDealerSvg';

function Payment({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons name="chevron-back" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Ödeme</Text>
        <View style={styles.headerButtonArea}></View>
      </View>

      <View showsVerticalScrollIndicator={false} style={styles.body}>
        <View style={styles.activeCell}>
          <Text style={styles.activeText}>Nakit Ödeme</Text>
          <Ionicons name="checkmark-circle" size={20} color="#4CC4DE" />
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.cell3}>
            <View style={styles.row}>
              <Ionicons name="card-outline" size={20} color="#626D7C" />
              <Text style={styles.standartCellText}>
                Ödeme Yöntemi Değiştir
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#626D7C" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.cell3}>
            <View style={styles.row}>
              <PaymentDealerSvg />
              <Text style={styles.standartCellText}>
                Saka Su Bayi (Nilüfer)
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#626D7C" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.cell3}>
            <View style={styles.row}>
              <Ionicons name="time-outline" size={20} color="#626D7C" />
              <Text style={styles.standartCellText}>1 Şubat Hemen Kapında</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#626D7C" />
          </TouchableOpacity>

          <View style={styles.inputCell}>
            <View style={styles.noteCheck}>
              <Ionicons name="checkmark-circle" size={20} color="#4CC4DE" />
            </View>
            <Text style={styles.inputCellText}>Sipariş Notu Yaz</Text>
            <TextInput
              multiline={true}
              style={styles.inputArea}
              placeholder="Buraya not bırakabilirsin."
            />
          </View>

          <View style={styles.totalCostCard}>
            <Text style={styles.totalCostCardText}>Ödenecek Tutar</Text>
            <Text style={styles.totalCostCardText}>68.00 TL</Text>
          </View>
        </View>

        <View style={styles.bottomArea}>
          <View>
            <Text style={{...styles.cell3Text, marginLeft: 0}}>
              Ödenecek Tutar
            </Text>
            <Text style={styles.productCost}>34 TL</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('PaymentSuccess')}
            style={styles.nextButton}>
            <Text style={styles.nextButtonText}>Siparişi Tamamla</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F9FD',
  },
  header: {
    flex: 0.12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#4CC4DE',
  },
  title: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 20,
    color: '#fff',
  },
  headerButtonArea: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
  },
  activeCell: {
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E4E6E9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  standartCell: {
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#E4E6E9',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  standartCellText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 15,
    color: '#626D7C',
    marginLeft: 20,
  },
  activeText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 15,
    color: '#0D0F1E',
  },
  nextButton: {
    height: 30,
    borderRadius: 30,
    backgroundColor: '#4CC4DE',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  nextButtonText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 13,
    color: '#fff',
  },
  bottomArea: {
    backgroundColor: '#fff',
    width: '100%',
    height: Platform.OS === 'ios' ? 120 : 120,
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? -40 : -10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  cell3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    borderBottomWidth: 0.7,
    borderBottomColor: '#E4E6E9',
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputCell: {
    width: '100%',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#E4E6E9',
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },
  inputCellText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 14,
    color: '#626D7C',
  },
  inputArea: {
    height: null,
    fontSize: 15,
    fontFamily: 'GothamRounded-Medium',
    color: '#0D0F1E',
    marginTop: 5,
  },
  noteCheck: {
    position: 'absolute',
    right: 20,
    top: 5,
  },
  totalCostCard: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  totalCostCardText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 15,
    color: '#4CC4DE',
  },
  cell3Text: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 13,
    color: '#0D0F1E',
    marginLeft: 20,
  },
  productCost: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 14,
    color: '#4CC4DE',
    lineHeight: 23,
  },
});
