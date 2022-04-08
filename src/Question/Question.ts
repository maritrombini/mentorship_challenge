const LIMITCHARACTERS = 100;
export class Question {
  id: string;
  text: string;
  answers?: string[];
  constructor(questionId: string, questionText: string) {
    if (questionText.length > LIMITCHARACTERS) {
      throw new Error(
        `Questions are allowed with a limit of ${LIMITCHARACTERS} characters. Limit exceeded!`
      );
    }
    this.id = questionId;
    this.text = questionText;
    this.answers = [];
  }
  setText(newtext: string): void {
    if (newtext.length > 100) {
      throw new Error(
        `Questions are allowed with a limit of ${LIMITCHARACTERS} characters. Limit exceeded!`
      );
    }
    this.text = newtext;
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
  edit(id: string, text: string) {
    const updateQuestion = this.questions.forEach((question) => {
      if (question.id === id) {
        question.setText(text);
      }
    });
    try {
      return updateQuestion;
    } catch (error) {
      throw new Error(`QuestionService: ${error}`);
    }
  }
  remove(id: string) {
    const deleteQuestion = this.questions.forEach((question) => {
      if (question.id === id) {
        let index = this.questions.indexOf(question);
        console.log(`pergunta que sera removida ${question.text}`);
        console.log(`id da pergunta que sera removida ${question.id}`);
        this.questions.splice(index, 1);
      }
    });
    try {
      return deleteQuestion;
    } catch (error) {
      throw new Error(`QuestionService: ${error}`);
    }
  }
}
