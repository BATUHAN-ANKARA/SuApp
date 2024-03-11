import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Switch,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ApplicationSettingsStyle} from '../../styles/Styles';

function ApplicationSettings({navigation}) {
  const [isEnabledNotifications, setIsEnabledNotifications] = useState(true);
  const [isEnabledRemind, setIsEnabledRemind] = useState(true);
  const toggleSwitchNotifications = () =>
    setIsEnabledNotifications(previousState => !previousState);
  const toggleSwitchRemind = () =>
    setIsEnabledRemind(previousState => !previousState);
  return (
    <SafeAreaView style={ApplicationSettingsStyle.container}>
      <View style={ApplicationSettingsStyle.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={ApplicationSettingsStyle.headerButtonArea}>
          <Ionicons name="chevron-back" color="#fff" size={25} />
        </TouchableOpacity>
        <Text style={ApplicationSettingsStyle.title}>Uygulama Ayarları</Text>
        <View style={ApplicationSettingsStyle.headerButtonArea}></View>
      </View>

      <View style={ApplicationSettingsStyle.body}>
        <View>
          <View style={ApplicationSettingsStyle.standartCell}>
            <View>
              <Text style={ApplicationSettingsStyle.standartCellText}>
                Bildirimler
              </Text>
              <Text style={ApplicationSettingsStyle.standartCellTextTiny}>
                Kampanyalarla ilgili bilgi almak istiyorum
              </Text>
            </View>

            <Switch
              trackColor={{false: '#767577', true: '#F5F6F9'}}
              thumbColor={isEnabledNotifications ? '#4CC4DE' : '#f4f3f4'}
              ios_backgroundColor="#F5F6F9"
              onValueChange={toggleSwitchNotifications}
              value={isEnabledNotifications}
              style={{borderWidth: 1, borderColor: '#E4E6E9'}}
            />
          </View>

          <View style={ApplicationSettingsStyle.standartCell}>
            <View style={{width: 200}}>
              <Text style={ApplicationSettingsStyle.standartCellText}>
                Hatırlatma
              </Text>
              <Text style={ApplicationSettingsStyle.standartCellTextTiny}>
                Verdiğiniz siparişin sıklığına göre size hatırlatma yapalım
              </Text>
            </View>

            <Switch
              trackColor={{false: '#767577', true: '#F5F6F9'}}
              thumbColor={isEnabledRemind ? '#4CC4DE' : '#f4f3f4'}
              ios_backgroundColor="#F5F6F9"
              onValueChange={toggleSwitchRemind}
              value={isEnabledRemind}
              style={{borderWidth: 1, borderColor: '#E4E6E9'}}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ApplicationSettings;
