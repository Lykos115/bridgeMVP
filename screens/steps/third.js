import React from 'react';
import {
    View,
    Text
} from 'react-native';

import QuestionInput from '../../components/QuestionInput';
import QuestionText from '../../components/QuestionText';

const Third = () => {

    return (
        <View className='flex flex-col p-4'>
            <QuestionText question="What's your first name?">
                <Text className='text-lg'>You won't be able to change this later</Text>
            </QuestionText>
            <QuestionInput placeHolder="name" />
        </View>
    )
}

export default Third;