export class TodoItem {
  public constructor(
    public id: number,
    public text: String,
    public completed: boolean = false
  ) {}
  public printItem(): void {
    console.log(
      `id: ${this.id}, \tTask: "${this.text}", \tCompleted: ${this.completed}`
    );
  }
}
