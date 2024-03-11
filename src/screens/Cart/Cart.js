import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Platform,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ColorLessLogoSvg from '../../../assets/svg/ColorlessLogoSvg';
import {CartStyle} from '../../styles/Styles';
import SakaSvg from '../../../assets/svg/SakaSvg';
import MiniDamacanaSvg from '../../../assets/svg/MiniDamacanaSvg';
import PlusSvg from '../../../assets/svg/PlusSvg';
import MinusSvg from '../../../assets/svg/MinusSvg';
import {Modalize} from 'react-native-modalize';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import 'moment/locale/tr';

const Cart = ({navigation}) => {
  const [address, setAddress] = useState(true);
  const [cartEmpty, setCartEmpty] = useState(false);
  const [count, setCount] = useState(1);
  const addCount = () => {
    setCount(count + 1);
  };
  const minusCount = () => {
    if (count === 1) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  const calendarModalRef = useRef();
  const [toggle, setToggle] = useState(true);

  const calendarAddModal = async () => {
    calendarModalRef.current?.open();
  };

  const calendarAddModalClose = async () => {
    calendarModalRef.current?.close();
  };

  const [selectedDay, setSelectedDay] = useState();

  return (
    <SafeAreaView style={CartStyle.container}>
      <View style={CartStyle.header}>
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

        {address ? (
          <TouchableOpacity
            style={{
              ...CartStyle.adressButton,
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <View>
              <Ionicons name="location-outline" color="#626D7C" size={20} />
            </View>
            <View>
              <Text style={{...CartStyle.welcomeText1, fontSize: 10}}>
                Seçili Adresiniz
              </Text>
              <Text
                style={{...CartStyle.welcomeText2, fontSize: 11, marginTop: 5}}>
                Ev (Odunluk Mah.)
              </Text>
            </View>
            <View>
              <Ionicons name="chevron-down" color="#626D7C" size={20} />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={CartStyle.adressButton}>
            <Text style={CartStyle.tinytext}>Hiç kayıtlı adresiniz yok</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons name="notifications-outline" color="#fff" size={25} />
        </TouchableOpacity>
      </View>

      <View style={CartStyle.parentScroll}>
        <View style={CartStyle.body}>
          <View style={{}}>
            {cartEmpty ? (
              <View>
                <View
                  style={{
                    ...CartStyle.rowTextArea,
                    marginTop: 10,
                    marginHorizontal: 20,
                  }}>
                  <Text
                    style={{
                      ...CartStyle.welcomeText1,
                      fontSize: 14,
                      fontFamily: 'GothamRounded-Book',
                    }}>
                    Henüz Sepetinize Ürün Eklemediniz.
                  </Text>
                </View>
                <TouchableOpacity style={CartStyle.firstOrderArea}>
                  <ColorLessLogoSvg />
                  <Text style={CartStyle.firstOrderText}>
                    İlk Siparişini Oluştur
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={CartStyle.scrollBody}>
                <View style={styles.card}>
                  <View style={CartStyle.cell1}>
                    <View style={CartStyle.row}>
                      <View style={CartStyle.dealerLogoBox}>
                        <SakaSvg />
                      </View>
                      <Text style={CartStyle.dealerName}>Saka Su</Text>
                    </View>

                    <TouchableOpacity>
                      <Ionicons
                        name="trash-outline"
                        size={20}
                        color="#626D7C"
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={CartStyle.cell2}>
                    <View
                      style={{
                        ...CartStyle.row,
                        justifyContent: 'space-between',
                      }}>
                      <View style={CartStyle.row}>
                        <MiniDamacanaSvg />
                        <View style={{marginLeft: 10}}>
                          <Text style={CartStyle.productName}>
                            19 LT Damacana Su
                          </Text>
                          <Text style={CartStyle.productCost}>34 TL</Text>
                          <Text style={CartStyle.depositText}>
                            Depozito : 25 TL
                          </Text>
                        </View>
                      </View>

                      <View style={CartStyle.counterArea}>
                        <TouchableOpacity
                          style={CartStyle.miniButtons}
                          onPress={() => minusCount()}>
                          <MinusSvg />
                        </TouchableOpacity>

                        <View style={CartStyle.countArea}>
                          <Text style={CartStyle.countText}>{count}</Text>
                        </View>

                        <TouchableOpacity
                          style={CartStyle.miniButtons}
                          onPress={() => addCount()}>
                          <PlusSvg />
                        </TouchableOpacity>
                      </View>
                    </View>

                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('HomeStack', {screen: 'Products'})
                      }
                      style={CartStyle.addButton}>
                      <Text style={CartStyle.addProductText}>Ürün Ekle</Text>
                      <Ionicons name="add-outline" size={22} color="#fff" />
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity
                    onPress={calendarAddModal}
                    style={CartStyle.cell3}>
                    <View style={CartStyle.row}>
                      <Ionicons name="time-outline" size={20} color="#626D7C" />
                      <Text style={CartStyle.cell3Text}>
                        1 Şubat Hemen Kapında
                      </Text>
                    </View>
                    <Ionicons
                      name="chevron-forward"
                      size={20}
                      color="#626D7C"
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => navigation.navigate('PaymentType')}
                    style={CartStyle.cell3}>
                    <View style={CartStyle.row}>
                      <Ionicons name="card-outline" size={20} color="#626D7C" />
                      <Text style={CartStyle.cell3Text}>
                        Ödeme Yöntemi Seçiniz
                      </Text>
                    </View>
                    <Ionicons
                      name="chevron-forward"
                      size={20}
                      color="#626D7C"
                    />
                  </TouchableOpacity>

                  <TouchableOpacity style={CartStyle.cell5}>
                    <View style={CartStyle.row}>
                      <Ionicons name="star" size={20} color="#4CC4DE" />
                      <Text style={CartStyle.cell5Text}>Fırsatlara gözat</Text>
                    </View>
                    <Ionicons
                      name="chevron-forward"
                      size={20}
                      color="#4CC4DE"
                    />
                  </TouchableOpacity>
                </View>
              </ScrollView>
            )}
          </View>
        </View>
      </View>
      <View style={CartStyle.bottomArea}>
        <View>
          <Text style={{...CartStyle.cell3Text, marginLeft: 0}}>
            Sepet Tutarı
          </Text>
          <Text style={CartStyle.productCost}>34 TL</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Payment')}
          style={CartStyle.nextButton}>
          <Text style={CartStyle.nextButtonText}>DEVAM ET</Text>
        </TouchableOpacity>
      </View>

      <Modalize ref={calendarModalRef} adjustToContentHeight={toggle}>
        <View style={styles.modalContent}>
          <Text style={styles.modalMainText}>Teslimat Saati</Text>
          <View style={{width: '100%'}}>
            <CalendarStrip
              calendarAnimation={{type: 'sequence', duration: 30}}
              daySelectionAnimation={{
                type: 'border',
                duration: 200,
                borderWidth: 1,
                borderHighlightColor: 'white',
              }}
              style={{height: 100, paddingTop: 20, paddingBottom: 10}}
              calendarHeaderStyle={{color: '#0D0F1E'}}
              calendarColor={'#FDFFFF'}
              dateNumberStyle={{color: '#626D7C'}}
              scrollToOnSetSelectedDate={false}
              dateNameStyle={{
                color: '#626D7C',
                fontFamily: 'GothamRounded-Bold',
                fontSize: 12,
              }}
              highlightDateNumberStyle={{color: '#4CC4DE'}}
              highlightDateNameStyle={{
                color: '#4CC4DE',
                fontFamily: 'GothamRounded-Bold',
                fontSize: 12,
              }}
              iconContainer={{flex: 0.12}}
              onDateSelected={val => alert(val.format('dddd'))}
            />
          </View>
        </View>
      </Modalize>
    </SafeAreaView>
  );
};

export default Cart;
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FDFFFF',
    width: '100%',
    marginBottom: Platform.OS === 'ios' ? 100 : 130,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  modalContent: {
    paddingTop: 30,
    alignItems: 'center',
    height: Dimensions.get('screen').height / 2,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: Dimensions.get('screen').width,
  },
  modalMainText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 16,
    color: '#0D0F1E',
    lineHeight: 23,
  },
  modalSecondaryText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 16,
    color: '#0D0F1E',
    lineHeight: 23,
    marginTop: 5,
  },
});
