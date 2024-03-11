import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PaymentTypeStyle} from '../../styles/Styles';

function PaymentType({navigation}) {
  const [paymentType, setPaymentType] = useState(true);
  return (
    <SafeAreaView style={PaymentTypeStyle.container}>
      <View style={PaymentTypeStyle.header}>
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
        <Text style={PaymentTypeStyle.title}>Ödeme Yöntemlerim</Text>
        <View style={PaymentTypeStyle.headerButtonArea}></View>
      </View>

      <View showsVerticalScrollIndicator={false} style={PaymentTypeStyle.body}>
        <View style={PaymentTypeStyle.activeCell}>
          {paymentType ? (
            <Text style={PaymentTypeStyle.activeText}>Nakit Ödeme</Text>
          ) : (
            <Text style={PaymentTypeStyle.activeText}>
              Kredi Kartı ile Ödeme
            </Text>
          )}
          <Ionicons name="checkmark-circle" size={20} color="#4CC4DE" />
        </View>

        <View style={{paddingHorizontal: 20, paddingVertical: 5}}>
          <Text style={PaymentTypeStyle.normalText}>
            Farklı bir ödeme yöntemi seç
          </Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => setPaymentType(!paymentType)}
            style={PaymentTypeStyle.standartCell}>
            {paymentType ? (
              <Ionicons name="card-outline" size={20} color="#4CC4DE" />
            ) : (
              <Ionicons name="cash-outline" size={20} color="#4CC4DE" />
            )}
            {paymentType ? (
              <Text style={PaymentTypeStyle.standartCellText}>
                Kredi Kartı ile Ödeme
              </Text>
            ) : (
              <Text style={PaymentTypeStyle.standartCellText}>
                Nakit ile Ödeme
              </Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.bottomArea}>
          <View>
            <Text style={{...PaymentTypeStyle.cell3Text, marginLeft: 0}}>
              Sepet Tutarı
            </Text>
            <Text style={PaymentTypeStyle.productCost}>34 TL</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Payment')}
            style={PaymentTypeStyle.nextButton}>
            <Text style={PaymentTypeStyle.nextButtonText}>DEVAM ET</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default PaymentType;

const styles = StyleSheet.create({
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
});
