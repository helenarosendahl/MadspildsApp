import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  settingscontainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#00563B',
    textAlign: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#00563B',
    color: 'white',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  set_button: {
    backgroundColor: 'white',
    color: 'white',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'white', // Tekstfarve for knappen
    textAlign: 'center',
    fontSize: 15,
  },
  set_buttonText: {
    color: 'black', // Tekstfarve for knappen
    textAlign: 'center',
    fontSize: 18,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 30, // Tilføjer topmargin
    marginLeft: 20, // Tilføjer venstremargin
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default GlobalStyles;
