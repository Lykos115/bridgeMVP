import React from "react";
import {
    Text
} from 'react-native';
import QuestionText from "../../components/QuestionText";
import QuestionInput from "../../components/QuestionInput";

const Eleventh = () => {
    return(
        <>
            <QuestionText question="Your activities">
                <Text className='text-lg'>Pick up to 5 activities you enjoy doing when hanging out with friends.</Text>
            </QuestionText>
            <QuestionInput placeHolder="activities" />
        </>
    )
}

export default Eleventh;
