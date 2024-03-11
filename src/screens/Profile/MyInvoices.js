import React, {useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MyInvoicesStyle} from '../../styles/Styles';

function MyAdresses({navigation}) {
  const [invoice, setInvoice] = useState(false);
  const [invoiceId, setInvoiceId] = useState(1);
  return (
    <View style={MyInvoicesStyle.container}>
      <View style={MyInvoicesStyle.body}>
        {invoice ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={MyInvoicesStyle.body}>
            <View></View>
          </ScrollView>
        ) : (
          <View style={{alignSelf: 'center', marginTop: 30}}>
            <Text style={MyInvoicesStyle.statusText}>
              Fatura Bilgisi Bulunmuyor.
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                paddingBottom: 5,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('InvoiceTop')}
                style={{...MyInvoicesStyle.button, width: '90%'}}>
                <Text style={MyInvoicesStyle.buttonText}>Yeni Fatura Ekle</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

export default MyAdresses;
