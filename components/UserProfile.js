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
    <View style={[GlobalStyles.container, GlobalStyles.settingscontainer]}>

      <Text style={[GlobalStyles.heading, styles.centerText]}>Min profil</Text>

      <View style={styles.userInfoContainer}>
        <Text style={styles.userInfoText}>Brugernavn: {userData.username}</Text>
        <Text style={styles.userInfoText}>E-mail: {userData.email}</Text>
      </View>

      <View style={[GlobalStyles.buttonContainer, styles.buttonContainer]}>
        <TouchableOpacity onPress={handleSupportCenter} style={[GlobalStyles.set_button, styles.button]}>
          <View style={GlobalStyles.buttonContent}>
            <Ionicons name="help-circle-outline" size={24} color="#00563B" />
            <Text style={GlobalStyles.set_buttonText}>Support center</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSettings} style={[GlobalStyles.set_button, styles.button]}>
          <View style={GlobalStyles.buttonContent}>
            <Ionicons name="settings-outline" size={24} color="#00563B" />
            <Text style={GlobalStyles.set_buttonText}>Indstillinger</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    marginLeft: 0, // Fjern venstremargin for at placere knapperne helt til venstre
  },
  centerText: {
    textAlign: 'center', // Behold teksten i midten
  },
  userInfoContainer: {
    marginBottom: 20, // Juster denne margin efter behov for mere afstand
  },
  userInfoText: {
    fontSize: 17,
  },
  button: {
    marginBottom: 15,
  },
  
});


// Eksporter komponenten så den kan bruges i App.js
export default UserProfile;

