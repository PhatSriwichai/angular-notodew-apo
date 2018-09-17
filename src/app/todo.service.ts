import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public change$: Subject<any> = new Subject()
  constructor() { }
}
