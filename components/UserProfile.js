import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

function UserProfile() {
  // Simuleret brugerdata (erstat med din databaselogik)
  const userData = {
    username: 'bruger123',
    email: 'bruger@example.com',
  };

  const handleEditProfile = () => {
    // Implementer redigering af brugerprofil her
  };

  const handleChangePassword = () => {
    // Implementer ændring af adgangskode her
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Min Profil</Text>
      <Text>Brugernavn: {userData.username}</Text>
      <Text>E-mail: {userData.email}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Rediger Profil" onPress={handleEditProfile} />
        <Button title="Skift Adgangskode" onPress={handleChangePassword} />
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
