// Importering af nødvendige moduler og komponenter
import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { deleteAllDonations } from '../database'; 
import { GlobalStyles } from '../globalStyling/GlobalStyles'


function UserProfile() {
  // Simuleret brugerdata
  const userData = {
    username: 'bruger123',
    email: 'bruger@example.com',
  };

  const handleEditProfile = () => {
    
  };

  const handleChangePassword = () => {
  
  };
  const handleSupportCenter = () => {
  
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
        <TouchableOpacity onPress={handleEditProfile} style={[GlobalStyles.button, styles.button]}>
          <Text style={GlobalStyles.buttonText}>Rediger Profil</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleChangePassword} style={[GlobalStyles.button, styles.button]}>
          <Text style={GlobalStyles.buttonText}>Skift Adgangskode</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDeleteDonations} style={[GlobalStyles.button, styles.button]}>
          <Text style={GlobalStyles.buttonText}>Slet alle dine donationer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSupportCenter} style={[GlobalStyles.button, styles.button]}>
          <Text style={GlobalStyles.buttonText}>Supportcenter</Text>
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
    fontSize: 16,
  },
});


// Eksporter komponenten så den kan bruges i App.js
export default UserProfile;
