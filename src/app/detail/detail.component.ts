import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() todo: {name: string, active: boolean}
  @Output() checked$: EventEmitter<any> = new EventEmitter();
  @Output() clear$: EventEmitter<any> = new EventEmitter();
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    console.log("this.todo:", this.todo)
    this.todoService.change$.subscribe((checked) => {
      console.log('checked:', checked)
    })
  }

  public changeTo(event: HTMLInputElement) {
    this.todo.active = event.checked
    console.log(this.todo)
    this.checked$.emit(event.checked)
  }

  public clearTodo() {

  }

  

}
