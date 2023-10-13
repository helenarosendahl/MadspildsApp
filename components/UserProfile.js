// Importering af nødvendige moduler og komponenter
import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { deleteAllDonations } from '../database'; 
import { GlobalStyles } from '../globalStyling/GlobalStyles'
import { useNavigation } from '@react-navigation/native';


function UserProfile() {
  const navigation = useNavigation();

  // Simuleret brugerdata
  const userData = {
    username: 'bruger123',
    email: 'bruger@example.com',
  };

  const handleSupportCenter = () => {
    navigation.navigate('SupportScreen')
  };

  const handleSettings = () => {
  navigation.navigate('SettingsScreen')
  };
  

  return (
    <View style={GlobalStyles.container}>

      <Text style={GlobalStyles.heading}>Min profil</Text>

      <View style={styles.userInfoContainer}>
        <Text style={styles.userInfoText}>Brugernavn: {userData.username}</Text>
        <Text style={styles.userInfoText}>E-mail: {userData.email}</Text>
      </View>

      <View style={GlobalStyles.buttonContainer}>
        <TouchableOpacity onPress={handleSupportCenter} style={[GlobalStyles.button, styles.button]}>
          <View style={styles.buttonContent}>
            <Ionicons name="ios-help-circle" size={24} color="white" />
            <Text style={GlobalStyles.buttonText}>Support center</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSettings} style={[GlobalStyles.button, styles.button]}>
          <View style={styles.buttonContent}>
            <Ionicons name="ios-settings" size={24} color="white" />
            <Text style={GlobalStyles.buttonText}>Indstillinger</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    marginBottom: 15, // Juster denne margin efter behov
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfoContainer: {
    marginBottom: 20, // Juster denne margin efter behov for mere afstand
  },
  userInfoText: {
    fontSize: 17,
  },
});


// Eksporter komponenten så den kan bruges i App.js
export default UserProfile;

