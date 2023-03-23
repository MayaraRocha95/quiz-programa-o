import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

function Question() {
    const [quizState, dispatch] =  useContext(QuizContext);

    console.log(quizState)
  return (
    <div>
      question
    </div>
  )
}

export default Question
