import React, {useRef, useState, useEffect} from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import slides from '../../slides';
import OnboardingItem from '../components/OnboardingItem';
import Paginator from '../components/Paginator';
import {useNavigation, CommonActions} from '@react-navigation/native';

const OnBoardScreen = ({navigation}) => {
  const [buttonName, setButtonName] = useState('');
  const [mainText, setMainText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
    }
    navigate();
  };

  useEffect(() => {
    if (currentIndex === 2) {
      setButtonName('Kayıt Ol');
      setMainText('Suyunuz en kısa sürede kapınızda!');
    } else {
      setButtonName('Hemen Siparişini Ver');
    }
    if (currentIndex === 1) {
      setMainText('İster Evine, İster İş Yerine');
    }
    if (currentIndex === 0) {
      setMainText('Değer Su Nedir ?');
    }
  }, [currentIndex]);

  const navigate = () => {
    if (buttonName === 'Kayıt Ol') {
      navigation.replace('AuthStack');
    } else {
      console.log('Navigate fonksiyonu => Buton adı kayıt ol değil');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>

      <View style={styles.body_container}>
        <FlatList
          data={slides}
          renderItem={({item}) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />

        <Paginator data={slides} scrollX={scrollX} />

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.mainText}>{mainText}</Text>
          <Text style={styles.secondaryText}>
            Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
            metinlerdir.
          </Text>
        </View>
      </View>

      <View style={styles.footer_container}>
        <TouchableOpacity onPress={scrollTo}>
          <View style={styles.button}>
            <Text style={styles.button_text}>{buttonName}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AuthStack', {
              screen: 'RegisterVerificationStep2',
            })
          }
          style={{
            height: 20,
            marginTop: 20,
            alignSelf: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: '#ABABAB',
              marginRight: 5,
              fontFamily: 'GothamRounded-Book',
              fontSize: 14,
            }}>
            Zaten hesabınız mı var?
          </Text>
          <Text
            style={{
              color: '#333333',
              fontFamily: 'GothamRounded-Bold',
              fontSize: 14,
            }}>
            Giriş Yap
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDFCFF',
  },
  mainText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 20,
    color: '#626D7C',
    textAlign: 'center',
  },
  secondaryText: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 14,
    color: '#626D7C',
    textAlign: 'center',
    margin: 20,
  },
  header: {
    flex: 0.2,
    marginBottom: 20,
    marginTop: 20,
    justifyContent: 'center',
  },
  body_container: {
    flex: 1,
    marginBottom: 20,
    alignItems: 'center',
  },
  footer_container: {
    flex: 0.2,
    marginBottom: 20,
    margin: 20,
  },
  button_text: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'GothamRounded-Bold',
  },
  button: {
    height: 45,
    backgroundColor: '#4CC4DE',
    marginTop: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
});
