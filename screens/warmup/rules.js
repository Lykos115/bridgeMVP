import { styled } from "nativewind";
import React from "react";
import {
    View,
    Text,
    Pressable,
    ScrollView
} from 'react-native';


const StyledButton = styled(Pressable)

const Rules = ({next}) => {
    return(
        <View className='px-16'>
            <Text className='text-4xl font-semibold py-8'>
                House Keeping Rules
            </Text>
            <ScrollView>
                <Text className='text-lg'>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </Text>
            </ScrollView>
            <View className='flex flex-col items-center pt-8'>
                <StyledButton className='flex bg-app-900 w-60 h-18 p-4 items-center rounded-full shadow-lg shadow-black/75 active:bg-app-800' onPress={next}>
                    <Text className='text-2xl text-app-50'>I Agree</Text>
                </StyledButton>
            </View>
        </View>
    )
}

export default Rules