import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { getAllDonations } from '../database';

function SearchScreen() {
  const [donations, setDonations] = React.useState([]);

  useEffect(() => {
    // Hent alle donationer fra databasen ved indlæsning af skærmen
    getAllDonations()
      .then(data => {
        setDonations(data);
      })
      .catch(error => {
        console.error('Fejl ved hentning af donationer fra databasen: ', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Find Mad</Text>
      <FlatList
        data={donations}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.donationItem}>
            <Text>Fødevarenavn: {item.foodName}</Text>
            <Text>Udløbsdato: {item.expiryDate}</Text>
            <Text>Mængde: {item.quantity}</Text>
          </View>
        )}
      />
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
});

export default SearchScreen;
