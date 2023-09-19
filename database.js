import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mydb.db');

// Opret en tabel til donationer, hvis den ikke allerede findes
db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS donations (id INTEGER PRIMARY KEY AUTOINCREMENT, foodName TEXT, expiryDate TEXT, quantity INTEGER)',
    [],
    () => console.log('Donations table created'),
    (_, error) => console.error('Fejl ved oprettelse af donations tabel: ', error)
  );
});

// ...

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

// ...

// Funktion til at indsætte en donation i databasen
export const insertDonation = (foodName, expiryDate, quantity) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO donations (foodName, expiryDate, quantity) VALUES (?, ?, ?)',
        [foodName, expiryDate, quantity],
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
