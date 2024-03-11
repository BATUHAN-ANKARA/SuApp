import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SakaSvg from '../../../assets/svg/SakaSvg';
import {LastOrdersStyle} from '../../styles/Styles';

const MyOrders = ({navigation}) => {
  const [cartEmpty, setCartEmpty] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerButtonArea}>
          <Ionicons name="chevron-back" color="#fff" size={25} />
        </TouchableOpacity>
        <Text style={styles.title}>Siparişlerim</Text>
        <View style={styles.headerButtonArea}></View>
      </View>

      <View style={styles.parentScroll}>
        <View style={styles.body}>
          <View style={{}}>
            {cartEmpty ? (
              <View style={{alignSelf: 'center', marginTop: 30}}>
                <Text style={styles.emptyText}>Henüz sipariş vermediniz.</Text>
              </View>
            ) : (
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollBody}>
                <View style={styles.standartCell}>
                  <View style={styles.row}>
                    <View style={styles.dealerLogoBox}>
                      <SakaSvg />
                    </View>

                    <View style={LastOrdersStyle.textArea}>
                      <Text style={LastOrdersStyle.adressText}>
                        Ev (Odunluk Mah.)
                      </Text>
                      <Text style={LastOrdersStyle.timeText}>
                        Sipariş Tarihi
                      </Text>
                      <Text style={LastOrdersStyle.time}>
                        14 Ağustos Cumartesi
                      </Text>
                    </View>
                  </View>

                  <View style={{}}>
                    <Text style={LastOrdersStyle.costText}>392,00 TL</Text>
                  </View>
                </View>
                <View style={LastOrdersStyle.standartCell}>
                  <View style={LastOrdersStyle.row}>
                    <View style={LastOrdersStyle.dealerLogoBox}>
                      <SakaSvg />
                    </View>

                    <View style={styles.textArea}>
                      <Text style={styles.adressText}>Ev (Odunluk Mah.)</Text>
                      <Text style={styles.timeText}>Sipariş Tarihi</Text>
                      <Text style={styles.time}>14 Ağustos Cumartesi</Text>
                    </View>
                  </View>

                  <View style={{}}>
                    <Text style={styles.costText}>392,00 TL</Text>
                  </View>
                </View>
              </ScrollView>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyOrders;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4CC4DE',
    position: 'relative',
  },
  header: {
    flex: 0.12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#4CC4DE',
  },
  title: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 20,
    color: '#fff',
  },
  headerButtonArea: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: '#E8F9FD',
    flex: 1,
  },
  parentScroll: {
    flex: 1,
    backgroundColor: '#E8F9FD',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 25,
  },
  scrollBody: {
    height: '100%',
  },
  standartCell: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    width: '100%',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#E4E6E9',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dealerLogoBox: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F6F9',
    borderWidth: 1,
    borderColor: '#E4E6E9',
    borderRadius: 12,
  },
  textArea: {
    marginLeft: 15,
    justifyContent: 'space-evenly',
    height: 60,
  },
  adressText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 13,
    color: '#626D7C',
  },
  timeText: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 10,
    color: '#626D7C',
  },
  time: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 10,
    color: '#0D0F1E',
  },
  costText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 13,
    color: '#4CC4DE',
  },
  emptyText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 16,
    color: '#626D7C',
  },
});
