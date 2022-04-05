import { IQAFacade } from "../src/IQAFacade";
import { Facade } from "../src/Facade";

export class Question {
  questionId: string;
  questionText: string;
  //answer?: string;
  constructor(questionId: string, textQuestion: string) {
    this.questionId = questionId;
    this.questionText = textQuestion;
    //this.answer = answer;
  }
}
