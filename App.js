/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from './screens/index.js';
import SignInPage from './screens/signIn.js';
import MultiStepForm from './screens/MultiStepForm.js';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
    >
        <Stack.Screen name="Landing Page" component={LandingPage} />
        <Stack.Screen name="Sign In Page" component={MultiStepForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
