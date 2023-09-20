// Importering af nødvendige moduler og komponenter
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Button } from 'react-native';
import { getAllDonations } from '../database';

function SearchScreen() {
  // Opret en tilstand for donations, der vil indeholde data fra databasen
  const [donations, setDonations] = React.useState([]);

  // Funktionen loadDonations henter data fra databasen og opdaterer donations-tilstanden
  const loadDonations = () => {
    // Hent alle donationer fra databasen ved at kalde getAllDonations-funktionen
    getAllDonations()
      .then(data => {
       // Opdater donations-tilstanden med de modtagne data fra databasen
        setDonations(data);
      })
      .catch(error => {
        console.error('Fejl ved hentning af donationer fra databasen: ', error);
      });
  };

  // Brug useEffect til at udføre loadDonations-funktionen ved første indlæsning af skærmen
  useEffect(() => {
    // Indlæs donationer ved første indlæsning af skærmen
    loadDonations();
  }, []); // Denne tomme afhængighedsliste betyder, at useEffect kun kører ved første indlæsning

  return (
    <View style={styles.container}>
       {/* Overskrift */}
      <Text style = {styles.heading}>Find Mad</Text>
        {/* Opdateringsknap */}
      <Button title="Opdater" onPress={loadDonations} />
        {/* En rulleliste (ScrollView) til at vise donationer */}
      <ScrollView style={styles.scrollView}>
         {/* Mapper igennem hver donation i "donations" og genererer en visuel repræsentation for hver */}
        {donations.map(item => (
          <View key={item.id} style={styles.donationItem}>
            <Text>Fødevarenavn: <Text>{item.foodName}</Text></Text>
            <Text>Udløbsdato: <Text>{item.expiryDate}</Text></Text>
            <Text>Mængde: <Text>{item.quantity}</Text></Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  donationItem: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  heading: {
    fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black', 
        textAlign: 'center', 
  }
});

// Eksporter komponenten så den kan bruges i App.js
export default SearchScreen;
