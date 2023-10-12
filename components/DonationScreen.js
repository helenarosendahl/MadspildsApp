// Importering af nødvendige moduler og komponenter
import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { insertDonation } from '../database';
import { GlobalStyles } from '../globalStyling/GlobalStyles'

function DonationScreen() {
  // Initialisér tilstande (states) for fødevarenavn, udløbsdato, mængde og fejlmeddelelse
  const [foodName, setFoodName] = React.useState('');
  const [expiryDate, setExpiryDate] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
  const [latitude, setLatitude] = React.useState('');
  const [longitude, setLongitude] = React.useState('');
  const [error, setError] = React.useState('');

  const handleDonation = () => {
    // Tjek om nogle af de nødvendige felter er tomme
    if (!foodName || !expiryDate || !quantity || !latitude || !longitude) {
      // Validering fejlede, mindst en af felterne er tomme
      setError('Alle felter skal udfyldes');
      return;
    }
    // Indsæt donation i databasen
    insertDonation(foodName, expiryDate, parseInt(quantity, 10), parseFloat(latitude), parseFloat(longitude))
      .then(() => {
        // Succes: Data er blevet indsat
        console.log('Donation er blevet indsat i databasen');
        // Nulstil inputfelter
        setFoodName('');
        setExpiryDate('');
        setQuantity('');
        setLatitude('');
        setLongitude('');
        setError('');
      })
      .catch(error => {
        // Fejl ved indsættelse af data
        console.error('Fejl ved indsættelse af donation i databasen: ', error);
      });
  };



  return (
    // Opret en visning (View) med de angivne stilarter (styles.container)
    <View style={GlobalStyles.container}>

      {/* Vis en overskriftstekst */}
      <Text style = {GlobalStyles.heading}>Doner mad</Text>
      
      {/* Vis fejlmeddelelsestekst, hvis 'error'-variablen er sand, ellers vis ingenting */}
      {error ? <Text style={GlobalStyles.error}>{error}</Text> : null}
      
      <TextInput
        style={GlobalStyles.input}
        placeholder="Fødevarenavn"
        onChangeText={text => setFoodName(text)} // Opdater 'foodName'-tilstanden med den indtastede tekst
      />
      <TextInput
        style={GlobalStyles.input}
        placeholder="Udløbsdato"
        onChangeText={text => setExpiryDate(text)} // Opdater 'expiryDate'-tilstanden med den indtastede tekst
      />
      <TextInput
        style={GlobalStyles.input}
        placeholder="Mængde"
        onChangeText={text => setQuantity(text)} // Opdater 'quantity'-tilstanden med den indtastede tekst
      />
      <TextInput
      style={GlobalStyles.input}
      placeholder="Latitude"
      onChangeText={text => setLatitude(text)}
    />
    <TextInput
      style={GlobalStyles.input}
      placeholder="Longitude"
      onChangeText={text => setLongitude(text)}
    />
    {/* Opret en knap med teksten 'Doner', og når den trykkes, udfører den 'handleDonation'-funktionen */}
    <TouchableOpacity onPress={handleDonation} style={GlobalStyles.button}>
        <Text style={GlobalStyles.buttonText}>Doner</Text>
      </TouchableOpacity>
    </View>
  );
}

// Eksporter komponenten så den kan bruges i App.js
export default DonationScreen;
