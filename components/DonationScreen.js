import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { insertDonation } from '../database';

function DonationScreen() {
  const [foodName, setFoodName] = React.useState('');
  const [expiryDate, setExpiryDate] = React.useState('');
  const [quantity, setQuantity] = React.useState('');

  const handleDonation = () => {
    // Indsæt donation i databasen
    insertDonation(foodName, expiryDate, parseInt(quantity, 10))
      .then(() => {
        // Succes: Data er blevet indsat
        console.log('Donation er blevet indsat i databasen');
        // Nulstil inputfelter
        setFoodName('');
        setExpiryDate('');
        setQuantity('');
      })
      .catch(error => {
        // Fejl ved indsættelse af data
        console.error('Fejl ved indsættelse af donation i databasen: ', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Doner Mad</Text>
      <TextInput
        style={styles.input}
        placeholder="Fødevarenavn"
        onChangeText={text => setFoodName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Udløbsdato"
        onChangeText={text => setExpiryDate(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mængde"
        onChangeText={text => setQuantity(text)}
      />
      <Button title="Doner" onPress={handleDonation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default DonationScreen;
