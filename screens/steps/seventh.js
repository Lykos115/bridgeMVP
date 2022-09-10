import React from "react";
import {
    Text
} from 'react-native';

import QuestionText from "../../components/QuestionText";
import QuestionInput from "../../components/QuestionInput";

const Seventh = () => {
    return (
        <>
            <QuestionText question="What's your major?">
                <Text className='text-lg'>Enter the major you are currently working towards</Text>
            </QuestionText>
            <QuestionInput placeHolder="Major"/>
        </>
    )
}

export default Seventh;