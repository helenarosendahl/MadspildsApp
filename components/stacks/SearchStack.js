import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../SearchScreen';
import MapsScreen from '../MapScreen';

const Stack = createStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MapScreen" component={MapsScreen} />
    </Stack.Navigator>
  );
};

export default SearchStack;
