import React, {useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MyAdressesStyle} from '../../styles/Styles';

function MyAdresses({navigation}) {
  const [address, setAdress] = useState(true);
  const [addressId, setAdressId] = useState(1);
  return (
    <View style={MyAdressesStyle.container}>
      <View style={MyAdressesStyle.body}>
        {address ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={MyAdressesStyle.body}>
            <View>
              <View style={MyAdressesStyle.standartCell}>
                <View style={MyAdressesStyle.row}>
                  {addressId === 1 ? (
                    <TouchableOpacity style={{width: '7%', height: 30}}>
                      <Ionicons
                        name="radio-button-on-outline"
                        size={20}
                        color="#4CC4DE"
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => setAdressId(1)}
                      style={{width: '7%', height: 30}}>
                      <Ionicons
                        name="radio-button-off-outline"
                        size={20}
                        color="#626D7C"
                      />
                    </TouchableOpacity>
                  )}

                  <View style={{width: '90%', paddingHorizontal: 10}}>
                    <Text style={MyAdressesStyle.addressText}>
                      Odunluk mahallesi liman cd. Bina No : 17 Daire: 34 Nilüfer
                      / Bursa shbhjsfjhfs
                    </Text>
                  </View>
                </View>
              </View>

              <View style={MyAdressesStyle.standartCell}>
                <View style={MyAdressesStyle.row}>
                  {addressId === 2 ? (
                    <TouchableOpacity style={{width: '7%', height: 30}}>
                      <Ionicons
                        name="radio-button-on-outline"
                        size={20}
                        color="#4CC4DE"
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => setAdressId(2)}
                      style={{width: '7%', height: 30}}>
                      <Ionicons
                        name="radio-button-off-outline"
                        size={20}
                        color="#626D7C"
                      />
                    </TouchableOpacity>
                  )}

                  <View style={{width: '90%', paddingHorizontal: 10}}>
                    <Text style={MyAdressesStyle.addressText}>
                      Odunluk mahallesi liman cd. Bina No : 17 Daire: 34 Nilüfer
                      / Bursa shbhjsfjhfs
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('GeoLocation')}
              style={MyAdressesStyle.button}>
              <Text style={MyAdressesStyle.buttonText}>Yeni Adres Ekle</Text>
            </TouchableOpacity>
          </ScrollView>
        ) : (
          <View style={{alignSelf: 'center', marginTop: 30}}>
            <Text style={MyAdressesStyle.statusText}>
              Adres Bilgisi Bulunmuyor.
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                paddingBottom: 5,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('NewAddress')}
                style={{...MyAdressesStyle.button, width: '90%'}}>
                <Text style={MyAdressesStyle.buttonText}>Yeni Adres Ekle</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

export default MyAdresses;
