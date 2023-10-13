// Importering af nødvendige moduler og komponenter
import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
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
  
  };

  const handleSettings = () => {
  navigation.navigate('SettingsScreen')
  };

  // Funktion til at slette alle donationer
  const handleDeleteDonations = () => {
    deleteAllDonations()
      .then(() => {
        // Succes: Alle donationer er slettet
        console.log('Alle donationer er slettet fra databasen');
      })
      .catch(error => {
        // Fejl ved sletning af donationer
        console.error('Fejl ved sletning af donationer fra databasen: ', error);
      });
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
          <Text style={GlobalStyles.buttonText}>Supportcenter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSettings} style={[GlobalStyles.button, styles.button]}>
        <Text style={GlobalStyles.buttonText}>Indstillinger</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    marginBottom: 15, // Juster denne margin efter behov
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
