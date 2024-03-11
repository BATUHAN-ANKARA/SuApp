import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {ScrollView} from 'react-native-gesture-handler';
import {Modalize} from 'react-native-modalize';
import Ionicons from 'react-native-vector-icons/Ionicons';

const GeoLocation = ({navigation}) => {
  const [currentLongitude, setCurrentLongitude] = useState('...');
  const [currentLatitude, setCurrentLatitude] = useState('...');
  const [locationStatus, setLocationStatus] = useState('');

  const invoiceModalRef = useRef();
  const [toggle, setToggle] = useState(true);

  const invoiceAddModal = async () => {
    invoiceModalRef.current?.open();
  };
  const invoiceAddModalClose = async () => {
    invoiceModalRef.current?.close();
  };

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getOneTimeLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch();
    };
  }, []);

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        setLocationStatus('You are Here');

        //getting the Longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Longitude state
        setCurrentLatitude(currentLatitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.container}>
        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 16,
          }}>
          Longitude: {currentLongitude}
        </Text>

        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 16,
          }}>
          Latitude: {currentLatitude}
        </Text>

        <View style={{marginTop: 20}}>
          <Button title="Yenile" onPress={getOneTimeLocation} />
        </View>

        <View style={{marginTop: 20}}>
          <Button
            title="Devam Et"
            onPress={() => navigation.navigate('NewAddress')}
          />
        </View>

        <TouchableOpacity
          onPress={invoiceAddModal}
          style={{marginTop: 20, alignSelf: 'center'}}>
          <Text>Modal Açtır</Text>
        </TouchableOpacity>
      </View>

      <Modalize ref={invoiceModalRef} adjustToContentHeight={toggle}>
        <View style={styles.modalContent}>
          <ScrollView style={{padding: 30}}>
            <View style={styles.fullNameArea}>
              <Text style={styles.inputAreaTitle}>Adınız ve soyadınız *</Text>
              <TextInput style={styles.textInput} />
            </View>

            <View style={styles.row}>
              <TouchableOpacity style={styles.addressTypeArea}>
                <Ionicons name="home" size={20} color="#626D7C" />
                <Ionicons name="chevron-down" size={20} color="#626D7C" />
              </TouchableOpacity>
              <View style={styles.addressTitleArea}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Adres başlığı *"
                />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.cityArea}>
                <Text
                  style={{
                    ...styles.inputAreaTitle,
                    backgroundColor: 'transparent',
                  }}>
                  İl
                </Text>
                <Text style={styles.cityAreaText}>Bursa</Text>
              </View>
              <View style={styles.cityArea}>
                <Text
                  style={{
                    ...styles.inputAreaTitle,
                    backgroundColor: 'transparent',
                  }}>
                  İlçe
                </Text>
                <Text style={styles.cityAreaText}>Nilüfer</Text>
              </View>
            </View>

            <View style={styles.row}>
              <TouchableOpacity style={styles.neighbourhoodArea}>
                <Text style={styles.inputAreaTitle}>Mahalle *</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.neighbourhoodArea}>
                <Text style={styles.inputAreaTitle}>Cadde ve sokak adı *</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <View style={styles.houseDetailArea}>
                <Text style={styles.inputAreaTitle}>Bina no *</Text>
                <TextInput style={styles.textInput} />
              </View>
              <View style={styles.houseDetailArea}>
                <Text style={styles.inputAreaTitle}>Kat *</Text>
                <TextInput style={styles.textInput} />
              </View>
              <View style={styles.houseDetailArea}>
                <Text style={styles.inputAreaTitle}>Daire no *</Text>
                <TextInput style={styles.textInput} />
              </View>
            </View>

            <View style={styles.addressDetailArea}>
              <TextInput
                style={{...styles.textInput, height: null}}
                placeholder="Ayrıntılı adres tarifi yazınız *"
                multiline={true}
              />
            </View>

            <TouchableOpacity
              onPress={invoiceAddModalClose}
              style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Kaydet</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modalize>
    </View>
  );
};
export default GeoLocation;

const styles = StyleSheet.create({
  modalContent: {
    height: Dimensions.get('screen').height * 0.6,
    width: Dimensions.get('screen').width,
    backgroundColor: '#fff',
  },
  fullNameArea: {
    width: '100%',
    height: 50,
    alignSelf: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#999999',
    padding: 10,
  },
  addressTypeArea: {
    width: '34%',
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#999999',
    marginTop: 20,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addressTitleArea: {
    width: '62%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#999999',
    marginTop: 20,
    padding: 10,
  },
  cityArea: {
    width: '48%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  neighbourhoodArea: {
    width: '48%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#999999',
    marginTop: 20,
  },
  houseDetailArea: {
    width: '30%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#999999',
    marginTop: 20,
    padding: 10,
  },
  addressDetailArea: {
    width: '100%',
    alignSelf: 'center',
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#999999',
    marginTop: 20,
    padding: 10,
    height: 80,
  },
  saveButton: {
    width: '50%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#4CC4DE',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 80,
  },
  saveButtonText: {
    fontFamily: 'GothamRounded-Medium',
    color: '#fff',
    fontSize: 16,
  },
  inputAreaTitle: {
    position: 'absolute',
    top: -10,
    lineHeight: 20,
    fontFamily: 'GothamRounded-Medium',
    fontSize: 12,
    color: '#626D7C',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    left: 5,
  },
  textInput: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 14,
    width: '100%',
    height: 30,
  },
  cityAreaText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 14,
    color: '#626D7C',
  },
});
