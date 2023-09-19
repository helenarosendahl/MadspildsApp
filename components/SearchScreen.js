import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Button } from 'react-native';
import { getAllDonations } from '../database';

function SearchScreen() {
  const [donations, setDonations] = React.useState([]);

  const loadDonations = () => {
    // Hent alle donationer fra databasen
    getAllDonations()
      .then(data => {
        setDonations(data);
      })
      .catch(error => {
        console.error('Fejl ved hentning af donationer fra databasen: ', error);
      });
  };

  useEffect(() => {
    // Indlæs donationer ved første indlæsning af skærmen
    loadDonations();
  }, []);

  return (
    <View style={styles.container}>
      <Text style = {styles.heading}>Find Mad</Text>
      <Button title="Opdater" onPress={loadDonations} />
      <ScrollView style={styles.scrollView}>
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

export default SearchScreen;
