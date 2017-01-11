import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  todos;
  text;
  oldText;
  appState = 'default';
  
  //text2 = 'text2';
  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.todos = this._todoService.getTodos();
  }

  addTodo(){
    //console.log(this.text);
    var newTodo = {
      text: this.text
    };
    this.todos.push(newTodo);
    this._todoService.addTodo(newTodo);
    //console.log(this.text);
    this.text= '';
  }

  deleteTodo(todoText){
    for(var i = 0 ; i < this.todos.length ; i++){
      if(this.todos[i].text == todoText){
        this.todos.splice(i, 1);
      }
    }
    this._todoService.deleteTodo(todoText);
  }

  editTodo(todo){
    if(this.appState != 'edit'){
      
      this.appState = 'edit';
      this.oldText = todo.text;
      this.text = todo.text;
      //console.log('appstate: ' +this.appState);
    }
  }

  updateTodo(){
    this.deleteTodo(this.oldText);
    this.addTodo();
  }
}