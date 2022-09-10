import React from "react";
import {
    Text
} from 'react-native';
import QuestionInput from "../../components/QuestionInput";
import QuestionText from "../../components/QuestionText";

const Tenth = () => {
    return(
        <>
            <QuestionText question="What's your phone number?">
                <Text className="text-lg">We use this to recover your account if you can't log in</Text>
            </QuestionText>
            <QuestionInput placeHolder="Phone Number"/>
        </>
    )
}

export default Tenth;