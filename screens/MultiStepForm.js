import React, { useState } from 'react';
import {Text, SafeAreaView, View, Pressable } from 'react-native';
import { styled } from "nativewind";

import GradientBackground from '../components/GradientBackground.js';
import First from './steps/first.js';
import Second from './steps/second.js';
import Third from './steps/third.js';
import Forth from './steps/forth.js';
import Fifth from './steps/fifth.js';
import Sixth from './steps/sixth.js';
import Seventh from './steps/seventh.js';
import Eight from './steps/eight.js';
import Ninth from './steps/ninth.js';
import Tenth from './steps/tenth.js';
import Eleventh from './steps/eleventh.js';
import Twelfth from './steps/twelfth.js';

const StyledButton = styled(Pressable)

const MultiStepForm = ({navigation}) => {
  const [page, setPage] = useState(0)
  const formSteps = [
    <First />,
    <Second />,
    <Third />,
    <Forth />,
    <Fifth />,
    <Sixth />,
    <Seventh/>,
    <Eight/>,
    <Ninth/>,
    <Tenth/>,
    <Eleventh/>,
    <Twelfth/>,
  ]

  const nextPage = page < formSteps.length - 1 ? (
      <View className='flex flex-row w-full justify-between'>
        <Text>icon</Text>
        <Text>This will not be shown on your profile</Text>
        <StyledButton className="bg-app-900 w-12 h-12 rounded-full shadow-lg shadow-black/75 active:bg-app-800" onPress={() => setPage(c => c + 1)} disabled={page >= formSteps.length - 1}>
          <Text className="text-xl text-center p-2 font-bold text-app-50">{'>'}</Text>
      </StyledButton>
    </View>
  ) : (
    <View className='flex flex-col justify-center items-center'>
      <StyledButton className='flex bg-app-900 w-60 h-18 p-4 items-center rounded-full shadow-lg shadow-black/75 active:bg-app-800' onPress={() => navigation.navigate('Warm Up')}>
        <Text className='text-2xl text-app-50'>Bridge the gap</Text>
      </StyledButton>
    </View>
  )

  return(
    <GradientBackground>
      <SafeAreaView className="h-screen flex flex-col m-4 justify-evenly">
    {/*back button*/}
        <StyledButton className="self-start bg-app-900 w-12 h-12 rounded-full shadow-lg shadow-black/75 active:bg-app-800" onPress={() => setPage(c => c - 1)} disabled={page <= 0}>
          <Text className="text-xl text-center p-2 font-bold text-app-50">{'<'}</Text>
        </StyledButton>
    {/*question*/}
        <View className='p-4'>
          {formSteps[page]}
        </View>
    {/*foward button*/}
        {nextPage}
      </SafeAreaView>
    </GradientBackground>
  )



}

export default MultiStepForm;
