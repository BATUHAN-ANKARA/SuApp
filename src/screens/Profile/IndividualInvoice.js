import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import {InstittutionInvoiceStyle} from '../../styles/Styles';
import {Modalize} from 'react-native-modalize';

function IndividualInvoice({navigation}) {
  const [idNumber, setIdNumber] = useState('');
  const [invoiceTitle, setInvoiceTitle] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [cityTower, setCityTower] = useState('');
  const [neighbourhood, setNeighbourhood] = useState('');
  const [street, setStreet] = useState('');
  const [apartmentNo, setApartmentNo] = useState('');

  const invoiceModalRef = useRef();
  const [toggle, setToggle] = useState(true);

  const invoiceAddModal = async () => {
    invoiceModalRef.current?.open();
    invoiceAddModalClose();
  };
  const invoiceAddModalClose = async () => {
    setTimeout(() => {
      invoiceModalRef.current?.close();
    }, 1500);
    setTimeout(() => {
      navigation.goBack();
    }, 1750);
  };

  return (
    <SafeAreaView style={InstittutionInvoiceStyle.container}>
      <ScrollView style={InstittutionInvoiceStyle.body}>
        <View>
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
              TC Kimlik Numarası *
            </Text>
            <TextInput
              onChangeText={value => setIdNumber(value)}
              value={idNumber}
              style={InstittutionInvoiceStyle.inputArea}
            />
          </View>

          <View style={InstittutionInvoiceStyle.standartCell}>
            <Text style={InstittutionInvoiceStyle.standartCellText}>
              Telefon Numarası *
            </Text>
            <TextInput
              onChangeText={value => setPhone(value)}
              value={phone}
              style={InstittutionInvoiceStyle.inputArea}
            />
          </View>

          <View style={InstittutionInvoiceStyle.standartCell}>
            <Text style={InstittutionInvoiceStyle.standartCellText}>
              Fatura Başlığı *
            </Text>
            <TextInput
              onChangeText={value => setInvoiceTitle(value)}
              value={invoiceTitle}
              style={InstittutionInvoiceStyle.inputArea}
            />
          </View>

          <View style={InstittutionInvoiceStyle.standartCell}>
            <Text style={InstittutionInvoiceStyle.standartCellText}>
              İl / İlçe Seçiniz *
            </Text>
            <TextInput
              onChangeText={value => setCityTower(value)}
              value={cityTower}
              style={InstittutionInvoiceStyle.inputArea}
            />
          </View>

          <View style={InstittutionInvoiceStyle.standartCell}>
            <Text style={InstittutionInvoiceStyle.standartCellText}>
              Semt / Mahalle Seçiniz *
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

          <TouchableOpacity
            onPress={invoiceAddModal}
            style={InstittutionInvoiceStyle.button}>
            <Text style={InstittutionInvoiceStyle.buttonText}>Kaydet</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modalize ref={invoiceModalRef} adjustToContentHeight={toggle}>
        <View style={InstittutionInvoiceStyle.modalContent}>
          <Text style={InstittutionInvoiceStyle.modalMainText}>Başarılı !</Text>
          <Text style={InstittutionInvoiceStyle.modalSecondaryText}>
            Fatura Bilgileriniz Eklenmiştir.
          </Text>
        </View>
      </Modalize>
    </SafeAreaView>
  );
}

export default IndividualInvoice;
