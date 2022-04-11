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
  removeQuestion(questionId: string): void {
    return this.questionService.remove(questionId);
  }
  findAllQuestions(): Question[] {
    return this.questionService.findAll();
  }
  findSortedQuestions(): Question[] {
    return this.questionService.sort();
  }
  addAnswer(questionId: string, answer: string): void {
    this.questionService.addAnswer(questionId, answer);
  }
  checkAnswers(questionId: string): string[] {
    return this.questionService.checkAnswer(questionId);
  }
}
