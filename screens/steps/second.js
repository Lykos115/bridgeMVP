import React from 'react';
import {View, TextInput, Text, Pressable} from 'react-native'

const First = () => {
  return (
    <View className='flex flex-col p-4'>
      <Text className='text-5xl font-extrabold pb-8'>Verify your student email</Text>
      <Text className='text-lg'>Enter the code we've sent by email to</Text>
      <View className='flex flex-row pb-4 items-center'>
        <Text className='text-lg'>placeholder@email.com </Text>
        <Pressable><Text className='text-lg underline font-bold'>Change</Text></Pressable>
      </View>
      <TextInput className='bg-app-50 w-full h-12 rounded-xl px-4 text-xl' placeholder="email"/>
    </View>

  )
}

export default First
