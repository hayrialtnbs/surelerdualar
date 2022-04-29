import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './Src/Navigation/MainNavigation';

export default function App({ navigation }) {
  return (
    <NavigationContainer >
      <MainNavigation {...navigation} />
    </NavigationContainer>
  );
}
