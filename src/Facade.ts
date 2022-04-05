import { IQAFacade } from "./IQAFacade";
import { Question } from "../src/Question";

export class Facade implements IQAFacade {
  questions: Question[] = [];

  addQuestion(text: string): void {
    const question: Question = new Question(
      "2",
      "Qual a proposta da mentoria?"
    );
    this.questions.push();
    //console.log(questions);

    throw new Error("Method not implemented.");
  }
  editQuestion(questionId: string, newText: string): void {
    throw new Error("Method not implemented.");
  }
  removeQuestion(questionId: string): void {
    throw new Error("Method not implemented.");
  }
  findAllQuestions(): Question[] {
    throw new Error("Method not implemented.");
  }
  findSortedQuestions(): Question[] {
    throw new Error("Method not implemented.");
  }
  addAnswer(questionId: string, answer: string): void {
    throw new Error("Method not implemented.");
  }
  checkAnswers(questionId: string): string[] {
    throw new Error("Method not implemented.");
  }
}
