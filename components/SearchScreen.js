import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Button } from 'react-native';
import { getAllDonations } from '../database';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

function SearchScreen() {
  // Opret state-variabler til at håndtere donationer, lokations-tilladelse og nuværende lokation
  const [donations, setDonations] = useState([]);
  const [hasLocationPermission, setLocationPermission] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);

  // Funktion til at hente donationer fra databasen
  const loadDonations = async () => {
    try {
      const donationData = await getAllDonations();
      setDonations(donationData);
    } catch (error) {
      console.error('Fejl ved hentning af donationer fra databasen: ', error);
    }
  };

  // Funktion til at anmode om lokationstilladelse
  const getLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      setLocationPermission(true);
    }
  };

  // Funktion til at opdatere brugerens nuværende lokation
  const updateLocation = async () => {
    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Balanced,
    });
    setCurrentLocation(location.coords);
  };

  // Effekt-hook til at håndtere lokationstilladelse ved komponentmontage
  useEffect(() => {
    getLocationPermission();
  }, []);

  // Effekt-hook til at opdatere lokation og hente donationer ved komponentmontage
  useEffect(() => {
    updateLocation();
    loadDonations();
  }, []);

  return (
    <View style={styles.container}>
      {/* Overskrift */}
      <Text style={styles.heading}>Find Mad</Text>
      {/* Opdateringsknap */}
      <Button title="Opdater" onPress={loadDonations} />
      {/* En rulleliste (ScrollView) til at vise donationer */}
      <ScrollView style={styles.scrollView}>
        {/* Mapper igennem hver donation i "donations" og genererer en visuel repræsentation for hver */}
        {donations.map((item) => (
          <View key={item.id} style={styles.donationItem}>
            <Text>Fødevarenavn: {item.foodName}</Text>
            <Text>Udløbsdato: {item.expiryDate}</Text>
            <Text>Mængde: {item.quantity}</Text>
            <Text>Latitude: {item.latitude}</Text>
            <Text>Longitude: {item.longitude}</Text>
          </View>
        ))}
      </ScrollView>
      {/* Vis kortet, hvis der er lokationstilladelse og brugerens lokation er tilgængelig */}
      {hasLocationPermission && currentLocation && (
        <MapView
          provider="google" // Afhængig af kortudbyderen, du bruger
          style={styles.map}
          initialRegion={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {/* Tilføj markører for donationer på kortet */}
          {donations.map((item) => (
            <Marker
              key={item.id}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
              title={item.foodName}
            />
          ))}
        </MapView>
      )}
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
