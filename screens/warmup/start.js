import { styled } from "nativewind";
import React from "react";
import {
    View,
    Text,
    Pressable
} from 'react-native'

const StyledButton = styled(Pressable);

const Start = ({next}) => {
    return (
        <>
            <View className='flex px-16 pb-80'>
                <Text className='text-4xl font-semibold py-16'>
                    Build a connection on Bridge
                </Text>
                <Text className='text-md'>Connections are made through sharing experiences. Adding activities and interests you enjoy will help to begin finding friends.</Text>
            </View>

            <View className='flex flex-col items-center'>
                <StyledButton className='flex bg-app-900 w-60 h-18 p-4 items-center rounded-full shadow-lg shadow-black/75 active:bg-app-800' onPress={next}>
                    <Text className='text-2xl text-app-50'>Get Started</Text>
                </StyledButton>
            </View>
        </>
    )
}

export default Start;