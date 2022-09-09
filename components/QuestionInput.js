import React from 'react';
import {
    TextInput
} from 'react-native';

import { styled } from 'nativewind';


const StyledInput = styled(TextInput);

const QuestionInput = ({placeHolder}) =>{
    return(
        <StyledInput className='bg-app-50 w-full h-12 rounded-xl px-4 text-xl' placeholder={placeHolder} />
    )
}

export default QuestionInput;