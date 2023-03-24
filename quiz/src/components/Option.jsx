import './Option.css';

import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

function Option({ option, selectOption, answer }) {
    const [quizState, dispatch] =  useContext(QuizContext);

  return (
    <div className='option' onClick={() => selectOption()}>
      <p>{option}</p> 
    </div>
  )
}

export default Option
