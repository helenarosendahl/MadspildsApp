// Importering af nødvendige moduler og komponenter
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DonationScreen from './components/DonationScreen';
import SearchScreen from './components/SearchScreen';
import UserProfile from './components/UserProfile';
import SettingsScreen from './components/SettingsScreen';

const Tab = createBottomTabNavigator();
const SettingsStack = createStackNavigator();

// Opret stakskærme til indstillinger
const SettingsStackScreen = () => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen} />
    {/* Tilføj flere indstillinger her efter behov */}
  </SettingsStack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Donation') {
              iconName = 'ios-add-circle-outline';
            } else if (route.name === 'Søg') {
              iconName = 'ios-search-outline';
            }
            else if (route.name === 'Mig') {
              iconName = 'ios-person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#00563B',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: [
            {
              display: 'flex',
            },
            null,
          ],
        })}
      >
        {/* Definér skærme og tilknyttede komponenter */}
        <Tab.Screen name="Donation" component={DonationScreen} />
        <Tab.Screen name="Søg" component={SearchScreen} />
        <Tab.Screen name="Mig" component={UserProfile} />
        <Tab.Screen name="Indstillinger" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
