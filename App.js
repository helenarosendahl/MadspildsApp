import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DonationScreen from './components/DonationScreen';
import SearchScreen from './components/SearchScreen';
import UserProfile from './components/UserProfile';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Donation') {
              iconName = 'ios-add-circle-outline';
            } else if (route.name === 'Search') {
              iconName = 'ios-search-outline';
            }
            else if (route.name === 'UserProfile') {
              iconName = 'ios-person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: [
            {
              display: 'flex',
            },
            null,
          ],
        })}
      >
        <Tab.Screen name="Donation" component={DonationScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="UserProfile" component={UserProfile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
