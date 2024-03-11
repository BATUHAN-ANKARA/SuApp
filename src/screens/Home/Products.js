import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SakaSvg from '../../../assets/svg/SakaSvg';
import DamacanaSvg from '../../../assets/svg/DamacanaSvg';
import Product2Svg from '../../../assets/svg/Product2Svg';
import SmallWaterSvg from '../../../assets/svg/SmallWaterSvg';
import {ProductsStyle} from '../../styles/Styles';

const Products = ({navigation}) => {
  const [filterNumber, setFilterNumber] = useState(1);
  const selectFilter = number => {
    setFilterNumber(number);
  };
  return (
    <SafeAreaView style={ProductsStyle.container}>
      <View style={ProductsStyle.header}>
        <TouchableOpacity
          style={ProductsStyle.headerButtonArea}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" color="#fff" size={25} />
        </TouchableOpacity>
        <Text style={ProductsStyle.title}>Ürünler</Text>
        <View style={ProductsStyle.headerButtonArea}></View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={ProductsStyle.body}>
        <View style={ProductsStyle.infoArea}>
          <View style={ProductsStyle.row}>
            <View style={ProductsStyle.dealerLogoBox}>
              <SakaSvg />
            </View>

            <View style={{...ProductsStyle.column, marginLeft: 10}}>
              <Text style={ProductsStyle.dealerName}>Saka Su</Text>

              <View style={ProductsStyle.row}>
                <Text style={ProductsStyle.minText}>Min. Sipariş Tutarı </Text>
                <Text style={ProductsStyle.minCost}>20.00 TL</Text>
              </View>
            </View>
          </View>

          <View style={ProductsStyle.row}>
            <Text style={ProductsStyle.time}>Kapanış : </Text>
            <Text style={ProductsStyle.time}>20:00</Text>
          </View>
        </View>

        <View style={{marginVertical: 20}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {filterNumber === 1 ? (
              <TouchableOpacity
                style={{
                  ...ProductsStyle.filterButton,
                  marginLeft: 20,
                  backgroundColor: '#4CC4DE',
                }}>
                <Text
                  style={{...ProductsStyle.filterButtonText, color: '#fff'}}>
                  Damacana
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => selectFilter(1)}
                style={{...ProductsStyle.filterButton, marginLeft: 20}}>
                <Text style={ProductsStyle.filterButtonText}>Damacana</Text>
              </TouchableOpacity>
            )}

            {filterNumber === 2 ? (
              <TouchableOpacity
                style={{
                  ...ProductsStyle.filterButton,
                  backgroundColor: '#4CC4DE',
                }}>
                <Text
                  style={{...ProductsStyle.filterButtonText, color: '#fff'}}>
                  Büyük Şişe
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => selectFilter(2)}
                style={ProductsStyle.filterButton}>
                <Text style={ProductsStyle.filterButtonText}>Büyük Şişe</Text>
              </TouchableOpacity>
            )}

            {filterNumber === 3 ? (
              <TouchableOpacity
                style={{
                  ...ProductsStyle.filterButton,
                  backgroundColor: '#4CC4DE',
                }}>
                <Text
                  style={{...ProductsStyle.filterButtonText, color: '#fff'}}>
                  Küçük Şişe
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => selectFilter(3)}
                style={ProductsStyle.filterButton}>
                <Text style={ProductsStyle.filterButtonText}>Küçük Şişe</Text>
              </TouchableOpacity>
            )}

            {filterNumber === 4 ? (
              <TouchableOpacity
                style={{
                  ...ProductsStyle.filterButton,
                  marginRight: 20,
                  backgroundColor: '#4CC4DE',
                }}>
                <Text
                  style={{...ProductsStyle.filterButtonText, color: '#fff'}}>
                  Cam Damacana
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => selectFilter(4)}
                style={{...ProductsStyle.filterButton, marginRight: 20}}>
                <Text style={ProductsStyle.filterButtonText}>Cam Damacana</Text>
              </TouchableOpacity>
            )}
          </ScrollView>
        </View>

        {filterNumber === 1 ? (
          <View style={{marginHorizontal: 20}}>
            <Text style={ProductsStyle.productType}>Damacana</Text>
            <View style={{...ProductsStyle.productsArea}}>
              <View style={ProductsStyle.productCard}>
                <DamacanaSvg />

                <Text
                  style={{
                    ...ProductsStyle.welcomeText2,
                    fontSize: 12,
                    color: '#626D7C',
                    marginTop: 10,
                    alignSelf: 'flex-start',
                  }}>
                  19 LT Damacana Su
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
                      ...ProductsStyle.welcomeText2,
                      fontSize: 13,
                      color: '#0D0F1E',
                    }}>
                    34 TL
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('CartStack', {screen: 'Cart'})
                    }
                    style={ProductsStyle.productCardButton}>
                    <Text style={ProductsStyle.productCardButtonText}>
                      SEPETE EKLE
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={ProductsStyle.productCard}>
                <DamacanaSvg />
                <Text
                  style={{
                    ...ProductsStyle.welcomeText2,
                    fontSize: 12,
                    color: '#626D7C',
                    marginTop: 10,
                    alignSelf: 'flex-start',
                  }}>
                  19 LT Damacana Su
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
                      ...ProductsStyle.welcomeText2,
                      fontSize: 13,
                      color: '#0D0F1E',
                    }}>
                    34 TL
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('CartStack', {screen: 'Cart'})
                    }
                    style={ProductsStyle.productCardButton}>
                    <Text style={ProductsStyle.productCardButtonText}>
                      SEPETE EKLE
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ) : null}

        {filterNumber === 2 ? (
          <View style={{marginHorizontal: 20}}>
            <Text style={ProductsStyle.productType}>Büyük Şişe</Text>
            <View style={{...ProductsStyle.productsArea}}>
              <View style={ProductsStyle.productCard}>
                <Product2Svg />

                <Text
                  style={{
                    ...ProductsStyle.welcomeText2,
                    fontSize: 12,
                    color: '#626D7C',
                    marginTop: 10,
                    alignSelf: 'flex-start',
                  }}>
                  10 LT Pet Su
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
                      ...ProductsStyle.welcomeText2,
                      fontSize: 13,
                      color: '#0D0F1E',
                    }}>
                    22 TL
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('CartStack', {screen: 'Cart'})
                    }
                    style={ProductsStyle.productCardButton}>
                    <Text style={ProductsStyle.productCardButtonText}>
                      SEPETE EKLE
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ) : null}

        {filterNumber === 3 ? (
          <View style={{marginHorizontal: 20}}>
            <Text style={ProductsStyle.productType}>Küçük Şişe</Text>
            <View style={{...ProductsStyle.productsArea}}>
              <View style={ProductsStyle.productCard}>
                <SmallWaterSvg />

                <Text
                  style={{
                    ...ProductsStyle.welcomeText2,
                    fontSize: 12,
                    color: '#626D7C',
                    marginTop: 10,
                    alignSelf: 'flex-start',
                  }}>
                  1.5 LT Pet Su 6'lı Koli
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
                      ...ProductsStyle.welcomeText2,
                      fontSize: 13,
                      color: '#0D0F1E',
                    }}>
                    50.5 TL
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('CartStack', {screen: 'Cart'})
                    }
                    style={ProductsStyle.productCardButton}>
                    <Text style={ProductsStyle.productCardButtonText}>
                      SEPETE EKLE
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={ProductsStyle.productCard}>
                <SmallWaterSvg />

                <Text
                  style={{
                    ...ProductsStyle.welcomeText2,
                    fontSize: 12,
                    color: '#626D7C',
                    marginTop: 10,
                    alignSelf: 'flex-start',
                  }}>
                  1.5 LT Pet Su 12'li Koli
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
                      ...ProductsStyle.welcomeText2,
                      fontSize: 13,
                      color: '#0D0F1E',
                    }}>
                    100 TL
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('CartStack', {screen: 'Cart'})
                    }
                    style={ProductsStyle.productCardButton}>
                    <Text style={ProductsStyle.productCardButtonText}>
                      SEPETE EKLE
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Products;
