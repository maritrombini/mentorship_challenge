import { Facade } from "./Facade";

const question1 = "1st Question";
const question2 = "2nd Question";
const question3 = "3rd Question";
const question4 = "4th Question";
const changedQuestion = "Changed Question";

const answer1 = "4th Answer";
const answer2 = "2nd Answer";
const answer3 = "3rd Answer";
const answer4 = "4th Answer";

//ADD QUESTION
const facade = new Facade();
facade.addQuestion(question1);
facade.addQuestion(question2);
facade.addQuestion(question3);
facade.addQuestion(question4);

//ADD ANSWER
const questionId = facade.findAllQuestions()[0].id;
const questionId2 = facade.findAllQuestions()[1].id;

//FIND
console.log(" +----- FindALl Questions -----+ ", facade.findAllQuestions());

//EDIT
facade.editQuestion(questionId, changedQuestion);
console.log(" +----- Edited Questions -----+ ", facade.findAllQuestions());

//ADD ANSWER
facade.addAnswer(questionId, answer1);
facade.addAnswer(questionId2, answer2);
console.log(
  " +----- Check Added Answer -----+ ",
  facade.checkAnswers(questionId)
);
console.log(
  " +----- Check Added Answer -----+ ",
  facade.checkAnswers(questionId2)
);
console.log("");

//FIND
console.log(
  " +----- FindAll Questions After Answers Added -----+ ",
  facade.findAllQuestions()
);

//REMOVE
facade.removeQuestion(questionId);
console.log(
  " +----- Without Removed Question -----+ ",
  facade.findAllQuestions()
);

//SORT
console.log(" +----- Sorted Questions -----+ ", facade.findSortedQuestions());
