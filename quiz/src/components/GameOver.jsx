import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Welldone from '../img/welldone.svg';

import './GameOver.css';

function GameOver() {
  return (
    <div id="gameover">
      <h2>Fim de Jogo!</h2>
      <p>Pontuação: x</p>
      <p>Você acertou y de z perguntas.</p>
      <img src={Welldone} alt="Fim de Jogo"/>
      <button>Reiniciar</button>
    </div>
  )
}

export default GameOver
