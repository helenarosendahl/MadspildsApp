import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mydb.db');


// Opret tabellen igen med alle de nødvendige kolonner
db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS donations (id INTEGER PRIMARY KEY AUTOINCREMENT, foodName TEXT, expiryDate TEXT, quantity INTEGER, latitude REAL, longitude REAL)',
    [],
    () => console.log('Donations table oprettet'),
    (_, error) => console.error('Fejl ved oprettelse af donations tabel: ', error)
  );
});

// Funktion til at slette alle donationer fra databasen
export const deleteAllDonations = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM donations',
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};



// Funktion til at indsætte en donation i databasen
export const insertDonation = (foodName, expiryDate, quantity, latitude, longitude) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO donations (foodName, expiryDate, quantity, latitude, longitude) VALUES (?, ?, ?, ?, ?)',
        [foodName, expiryDate, quantity, latitude, longitude],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

// Funktion til at hente alle donationer fra databasen
export const getAllDonations = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM donations',
        [],
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error)
      );
    });
  });
};
