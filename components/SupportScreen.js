import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GlobalStyles } from '../globalStyling/GlobalStyles'


const SupportScreen = () => {

    const handleSupport = () => {
    
    };


    return (
        <View style={GlobalStyles.container}>
          <Text style={GlobalStyles.heading}>Support center</Text>
    
          <View style={GlobalStyles.buttonContainer}>
            <TouchableOpacity onPress={handleSupport} style={[GlobalStyles.button, styles.button]}>
              <Text style={GlobalStyles.buttonText}>Hvordan fungerer For Godt til Skrot?</Text>
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


export default SupportScreen;
