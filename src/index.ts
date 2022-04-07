import { Facade } from "./Facade";

/*
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("");
console.log("===== Mentorship Challenge Wesley Silva =====");
console.log("");

const answer = 0;

rl.question(
  "What would you like to do? \n 1 - Add Question \n 2 - List Questions ",
  (answer) => {
    switch (answer.toLowerCase()) {
      case "1":
        const question = "What is the purpose of the mentorship?";
        const facadeAdd = new Facade();
        facadeAdd.addQuestion(question);
        console.log(facadeAdd.findAllQuestions());

        console.log("Added!");
        break;
      case "2":
        const facade = new Facade();
        console.log(facade.findAllQuestions());
        console.log("Here they are!");
        break;
      default:
        console.log("Invalid answer!");
    }
    rl.close();
  }
);
*/

const question = "What is the purpose of the mentorship?";
const question2 = "When does the mentorship start?";
const question3 = "What skills can be developed?";

const facade = new Facade();
facade.addQuestion(question);
facade.addQuestion(question2);
facade.addQuestion(question3);

const firstQuestionId = facade.findAllQuestions()[0].id;

console.log(facade.findAllQuestions());
//console.log(facade.findAllQuestions()[0].id);
//console.log(firstQuestionId);
facade.removeQuestion();
console.log(facade.findAllQuestions());
