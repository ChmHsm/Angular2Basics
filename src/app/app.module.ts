import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Ng2PaginationModule } from 'ng2-pagination';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoService } from './todo.service';
import { PostsService } from './posts.service';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    Ng2PaginationModule
  ],
  providers: [TodoService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
