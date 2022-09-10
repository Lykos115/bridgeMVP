import React from 'react';

import QuestionText from '../../components/QuestionText';
import QuestionInput from '../../components/QuestionInput';

const First = () => {
  return (
    <>
      <QuestionText question="What's your student email?" />
      <QuestionInput placeHolder="email"/>
    </>

  )
}

export default First
