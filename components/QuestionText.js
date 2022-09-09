import React from 'react';
import {
    Text,
    View
} from 'react-native';
import {styled} from 'nativewind';

const StyledText = styled(Text)

const QuestionText = (props) => {
    return (
      <View className='pb-8'>
        <StyledText className='text-5xl font-extrabold'>
          {props.question}
        </StyledText>
        {props.children}
      </View>
    )
}

export default QuestionText;