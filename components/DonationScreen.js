import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

function DonationScreen() {
  const [foodName, setFoodName] = React.useState('');
  const [expiryDate, setExpiryDate] = React.useState('');
  const [quantity, setQuantity] = React.useState('');

  const handleDonation = () => {
    // Implementer logik for at håndtere donation her
    // Du kan gemme oplysninger i en database eller håndtere det på anden måde.
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
