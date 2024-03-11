import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SmallLogo from '../../../assets/svg/SmallLogo';
import {RegisterVerificationStyle} from '../../styles/Styles';
import axios from 'axios';

const RegisterVerification = ({navigation}) => {
  const verificate = () => {
    setTimeout(() => {
      navigation.navigate('RegisterVerificationStep2', {number: phone});
    }, 2000);
  };

  const [phone, setPhone] = useState('');

  return (
    <View style={RegisterVerificationStyle.container}>
      <View style={styles.header}>
        <SmallLogo />
      </View>
      <View style={RegisterVerificationStyle.body}>
        <Text style={RegisterVerificationStyle.mainText}>Üyelik Oluştur</Text>
        <Text style={RegisterVerificationStyle.secondaryText}>
          Cep telefonunuza doğrulama kodu gönderilecek lütfen telefon numaranızı
          doğru giriniz.
        </Text>

        <View style={{marginTop: 50}}>
          <Text style={RegisterVerificationStyle.inputLabel}>
            Cep Telefon Numaranız
          </Text>
          <TextInput
            style={RegisterVerificationStyle.inputArea}
            keyboardType="number-pad"
            onChangeText={value => setPhone(value)}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => verificate()}>
          <Text style={RegisterVerificationStyle.button_text}>
            Telefonu Doğrula
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterVerification;

const styles = StyleSheet.create({
  header: {
    flex: 0.2,
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? 30 : 0,
  },
  button: {
    height: 45,
    backgroundColor: '#4CC4DE',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 80 : 50,
  },
});
