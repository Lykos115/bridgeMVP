import React from 'react';
import {View, TextInput, Text} from 'react-native'

import QuestionText from '../../components/QuestionText';
import QuestionInput from '../../components/QuestionInput';

const First = () => {
  return (
    <View className='flex flex-col p-4'>
      <QuestionText question="What's your student email?" />
      <QuestionInput placeHolder="email"/>
    </View>

  )
}

export default First
