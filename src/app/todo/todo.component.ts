import { Component, OnInit } from '@angular/core';

interface Todo {
  name: string,
  active: boolean
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public todos: Todo[] = [];
  constructor() { }

  ngOnInit() {
  }

  public detailChange(checked: boolean, todo: Todo) {
    todo.active = checked
    console.log(todo)
  }

  public get hasComplete(): boolean {
    return this.todos.filter(item => item.active).length > 0
  }

  public clearComplete() {

  }

  public clearByIndex(index) {
    this.todos.splice(index, 0)
  }

  keyUp(event: HTMLInputElement) {
    const value = event.value;
    this.todos.push({
      name: value,
      active: false
    });
    event.value = "";
  }

}
