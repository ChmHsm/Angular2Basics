import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  projects;
  projectName;
  constructionCost;
  designCost;
  projectType;
  oldText;
  appState = 'default';
  
  //text2 = 'text2';
  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.projects = this._todoService.getProjects();
    console.log(this.projects);
  }

  addproject(){
    //console.log(this.text);
    var newproject = {
                    name: this.projectName, 
                    type: this.projectType,
                    designCost: this.designCost,
                    constructionCost: this.constructionCost
                }
    console.log(this.projectName +this.designCost +this.constructionCost +this.projectType);
    this.projects.push(newproject);
    this._todoService.addProject(newproject);
    //console.log(this.text);
    this.projectName= '';
    this.constructionCost= '';
    this.designCost= '';
    this.projectType= '';
  }

  deleteproject(projectName){
    console.log('Project to be deleted: '+projectName);
    for(var i = 0 ; i < this.projects.length ; i++){
      if(this.projects[i].name == projectName){
        this.projects.splice(i, 1);
      }
    }
    this._todoService.deleteProject(projectName);
  }

  editproject(project){
    if(this.appState != 'edit'){
      
      this.appState = 'edit';
      this.oldText = project.name;
      this.projectName = project.name;
      //console.log('appstate: ' +this.appState);
    }
  }

  updateproject(){
    this.deleteproject(this.oldText);
    this.addproject();
  }
}