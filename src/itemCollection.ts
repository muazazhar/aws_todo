import { TodoItem as Todo, TodoItem } from "./item";

export class TodoCollection {
  private nextItem: number = 1;
  constructor(public Todos: Todo[] = []) {}
  public addTodo(task: string): void {
    let todo: Todo = new Todo(this.nextItem++, task);
    this.Todos.push(todo);
  }
  public printAll(): void {
    this.Todos.forEach((item: Todo) => item.printItem());
  }
  public markCompleted(id: number) {
    let item: Todo = this.Todos.find((item: Todo) => item.id == id);
    item.completed = true;
  }
  public getOneTodo(id: number) {
    let item: Todo = this.Todos.find((item: Todo) => item.id == id);
    let ans = Object.values(item);
    console.log(`id:${ans[0]} Task:"${ans[1]}" Completed:${ans[2]}`);
  }
}
