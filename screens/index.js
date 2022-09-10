/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import { styled } from "nativewind";
import GradientBackground from '../components/GradientBackground.js'

const StyledImage = styled(Image)
const StyledButton = styled(Pressable)

const LandingPage = ({navigation}) => {

  return (
    <GradientBackground>
      <SafeAreaView className="w-screen h-screen flex flex-col justify-center items-center">
        <View className="flex items-center">
          <Text className="px-4 text-app-600 text-6xl font-bold">A new way to make</Text>
          <Text className="px-4 self-start text-app-900 text-6xl font-bold">friends</Text>
          <View className="w-full h-auto flex flex-col justify-center items-center py-16">
            <StyledImage className="justify-center aspect-[8/5] w-full h-60" source={require('../public/friends.jpg')} />
          </View>
          <StyledButton className="bg-app-900 w-80 h-auto px-4 py-6 m-4 items-center rounded-full shadow-lg shadow-black/75 active:bg-app-800" onPress={() => navigation.push('Sign In Page')}>
            <Text className="text-2xl font-bold text-app-50">Get Started</Text>
          </StyledButton>
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default LandingPage;
