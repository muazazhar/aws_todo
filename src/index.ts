import { TodoItem } from "./item";
import { TodoCollection } from "./itemCollection";
import * as inquirer from "inquirer";

let collection: TodoCollection = new TodoCollection();

enum Commands {
  AddOne = "Add a new Task",
  MarkDone = "Mark a Task Completed",
  ShowAll = "Show All Tasks",
  ShowOne = "Show One Task",
  Quit = "Quit",
}
function promptUser(): void {
  console.clear();

  inquirer
    .prompt({
      type: "list",
      name: "command",
      message: "Choose option",
      choices: Object.values(Commands),
    })
    .then((answers) => {
      switch (answers["command"]) {
        case Commands.ShowAll:
          collection.printAll();
          goBack();
          break;
        case Commands.ShowOne:
          inquirer
            .prompt([
              {
                name: "id",
                type: "input",
                message: "Enter ID",
              },
            ])
            .then((answer) => {
              collection.getOneTodo(answer.id);
              goBack();
            });
          break;
        case Commands.AddOne:
          inquirer
            .prompt([
              {
                name: "task",
                type: "input",
                message: "Enter new Task ",
              },
            ])
            .then((answer) => {
              collection.addTodo(answer.task);
              console.log(`New Task "${answer.task}" added successfully.`);
              goBack();
            });
          break;
        case Commands.MarkDone:
          inquirer
            .prompt([
              {
                name: "id",
                type: "input",
                message: "Enter ID",
              },
            ])
            .then((answer) => {
              collection.markCompleted(answer.id);
              goBack();
            });
          break;
      }
    });
}
promptUser();
enum Command {
  goBack = "Go Back",
}
function goBack(): void {
  inquirer
    .prompt({
      type: "list",
      name: "command",
      message: "Choose option",
      choices: Object.values(Command),
    })
    .then((answers) => {
      switch (answers["command"]) {
        case Command.goBack:
          console.clear();
          promptUser();
          break;
      }
    });
}
