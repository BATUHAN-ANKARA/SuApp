import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import {InstittutionInvoiceStyle, ProfileInfoStyle} from '../../styles/Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

function NewAddress({navigation}) {
  const [addressTitle, setAddressTitle] = useState('');
  const [tower, setTower] = useState('');
  const [fullName, setFullName] = useState('');
  const [explanation, setExplanation] = useState('');
  const [city, setCity] = useState('');
  const [neighbourhood, setNeighbourhood] = useState('');
  const [street, setStreet] = useState('');
  const [apartmentNo, setApartmentNo] = useState('');

  return (
    <SafeAreaView style={InstittutionInvoiceStyle.container}>
      <View style={ProfileInfoStyle.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={ProfileInfoStyle.headerButtonArea}>
          <Ionicons name="chevron-back" color="#fff" size={25} />
        </TouchableOpacity>
        <Text style={ProfileInfoStyle.title}>Adres Bilgileri</Text>
        <View style={ProfileInfoStyle.headerButtonArea}></View>
      </View>
      <ScrollView style={InstittutionInvoiceStyle.body}>
        <View>
          <View style={InstittutionInvoiceStyle.standartCell}>
            <Text style={InstittutionInvoiceStyle.standartCellText}>
              Adres Başlığı *
            </Text>
            <TextInput
              onChangeText={value => setAddressTitle(value)}
              value={addressTitle}
              style={InstittutionInvoiceStyle.inputArea}
            />
          </View>

          <View
            style={{...InstittutionInvoiceStyle.standartCell, marginTop: 0}}>
            <Text style={InstittutionInvoiceStyle.standartCellText}>
              Adınız Ve Soyadınız *
            </Text>
            <TextInput
              onChangeText={value => setFullName(value)}
              value={fullName}
              style={InstittutionInvoiceStyle.inputArea}
            />
          </View>

          <View style={InstittutionInvoiceStyle.standartCell}>
            <Text style={InstittutionInvoiceStyle.standartCellText}>
              İl Seçiniz *
            </Text>
            <TextInput
              onChangeText={value => setCity(value)}
              value={city}
              style={InstittutionInvoiceStyle.inputArea}
            />
          </View>

          <View style={InstittutionInvoiceStyle.standartCell}>
            <Text style={InstittutionInvoiceStyle.standartCellText}>
              İlçe Seçiniz *
            </Text>
            <TextInput
              onChangeText={value => setTower(value)}
              value={tower}
              style={InstittutionInvoiceStyle.inputArea}
            />
          </View>

          <View style={InstittutionInvoiceStyle.standartCell}>
            <Text style={InstittutionInvoiceStyle.standartCellText}>
              Mahalle Seçiniz *
            </Text>
            <TextInput
              onChangeText={value => setNeighbourhood(value)}
              value={neighbourhood}
              style={InstittutionInvoiceStyle.inputArea}
            />
          </View>

          <View style={InstittutionInvoiceStyle.standartCell}>
            <Text style={InstittutionInvoiceStyle.standartCellText}>
              Cadde Ve Sokak Adı Seçiniz *
            </Text>
            <TextInput
              onChangeText={value => setStreet(value)}
              value={street}
              style={InstittutionInvoiceStyle.inputArea}
            />
          </View>

          <View style={InstittutionInvoiceStyle.standartCell}>
            <Text style={InstittutionInvoiceStyle.standartCellText}>
              Bina No / Daire No Seçiniz *
            </Text>
            <TextInput
              onChangeText={value => setApartmentNo(value)}
              value={apartmentNo}
              style={InstittutionInvoiceStyle.inputArea}
            />
          </View>

          <View style={InstittutionInvoiceStyle.standartCell}>
            <Text style={InstittutionInvoiceStyle.standartCellText}>
              Ayrıntılı adres tarifi yazınız.
            </Text>
            <TextInput
              onChangeText={value => setExplanation(value)}
              value={explanation}
              style={InstittutionInvoiceStyle.inputArea}
            />
          </View>

          <TouchableOpacity style={InstittutionInvoiceStyle.button}>
            <Text style={InstittutionInvoiceStyle.buttonText}>Kaydet</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default NewAddress;
