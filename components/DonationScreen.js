// Importering af nødvendige moduler og komponenter
import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { insertDonation } from '../database';

function DonationScreen() {
  // Initialisér tilstande (states) for fødevarenavn, udløbsdato, mængde og fejlmeddelelse
  const [foodName, setFoodName] = React.useState('');
  const [expiryDate, setExpiryDate] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
  const [error, setError] = React.useState('');

  const handleDonation = () => {
    // Tjek om nogle af de nødvendige felter er tomme
    if (!foodName || !expiryDate || !quantity) {
      // Validering fejlede, mindst en af felterne er tomme
      setError('Alle felter skal udfyldes');
      return;
    }
    // Indsæt donation i databasen
    insertDonation(foodName, expiryDate, parseInt(quantity, 10))
      .then(() => {
        // Succes: Data er blevet indsat
        console.log('Donation er blevet indsat i databasen');
        // Nulstil inputfelter
        setFoodName('');
        setExpiryDate('');
        setQuantity('');
        setError('');
      })
      .catch(error => {
        // Fejl ved indsættelse af data
        console.error('Fejl ved indsættelse af donation i databasen: ', error);
      });
  };

  return (
    // Opret en visning (View) med de angivne stilarter (styles.container)
    <View style={styles.container}>

      {/* Vis en overskriftstekst */}
      <Text style = {styles.heading}>Doner mad</Text>
      
      {/* Vis fejlmeddelelsestekst, hvis 'error'-variablen er sand, ellers vis ingenting */}
      {error ? <Text style={styles.error}>{error}</Text> : null}
      
      <TextInput
        style={styles.input}
        placeholder="Fødevarenavn"
        onChangeText={text => setFoodName(text)} // Opdater 'foodName'-tilstanden med den indtastede tekst
      />
      <TextInput
        style={styles.input}
        placeholder="Udløbsdato"
        onChangeText={text => setExpiryDate(text)} // Opdater 'expiryDate'-tilstanden med den indtastede tekst
      />
      <TextInput
        style={styles.input}
        placeholder="Mængde"
        onChangeText={text => setQuantity(text)} // Opdater 'quantity'-tilstanden med den indtastede tekst
      />
    {/* Opret en knap med teksten 'Doner', og når den trykkes, udfører den 'handleDonation'-funktionen */}
      <Button title="Doner" onPress={handleDonation} />
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
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
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
export default DonationScreen;
