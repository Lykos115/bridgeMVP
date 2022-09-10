import React from "react";
import {
    Text
} from 'react-native';
import QuestionInput from "../../components/QuestionInput";
import QuestionText from "../../components/QuestionText";

const Twelfth = () => {
    return(
        <>
            <QuestionText question="Your interest">
                <Text className='text-lg'>Pick up to 5 interest that you share with friends.</Text>
            </QuestionText>
            <QuestionInput placeHolder="Interest" />
        </>
    )
}

export default Twelfth;