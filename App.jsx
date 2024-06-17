import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './navigation/AppStack'; // Adjust the path according to your file structure

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
