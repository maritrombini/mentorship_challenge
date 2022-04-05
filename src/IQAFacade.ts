import { Question } from "Question";

export interface IQAFacade {
  // Adiciona uma nova pergunta
  // A pergunta só pode conter 100 ou menos caracteres, se
  // tiver mais, retornar um erro
  addQuestion(text: string): void;
  // Edita a pergunta com id ‘questionId’
  // Se o id não existir, retornar um erro
  // Se o novo texto conter mais de 100 caracteres, retornar um erro
  editQuestion(questionId: string, newText: string): void;
  // Remove a pergunta com id ‘questionId’
  // Se o id não existir, retornar um erro
  removeQuestion(questionId: string): void;
  // Retorna todas as questões na ordem em que foram adicionadas
  findAllQuestions(): Question[];
  // Acha todas as questões em ordem alfabética de A a Z
  // Implementar o próprio sort
  findSortedQuestions(): Question[];
  // Adiciona uma resposta à pergunta com id ‘questionId’
  // Se o id não existir, retornar um erro
  // Se a resposta conter mais de 100 caracteres, retornar um erro
  addAnswer(questionId: string, answer: string): void;
  // Retornar as respostas da pergunta com id ‘questionId’
  // Se o id não existir, retornar um erro
  checkAnswers(questionId: string): string[];
}
