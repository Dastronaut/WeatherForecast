// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainStack from '../contents/index.navigator';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  );
}

export default App;