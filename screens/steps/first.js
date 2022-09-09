import React from 'react';
import {View, TextInput, Text} from 'react-native'

const First = () => {
  return (
    <View className='flex flex-col p-4'>
      <Text className='text-5xl font-extrabold pb-8'>What's your student email?</Text>
      <TextInput className='bg-app-50 w-full h-12 rounded-xl px-4 text-xl' placeholder="email"/>
    </View>

  )
}

export default First
