import { IQAFacade } from "./IQAFacade/IQAFacade";
import { Question, QuestionService } from "./Question/Question";

export class Facade implements IQAFacade {
  questionService = new QuestionService();

  addQuestion(text: string): void {
    this.questionService.add(text);
  }
  editQuestion(questionId: string, newText: string): void {
    throw new Error("Method not implemented.");
  }
  removeQuestion(questionId: string): void {
    throw new Error("Method not implemented.");
  }
  findAllQuestions(): Question[] {
    return this.questionService.findAll();
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
