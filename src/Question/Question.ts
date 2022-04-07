export class Question {
  id: string;
  text: string;
  answers?: string[];
  constructor(questionId: string, questionText: string) {
    if (questionText.length > 100) {
      throw new Error("100 character limit exceeded!");
    }
    this.id = questionId;
    this.text = questionText;
    this.answers = [];
  }
}

export class QuestionService {
  questions: Question[] = [];
  add(text: string) {
    try {
      const question = new Question(
        Math.trunc(Math.random() * 50 + 1).toString(),
        text
      );
      this.questions.push(question);
      return question;
    } catch (error) {
      throw new Error(`QuestionService: ${error}`);
    }
  }
  findAll(): Question[] {
    return this.questions;
  }
  edit(questionId: string, newText: string) {}
  remove() {
    this.questions.pop();
    return this.questions;
  }
}
