import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MiniLogoSvg from '../../../assets/svg/MiniLogoSvg';
import TruckSvg from '../../../assets/svg/TruckSvg';
import CycleSvg from '../../../assets/svg/CycleSvg';
import GlassBottleSvg from '../../../assets/svg/GlassBottleSvg';
import DamacanaSvg from '../../../assets/svg/DamacanaSvg';
import Product2Svg from '../../../assets/svg/Product2Svg';
import ColorLessLogoSvg from '../../../assets/svg/ColorlessLogoSvg';
import {HomeStyle} from '../../styles/Styles';
import SakaSvg from '../../../assets/svg/SakaSvg';

const Home = ({navigation}) => {
  const [isFirstOrder, setIsFirstOrder] = useState(false);
  const [address, setAddress] = useState(true);
  const [cartEmpty, setCartEmpty] = useState(true);
  const [lastOrder, setLastOrder] = useState(true);
  const [campaign, setCampaign] = useState(true);
  return (
    <SafeAreaView style={HomeStyle.container}>
      <View style={HomeStyle.header}>
        <View
          style={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MiniLogoSvg />
        </View>

        {address ? (
          <TouchableOpacity
            style={{
              ...HomeStyle.adressButton,
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <View>
              <Ionicons name="location-outline" color="#626D7C" size={20} />
            </View>
            <View>
              <Text style={{...HomeStyle.welcomeText1, fontSize: 10}}>
                Seçili Adresiniz
              </Text>
              <Text
                style={{...HomeStyle.welcomeText2, fontSize: 11, marginTop: 5}}>
                Ev (Odunluk Mah.)
              </Text>
            </View>
            <View>
              <Ionicons name="chevron-down" color="#626D7C" size={20} />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={HomeStyle.adressButton}>
            <Text style={HomeStyle.tinytext}>Hiç kayıtlı adresiniz yok</Text>
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

      <View style={HomeStyle.parentScroll}>
        <ScrollView
          scrollEnabled={true}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          style={HomeStyle.body}>
          <View style={{}}>
            <View
              style={{
                ...HomeStyle.rowTextArea,
                marginTop: 10,
                marginHorizontal: 20,
              }}>
              <Text style={HomeStyle.welcomeText1}>Merhaba, </Text>
              <Text style={HomeStyle.welcomeText2}>Serhat!</Text>
            </View>

            {lastOrder ? (
              <View style={{marginHorizontal: 20}}>
                <View style={{...HomeStyle.rowTextArea, marginTop: 10}}>
                  <Text style={{...HomeStyle.welcomeText1, fontSize: 14}}>
                    Son siparişinizi{' '}
                  </Text>
                  <Text style={{...HomeStyle.welcomeText2, fontSize: 14}}>
                    26 gün{' '}
                  </Text>
                  <Text style={{...HomeStyle.welcomeText1, fontSize: 14}}>
                    önce verdiniz.
                  </Text>
                </View>
              </View>
            ) : null}

            {cartEmpty ? (
              <View
                style={{
                  ...HomeStyle.rowTextArea,
                  marginTop: 10,
                  marginHorizontal: 20,
                }}>
                <Text
                  style={{
                    ...HomeStyle.welcomeText1,
                    fontSize: 14,
                    fontFamily: 'GothamRounded-Book',
                  }}>
                  Henüz Sepetinize Ürün Eklemediniz.
                </Text>
              </View>
            ) : null}

            {campaign ? (
              <View style={{}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={HomeStyle.campaignArea}>
                    <TouchableOpacity style={{...HomeStyle.campaignCard}}>
                      <View style={{width: '50%'}}>
                        <Text style={HomeStyle.campaignText}>
                          DİLEDİĞİN MARKADAN KREDİ KARTIYLA 10’LU DAMACANA
                          PAKETİNİ ŞİMDİ AL
                        </Text>
                        <Text style={HomeStyle.campaignTextBold}>
                          TAM 20 TL
                        </Text>
                        <Text
                          style={{...HomeStyle.campaignTextBold, fontSize: 13}}>
                          TASARRUF ET
                        </Text>
                      </View>

                      <View>
                        <GlassBottleSvg />
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{
                        ...HomeStyle.campaignCard,
                        backgroundColor: '#BDF3FF',
                      }}>
                      <View style={{width: '50%'}}>
                        <Text
                          style={{...HomeStyle.campaignText, color: '#25AAC7'}}>
                          DEĞER SU ’dan ilk siparişine özel damacana suyun
                        </Text>
                        <Text
                          style={{
                            ...HomeStyle.campaignTextBold,
                            color: '#25AAC7',
                            fontSize: 13,
                          }}>
                          TAM 10 TL
                        </Text>
                        <Text
                          style={{
                            ...HomeStyle.campaignTextBold,
                            fontSize: 13,
                            color: '#25AAC7',
                          }}>
                          İNDİRİMLİ
                        </Text>
                      </View>

                      <View>
                        <GlassBottleSvg />
                      </View>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>
            ) : null}

            {address ? (
              <View style={HomeStyle.dealersArea}>
                <Text style={HomeStyle.dealersAreaTitle}>
                  Bölgendeki Su Bayileri
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Products')}
                  style={HomeStyle.dealersCard}>
                  <View style={HomeStyle.dealerLogoBox}>
                    <SakaSvg />
                  </View>

                  <View style={{marginLeft: 10}}>
                    <Text style={HomeStyle.dealerName}>Saka Su</Text>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Text style={HomeStyle.minText}>Min. Sipariş Tutarı</Text>
                      <Text style={HomeStyle.minCost}>20,00 TL</Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <TruckSvg />

                      <Text style={{...HomeStyle.time, marginLeft: 5}}>
                        30-40 Dk
                      </Text>

                      <View style={{marginLeft: 5}}>
                        <Ionicons
                          name="power-outline"
                          color="#626D7C"
                          size={12}
                        />
                      </View>

                      <Text style={{...HomeStyle.time, marginLeft: 5}}>
                        Kapanış :{' '}
                      </Text>
                      <Text style={HomeStyle.time}>20:00</Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('Products')}
                  style={HomeStyle.dealersCard}>
                  <View style={HomeStyle.dealerLogoBox}>
                    <SakaSvg />
                  </View>

                  <View style={{marginLeft: 10}}>
                    <Text style={HomeStyle.dealerName}>Saka Su</Text>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Text style={HomeStyle.minText}>Min. Sipariş Tutarı</Text>
                      <Text style={HomeStyle.minCost}>20,00 TL</Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <TruckSvg />

                      <Text style={{...HomeStyle.time, marginLeft: 5}}>
                        30-40 Dk
                      </Text>

                      <View style={{marginLeft: 5}}>
                        <Ionicons
                          name="power-outline"
                          color="#626D7C"
                          size={12}
                        />
                      </View>

                      <Text style={{...HomeStyle.time, marginLeft: 5}}>
                        Kapanış :{' '}
                      </Text>
                      <Text style={HomeStyle.time}>20:00</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            ) : null}

            {!isFirstOrder ? (
              <View style={{marginHorizontal: 20}}>
                <View
                  style={{
                    ...HomeStyle.rowTextArea,
                    justifyContent: 'space-between',
                    marginTop: 20,
                  }}>
                  <Text style={{...HomeStyle.welcomeText2, fontSize: 16}}>
                    Son Sipariş
                  </Text>
                  <TouchableOpacity>
                    <Text
                      style={{
                        ...HomeStyle.welcomeText2,
                        fontSize: 14,
                        color: '#FF8642',
                      }}>
                      Tümünü Gör
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={{paddingHorizontal: 0}}>
                  <View style={HomeStyle.lastOrderArea}>
                    <View style={HomeStyle.row}>
                      <View style={HomeStyle.cell1}>
                        <Ionicons
                          name="calendar-outline"
                          size={20}
                          color="#4CC4DE"
                        />

                        <View style={{marginLeft: 10}}>
                          <Text
                            style={{...HomeStyle.welcomeText1, fontSize: 10}}>
                            Sipariş Tarihi
                          </Text>

                          <Text
                            style={{
                              ...HomeStyle.welcomeText2,
                              fontSize: 10,
                              marginTop: 5,
                            }}>
                            14 Ağustos Cumartesi
                          </Text>
                        </View>
                      </View>

                      <View style={HomeStyle.cell2}>
                        <TruckSvg />

                        <View style={{marginLeft: 10}}>
                          <Text
                            style={{...HomeStyle.welcomeText1, fontSize: 10}}>
                            Sipariş Durumu
                          </Text>

                          <Text
                            style={{
                              ...HomeStyle.welcomeText2,
                              fontSize: 10,
                              marginTop: 5,
                            }}>
                            Teslim Edildi
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={HomeStyle.row}>
                      <View style={HomeStyle.cell3}>
                        <Text style={{...HomeStyle.welcomeText1, fontSize: 10}}>
                          Ürünler
                        </Text>

                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: 5,
                          }}>
                          <Text
                            style={{
                              ...HomeStyle.welcomeText2,
                              fontSize: 13,
                              color: '#626D7C',
                            }}>
                            0.5 Lt Pet (24 Adet)
                          </Text>

                          <Text
                            style={{
                              ...HomeStyle.welcomeText2,
                              fontSize: 13,
                              color: '#626D7C',
                            }}>
                            1 Adet
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: 5,
                          }}>
                          <Text
                            style={{
                              ...HomeStyle.welcomeText2,
                              fontSize: 13,
                              color: '#626D7C',
                            }}>
                            19 Lt Damacana
                          </Text>

                          <Text
                            style={{
                              ...HomeStyle.welcomeText2,
                              fontSize: 13,
                              color: '#626D7C',
                            }}>
                            5 Adet
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={HomeStyle.row}>
                      <View style={HomeStyle.cell4}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{...HomeStyle.welcomeText1, fontSize: 10}}>
                            Toplam Ürün
                          </Text>
                          <Text
                            style={{...HomeStyle.welcomeText1, fontSize: 10}}>
                            Toplam Tutar
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: 5,
                          }}>
                          <Text
                            style={{
                              ...HomeStyle.welcomeText2,
                              fontSize: 14,
                              color: '#0D0F1E',
                            }}>
                            9 Adet
                          </Text>

                          <Text
                            style={{
                              ...HomeStyle.welcomeText2,
                              fontSize: 14,
                              color: '#0D0F1E',
                            }}>
                            392,00 TL
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={{...HomeStyle.row, borderBottomWidth: 0}}>
                      <View style={HomeStyle.cell5}>
                        <TouchableOpacity style={HomeStyle.lastOrderButton}>
                          <CycleSvg />

                          <Text
                            style={{
                              ...HomeStyle.welcomeText2,
                              fontSize: 16,
                              color: '#fff',
                              marginLeft: 10,
                            }}>
                            Siparişi Tekrarla
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            ) : (
              <View>
                <View style={HomeStyle.firstOrderArea}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Products')}>
                    <ColorLessLogoSvg />
                  </TouchableOpacity>
                  <Text style={HomeStyle.firstOrderText}>
                    İlk Siparişini Oluştur
                  </Text>
                </View>
              </View>
            )}

            <View style={{marginHorizontal: 20}}>
              <View style={HomeStyle.productsAreaStart}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{...HomeStyle.welcomeText2, fontSize: 16}}>
                    Ürünler
                  </Text>
                  <Text style={{...HomeStyle.welcomeText2, fontSize: 16}}>
                    {' '}
                    (5)
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => navigation.navigate('Products')}>
                  <Text
                    style={{
                      ...HomeStyle.welcomeText2,
                      fontSize: 14,
                      color: '#FF8642',
                    }}>
                    Tümünü Gör
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{...styles.productsArea}}>
                <View style={HomeStyle.productCard}>
                  <DamacanaSvg />

                  <Text
                    style={{
                      ...HomeStyle.welcomeText2,
                      fontSize: 12,
                      color: '#626D7C',
                      marginTop: 10,
                      alignSelf: 'flex-start',
                    }}>
                    19 LT DAMACANA SU
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      marginTop: 5,
                    }}>
                    <Text
                      style={{
                        ...HomeStyle.welcomeText2,
                        fontSize: 14,
                        color: '#0D0F1E',
                      }}>
                      34 TL
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Cart')}
                      style={HomeStyle.productCardButton}>
                      <Text style={HomeStyle.productCardButtonText}>
                        SEPETE EKLE
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={HomeStyle.productCard}>
                  <Product2Svg />
                  <Text
                    style={{
                      ...HomeStyle.welcomeText2,
                      fontSize: 12,
                      color: '#626D7C',
                      marginTop: 10,
                      alignSelf: 'flex-start',
                    }}>
                    10 LT PET SU
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      marginTop: 5,
                    }}>
                    <Text
                      style={{
                        ...HomeStyle.welcomeText2,
                        fontSize: 14,
                        color: '#0D0F1E',
                      }}>
                      22 TL
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Cart')}
                      style={HomeStyle.productCardButton}>
                      <Text style={HomeStyle.productCardButtonText}>
                        SEPETE EKLE
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  productsArea: {
    width: '100%',
    height: null,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Platform.OS === 'ios' ? 50 : 60,
  },
});
