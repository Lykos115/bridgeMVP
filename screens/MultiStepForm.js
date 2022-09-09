import React, { useState } from 'react';
import {Text, SafeAreaView, View, Pressable } from 'react-native';
import { styled } from "nativewind";

import GradientBackground from '../components/GradientBackground.js'
import First from './steps/first.js'
import Second from './steps/second.js'
import Third from './steps/third.js'

const StyledButton = styled(Pressable)

const MultiStepForm = () => {
  const [page, setPage] = useState(0)
  const formSteps = [
    <First />,
    <Second />,
    <Third />
  ]
  return(
    <GradientBackground>
      <SafeAreaView className="h-screen flex flex-col m-4 justify-evenly">
    {/*back button*/}
        <StyledButton className="self-start bg-app-900 w-12 h-12 rounded-full shadow-lg shadow-black/75 active:bg-app-800" onPress={() => setPage(c => c - 1)} disabled={page <= 0}>
          <Text className="text-xl text-center p-2 font-bold text-app-50">{'<'}</Text>
        </StyledButton>
    {/*question*/}
        <View className=''>
          {formSteps[page]}
        </View>
    {/*foward button*/}
        <View className='flex flex-row w-full justify-between'>
          <Text>icon</Text>
          <Text>This will not be shown on your profile</Text>
          <StyledButton className="bg-app-900 w-12 h-12 rounded-full shadow-lg shadow-black/75 active:bg-app-800" onPress={() => setPage(c => c + 1)} disabled={page >= formSteps.length - 1}>
            <Text className="text-xl text-center p-2 font-bold text-app-50">{'>'}</Text>
          </StyledButton>
        </View>
      </SafeAreaView>
    </GradientBackground>
  )



}

export default MultiStepForm;
