import {StyleSheet, Text, View, TouchableOpacity, Platform} from 'react-native';
import React, {useState} from 'react';
import SmallLogo from '../../../assets/svg/SmallLogo';
import {RegisterVerificationStep2Style} from '../../styles/Styles';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {useNavigation, CommonActions} from '@react-navigation/native';

const CELL_COUNT = 4;
const RegisterVerificationStep2 = ({navigation, route}) => {
  const verificate = () => {
    setTimeout(() => {
      // navigation.replace('BottomTabNavigator');
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'BottomTabNavigator'}],
        }),
      );
    }, 2000);
  };

  let number = route?.params?.number;

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={RegisterVerificationStep2Style.container}>
      <View style={styles.header}>
        <SmallLogo />
      </View>

      <View style={RegisterVerificationStep2Style.body}>
        <Text style={RegisterVerificationStep2Style.mainText}>
          Telefonu Doğrula
        </Text>

        <Text style={RegisterVerificationStep2Style.secondaryText}>
          {number} telefon numaranıza doğrulama kodu gönderilmiştir.
        </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{...RegisterVerificationStep2Style.secondaryText}}>
            Lütfen{' '}
          </Text>
          <Text
            style={{
              ...RegisterVerificationStep2Style.secondaryText,
              fontFamily: 'GothamRounded-Medium',
            }}>
            12{' '}
          </Text>
          <Text style={{...RegisterVerificationStep2Style.secondaryText}}>
            saniye içinde kodu giriniz.
          </Text>
        </View>

        <View style={{marginTop: 10}}>
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={RegisterVerificationStep2Style.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <View style={{backgroundColor: '#F5F6F9', borderRadius: 12}}>
                <Text
                  key={index}
                  style={[
                    RegisterVerificationStep2Style.cell,
                    isFocused && RegisterVerificationStep2Style.focusCell,
                  ]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />

          <TouchableOpacity
            onPress={() => verificate()}
            style={RegisterVerificationStep2Style.button}>
            <Text style={RegisterVerificationStep2Style.button_text}>
              Aktivasyonu Tamamla
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterVerificationStep2;

const styles = StyleSheet.create({
  header: {
    flex: 0.2,
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? 30 : 0,
  },
});
