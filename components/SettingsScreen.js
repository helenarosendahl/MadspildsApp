import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { GlobalStyles } from '../globalStyling/GlobalStyles'
import { deleteAllDonations } from '../database';
import { Ionicons } from 'react-native-vector-icons';

const SettingsScreen = () => {

    const handleInformation = () => {
    
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
        <View style={[GlobalStyles.container, GlobalStyles.settingscontainer]}>
          <View style={GlobalStyles.buttonContainer}>

            <TouchableOpacity onPress={handleInformation} style={[GlobalStyles.set_button, styles.button]}>
              <View style={GlobalStyles.buttonContent}>
              <Ionicons name="person-outline" size={24} color="#00563B" />
              <Text style={GlobalStyles.set_buttonText}>Kontooplysninger</Text>
              </View>
            </TouchableOpacity>

           

            <TouchableOpacity onPress={handleDeleteDonations} style={[GlobalStyles.set_button, styles.button]}>
            <View style={GlobalStyles.buttonContent}>
              <Ionicons name="trash-outline" size={24} color="#00563B" />
              <Text style={GlobalStyles.set_buttonText}>Slet alle dine donationer</Text>
              </View>
            </TouchableOpacity>
            
          </View>
        </View>
      );
};

const styles = StyleSheet.create({
    button: {
      marginBottom: 15, // Juster denne margin efter behov
    },
  });


export default SettingsScreen;
