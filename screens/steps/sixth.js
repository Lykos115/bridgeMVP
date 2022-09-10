import React from "react";
import {
    Text
} from 'react-native';
import QuestionText from "../../components/QuestionText";

const Sixth = () => {
    return(
        <>
            <QuestionText question="What's your gender?">
                <Text className='text-lg'>Pick which best describes you. Then add more about your gender if you'd like.</Text>
            </QuestionText>

        </>
    )
}

export default Sixth;