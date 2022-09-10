import React from "react";
import {
    Text
} from 'react-native';
import QuestionText from "../../components/QuestionText";
import QuestionInput from "../../components/QuestionInput";

const Eight = () => {
    return (
        <>
            <QuestionText question="What's your graduation year?">
                <Text className='text-lg'>Enter your anticipated graduation year.</Text>
            </QuestionText>
            <QuestionInput placeHolder="year"/>
        </>
    )
}

export default Eight;