
import React from 'react';
import { styled } from 'nativewind'
import {
  SafeAreaView,
  Text,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SignInPage = ({navigation}) => {
  return(
    <SafeAreaView>
      <Text>Sign In / Sign Up</Text>
      <Text>Screen</Text>
    </SafeAreaView>
  )
}

export default SignInPage;
