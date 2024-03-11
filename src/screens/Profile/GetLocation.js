import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Platform,
  Button,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const GeoLocation = ({navigation}) => {
  //   const [location, setLocation] = useState(false);

  //   const requestLocationPermission = async () => {
  //     try {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //         {
  //           title: 'Geolocation Permission',
  //           message: 'Can we access your location?',
  //           buttonNeutral: 'Ask Me Later',
  //           buttonNegative: 'Cancel',
  //           buttonPositive: 'OK',
  //         },
  //       );
  //       console.log('granted', granted);
  //       if (granted === 'granted') {
  //         console.log('You can use Geolocation');
  //         return true;
  //       } else {
  //         console.log('You cannot use Geolocation');
  //         return false;
  //       }
  //     } catch (err) {
  //       return false;
  //     }
  //   };

  //   const getLocation = () => {
  //     const result = requestLocationPermission();
  //     result.then(res => {
  //       console.log('res is:', res);
  //       if (res) {
  //         Geolocation.getCurrentPosition(
  //           position => {
  //             console.log(position);
  //             setLocation(position);
  //           },
  //           error => {
  //             // See error code charts below.
  //             console.log(error.code, error.message);
  //             setLocation(false);
  //           },
  //           {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  //         );
  //       }
  //     });
  //     console.log(location);
  //   };
  //   useEffect(() => {
  //     if (Platform.OS === 'ios') {
  //       Geolocation.requestAuthorization('always');
  //     }
  //   }, []);

  const [currentLongitude, setCurrentLongitude] = useState('...');
  const [currentLatitude, setCurrentLatitude] = useState('...');
  const [locationStatus, setLocationStatus] = useState('');

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
            //To Check, If Permission is granted
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
        </View>
      </View>
    </View>
  );
};
export default GeoLocation;

const styles = StyleSheet.create({});
