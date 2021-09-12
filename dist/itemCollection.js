"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const item_1 = require("./item");
class TodoCollection {
    constructor(Todos = []) {
        this.Todos = Todos;
        this.nextItem = 1;
    }
    addTodo(task) {
        let todo = new item_1.TodoItem(this.nextItem++, task);
        this.Todos.push(todo);
    }
    printAll() {
        this.Todos.forEach((item) => item.printItem());
    }
    markCompleted(id) {
        let item = this.Todos.find((item) => item.id == id);
        item.completed = true;
    }
    getOneTodo(id) {
        let item = this.Todos.find((item) => item.id == id);
        let ans = Object.values(item);
        console.log(`id:${ans[0]} Task:"${ans[1]}" Completed:${ans[2]}`);
    }
}
exports.TodoCollection = TodoCollection;
