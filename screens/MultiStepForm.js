import React, { useState } from 'react';
import First from './steps/first.js'
import Second from './steps/second.js'
import {Text, SafeAreaView, View, Pressable } from 'react-native';
import { styled } from "nativewind";

const StyledButton = styled(Pressable)

const MultiStepForm = () => {
  const [page, setPage] = useState(0)
  const formSteps = [
    <First />,
    <Second />
  ]
  return(
    <SafeAreaView>
      <Text>This is the form</Text>
      <View className=''>
        {formSteps[page]}
        <StyledButton className="bg-app-900 w-20 h-auto py-2 m-4 items-center rounded-full shadow-lg shadow-black/75 active:bg-app-800" onPress={() => setPage(c => c + 1)}>
          <Text className="text-xl font-bold text-app-50">Next</Text>
        </StyledButton>
      </View>
    </SafeAreaView>
  )



}

export default MultiStepForm;
