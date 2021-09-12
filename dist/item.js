"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
class TodoItem {
    constructor(id, text, completed = false) {
        this.id = id;
        this.text = text;
        this.completed = completed;
    }
    printItem() {
        this.id != null
            ? console.log(`id: ${this.id}, \tTask: "${this.text}", \tCompleted: ${this.completed}`)
            : console.log("No Tasks.");
    }
}
exports.TodoItem = TodoItem;
