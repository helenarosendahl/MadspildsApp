import React, { useEffect, useState,  } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { getAllDonations } from '../database';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { GlobalStyles } from '../globalStyling/GlobalStyles'

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
    <View style={GlobalStyles.container}>
     
      
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

          {/* Tilføj markør for brugerens placering */}
          <Marker
            coordinate={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
            title="Min placering"
            pinColor="blue" // Justér farven efter ønske
          />

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
  
  map: { // Tilpas dette efter dine ønskede kortstil
    width: '100%',
    height: '100%',
    marginVertical: 10,
  },
});

export default SearchScreen;