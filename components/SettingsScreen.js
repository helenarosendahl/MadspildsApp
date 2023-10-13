import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { GlobalStyles } from '../globalStyling/GlobalStyles'
import { deleteAllDonations } from '../database';

const SettingsScreen = () => {

    const handleEditProfile = () => {
    
    };
  
    const handleChangePassword = () => {
    
    };

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
          <Text style={GlobalStyles.heading}>Indstillinger</Text>
    
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
          </View>
        </View>
      );
};

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


export default SettingsScreen;
