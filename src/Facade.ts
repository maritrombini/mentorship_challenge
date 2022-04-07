import { IQAFacade } from "./IQAFacade/IQAFacade";
import { Question, QuestionService } from "./Question/Question";

export class Facade implements IQAFacade {
  questionService = new QuestionService();

  addQuestion(text: string): void {
    this.questionService.add(text);
  }
  editQuestion(questionId: string, newText: string): void {
    this.questionService.edit(questionId, newText);
  }
  //removeQuestion(questionId: string): void {
  removeQuestion(): void {
    this.questionService.remove();
  }
  findAllQuestions(): Question[] {
    return this.questionService.findAll();
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
