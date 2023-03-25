# Quiz programação

### Descrição 

Este código define um contexto de quiz para uma aplicação React utilizando a função createContext do React. Ele também define um provedor de quiz que usa o hook useReducer do React para gerenciar o estado global do quiz.

O estado inicial do quiz é definido em initialState, que inclui a fase atual do jogo, as perguntas, a pergunta atual, a pontuação atual e se uma resposta foi selecionada ou não.

O quizReducer é uma função que recebe um estado e uma ação e retorna um novo estado com base na ação executada. As ações suportadas incluem mudar o estado do jogo, reordenar as perguntas, avançar para a próxima pergunta, começar um novo jogo e verificar uma resposta selecionada.

O QuizContext é o contexto global do quiz, que é exportado e pode ser importado em outros componentes para acessar o estado global. O QuizProvider é um componente que envolve outros componentes e fornece o contexto global do quiz para eles usando a propriedade value.

Em resumo, este código cria um contexto de quiz com um provedor de quiz que gerencia o estado global do quiz e fornece esse estado para outros componentes da aplicação React.
