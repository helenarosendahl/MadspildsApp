import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GlobalStyles } from '../globalStyling/GlobalStyles'
import { Ionicons } from 'react-native-vector-icons';


const SupportScreen = () => {

    const handleSupport = () => {
    
    };

    const handleMyOrder = () => {
    
    };


    return (
        <View style={[GlobalStyles.container, GlobalStyles.settingscontainer]}>
    
          <View style={GlobalStyles.buttonContainer}>
            
            <TouchableOpacity onPress={handleSupport} style={[GlobalStyles.set_button, styles.button]}>
              <View style={GlobalStyles.buttonContent}>
                <Ionicons name="information-circle-outline" size={24} color="#00563B" />
                <Text style={GlobalStyles.set_buttonText}>Sådan fungerer For Godt til Skrot</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleMyOrder} style={[GlobalStyles.set_button, styles.button]}>
              <View style={GlobalStyles.buttonContent}>
                <Ionicons name="card-outline" size={24} color="#00563B" />
                <Text style={GlobalStyles.set_buttonText}>Min bestilling</Text>
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


export default SupportScreen;
