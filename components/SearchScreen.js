import React, { useEffect, useState,  } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { getAllDonations } from '../database';
import { GlobalStyles } from '../globalStyling/GlobalStyles'
import { useNavigation } from '@react-navigation/native';

function SearchScreen() {
  const navigation = useNavigation();

  const handleMaps = () => {
    navigation.navigate('MapScreen')
  };

  // Opret state-variabler til at håndtere donationer, lokations-tilladelse og nuværende lokation
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    loadDonations();
  }, []);


  // Funktion til at hente donationer fra databasen
  const loadDonations = async () => {
    try {
      const donationData = await getAllDonations();
      setDonations(donationData);
    } catch (error) {
      console.error('Fejl ved hentning af donationer fra databasen: ', error);
    }
  };

 
  return (
    <View style={GlobalStyles.container}>
      {/* Overskrift */}
      <Text style={GlobalStyles.heading}>Find Mad</Text>
      {/* Opdateringsknap */}
      <TouchableOpacity style={GlobalStyles.button} onPress={loadDonations}>
        <Text style={GlobalStyles.buttonText}>Opdater</Text>
      </TouchableOpacity>
      {/* Maps knap */}
      <TouchableOpacity style={GlobalStyles.button} onPress={handleMaps}>
        <Text style={GlobalStyles.buttonText}>Kort</Text>
      </TouchableOpacity>
      {/* En rulleliste (ScrollView) til at vise donationer */}
      <ScrollView style={styles.scrollView}>
        {/* Mapper igennem hver donation i "donations" og genererer en visuel repræsentation for hver */}
        {donations.map((item) => (
          <View key={item.id} style={styles.donationItem}>
            <Text>Fødevarenavn: {item.foodName}</Text>
            <Text>Udløbsdato: {item.expiryDate}</Text>
            <Text>Mængde: {item.quantity}</Text>
            
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

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
  },
  map: { // Tilpas dette efter dine ønskede kortstil
    width: 300,
    height: 300,
    marginVertical: 10,
  },
  scrollView: {
    width: '80%',
  },
});

export default SearchScreen;
