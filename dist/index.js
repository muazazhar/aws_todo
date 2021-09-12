"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const itemCollection_1 = require("./itemCollection");
const inquirer = require("inquirer");
let collection = new itemCollection_1.TodoCollection();
var Commands;
(function (Commands) {
    Commands["AddOne"] = "Add a new Task";
    Commands["MarkDone"] = "Mark a Task Completed";
    Commands["ShowAll"] = "Show All Tasks";
    Commands["ShowOne"] = "Show One Task";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptUser() {
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
var Command;
(function (Command) {
    Command["goBack"] = "Go Back";
})(Command || (Command = {}));
function goBack() {
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
