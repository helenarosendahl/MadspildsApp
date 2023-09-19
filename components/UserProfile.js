import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { deleteAllDonations } from '../database'; 


function UserProfile() {
  // Simuleret brugerdata
  const userData = {
    username: 'bruger123',
    email: 'bruger@example.com',
  };

  const handleEditProfile = () => {
    
  };

  const handleChangePassword = () => {
  
  };

  const handleDeleteDonations = () => {
    deleteAllDonations()
      .then(() => {
        // Succes: Alle donationer er slettet
        console.log('Alle donationer er slettet fra databasen');
      })
      .catch(error => {
        // Fejl ved sletning af donationer
        console.error('Fejl ved sletning af donationer fra databasen: ', error);
      });
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Min Profil</Text>
      <Text>Brugernavn: {userData.username}</Text>
      <Text>E-mail: {userData.email}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Rediger Profil" onPress={handleEditProfile} />
        <Button title="Skift Adgangskode" onPress={handleChangePassword} />
        <Button title="Slet alle dine donationer" onPress={handleDeleteDonations} />
      </View>

      {/* Tidligere donationer og anmodninger kan tilføjes her */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default UserProfile;
