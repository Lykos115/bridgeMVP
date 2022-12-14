import React from 'react';
import {View, Text, Pressable} from 'react-native'
import QuestionText from '../../components/QuestionText.js';
import QuestionInput from '../../components/QuestionInput.js';

const Second = () => {
  return (
    <>
      <QuestionText question='Verify your student email'>
        <Text className='text-lg'>Enter the code we've sent by email to</Text>
        <View className='flex flex-row pb-4 items-center'>
          <Text className='text-lg'>placeholder@email.com </Text>
          <Pressable><Text className='text-lg underline font-bold'>Change</Text></Pressable>
        </View>
      </QuestionText>
      <QuestionInput placeHolder="code"/>
    </>

  )
}

export default Second;
