const LIMITCHARACTERS = 100;
export class Question {
  id: string;
  text: string;
  answers: string[];
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
    if (newtext.length > LIMITCHARACTERS) {
      throw new Error(
        `Questions are allowed with a limit of ${LIMITCHARACTERS} characters. Limit exceeded!`
      );
    }
    this.text = newtext;
  }
  addAnswer(answer: string): void {
    if (answer.length > LIMITCHARACTERS) {
      throw new Error(
        `Answers are allowed with a limit of ${LIMITCHARACTERS} characters. Limit exceeded!`
      );
    }
    this.answers.push(answer);
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
    const indexQuestion = this.questions.findIndex((index) => {
      return index.id === id;
    });

    const removeQuestion = this.questions.forEach((question) => {
      if (question.id === id) {
        this.questions.splice(indexQuestion, 1);
      }
    });
    try {
      return removeQuestion;
    } catch (error) {
      throw new Error(`QuestionService: ${error}`);
    }
  }
  sort(): Question[] {
    const arrCopy = this.questions;
    for (let i = 0; i < arrCopy.length - 1; i++) {
      let minorItem = i;
      for (let j = i + 1; j < arrCopy.length; j++) {
        if (parseInt(arrCopy[j].id) < parseInt(arrCopy[minorItem].id)) {
          minorItem = j;
        }
      }
      const changePosition = arrCopy[minorItem];
      arrCopy[minorItem] = arrCopy[i];
      arrCopy[i] = changePosition;
    }
    return arrCopy;
  }
  addAnswer(questionId: string, answer: string) {
    const answers = this.questions.forEach((question) => {
      if (question.id === questionId) {
        question.addAnswer(answer);
      }
    });
    try {
      return answers;
    } catch (error) {
      throw new Error(`QuestionService: ${error}`);
    }
  }
  checkAnswer(id: string) {
    const question = this.questions.find((question) => question.id === id);
    if (!question) {
      throw new Error("Id not found!");
    }
    return question.answers;
  }
}
