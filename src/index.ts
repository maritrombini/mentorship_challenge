import { Facade } from "./Facade";
import * as readline from "readline";

/*
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("");
console.log("===== Mentorship Challenge Wesley Silva =====");
console.log("");

rl.question(
  "What would you like to do? \n 1 - Add Question \n 2 - List Questions ",
  (answer) => {
    switch (answer.toLowerCase()) {
      case "1":
        //.addQuestion(textQuestion)

        console.log("Added!");
        break;
      case "2":
        console.log("Here they are!");
        break;
      default:
        console.log("Invalid answer!");
    }
    rl.close();
  }
);

const question: Question = new Question("2", "Qual a proposta da mentoria?");
console.log(question);

console.log(
  `
the question id is ==>  ${question.questionId} and the question is ==> ${question.questionText}`
);

//console.log(getAllQuestions());
*/

const question = "What is the purpose of the mentorship?";
const facade = new Facade();
facade.addQuestion(question);
const firstQuestionId = facade.findAllQuestions()[0].id;
console.log(facade.findAllQuestions());
console.log(facade.findAllQuestions()[0].id);
console.log(firstQuestionId);
