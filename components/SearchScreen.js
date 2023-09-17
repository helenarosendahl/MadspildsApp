import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

function SearchScreen() {
  const [donations, setDonations] = React.useState([]);

  // Simuleret data for donationer (erstat med din databaselogik)
  const mockDonations = [
    { id: '1', foodName: 'Æbler', expiryDate: '2023-10-15', quantity: '5' },
    { id: '2', foodName: 'Brød', expiryDate: '2023-09-20', quantity: '2' },
    // Tilføj flere donationer efter behov
  ];

  React.useEffect(() => {
    // Hent donationer fra databasen eller en anden kilde
    setDonations(mockDonations);
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
