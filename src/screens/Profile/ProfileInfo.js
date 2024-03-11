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
import {ProfileInfoStyle} from '../../styles/Styles';

function ProfileInfo({navigation}) {
  const [name, setName] = useState('Büşra');
  const [surName, setSurName] = useState('Çaylar');
  const [mail, setMail] = useState('test@mail.com');
  return (
    <SafeAreaView style={ProfileInfoStyle.container}>
      <View style={ProfileInfoStyle.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={ProfileInfoStyle.headerButtonArea}>
          <Ionicons name="chevron-back" color="#fff" size={25} />
        </TouchableOpacity>
        <Text style={ProfileInfoStyle.title}>Profil Bilgileri</Text>
        <View style={ProfileInfoStyle.headerButtonArea}></View>
      </View>

      <View style={ProfileInfoStyle.body}>
        <View>
          <View style={{...ProfileInfoStyle.standartCell, marginTop: 0}}>
            <Text style={ProfileInfoStyle.standartCellText}>Adınız *</Text>
            <TextInput
              onChangeText={value => setName(value)}
              value={name}
              style={ProfileInfoStyle.inputArea}
            />
          </View>

          <View style={ProfileInfoStyle.standartCell}>
            <Text style={ProfileInfoStyle.standartCellText}>Soyadınız *</Text>
            <TextInput
              onChangeText={value => setSurName(value)}
              value={surName}
              style={ProfileInfoStyle.inputArea}
            />
          </View>

          <View style={ProfileInfoStyle.disableCell}>
            <Text style={ProfileInfoStyle.standartCellText}>
              Telefon Numarası *
            </Text>
            <Text style={ProfileInfoStyle.disableCellText}>555 555 55 55</Text>
          </View>
        </View>

        <View style={ProfileInfoStyle.standartCell}>
          <Text style={ProfileInfoStyle.standartCellText}>
            E-Posta Adresi *
          </Text>
          <TextInput
            onChangeText={value => setMail(value)}
            value={mail}
            style={ProfileInfoStyle.inputArea}
          />
        </View>

        <View style={{}}>
          <TouchableOpacity
            style={{...ProfileInfoStyle.outCell, marginTop: 10}}>
            <Ionicons name="checkmark-outline" size={20} color="#626D7C" />
            <Text
              style={{...ProfileInfoStyle.standartCellText, marginLeft: 10}}>
              Kaydet
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...ProfileInfoStyle.outCell, marginTop: 0}}>
            <Ionicons name="trash-outline" size={20} color="#FF8642" />
            <Text style={ProfileInfoStyle.outCellText}>Hesabımı Sil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ProfileInfo;
