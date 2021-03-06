import { Component, OnInit, NgZone } from '@angular/core';
import { TodoService } from '../todo.service';
import { PostsService } from '../posts.service';

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
  oldprojectName;
  appState = 'defaultMode';

  /////////////////////////POSTS attributes
  allPosts: Post[];
  specificPostById: Post;
  postId: string;
  showPBForOneItem: boolean = false;



  //text2 = 'text2';
  constructor(private _todoService: TodoService, private _postsService: PostsService, private ngZone: NgZone) { }

  ngOnInit() {
    this.projects = this._todoService.getProjects();
    this.ngZone.runOutsideAngular(() => {
      this._postsService.getAllPosts().subscribe(posts => this.ngZone.run(() =>
      { this.allPosts = posts; }));
    })
  }

  addproject() {
    //console.log(this.text);
    var newproject = {
      name: this.projectName,
      type: this.projectType,
      designCost: this.designCost,
      constructionCost: this.constructionCost
    }
    console.log(this.projectName + this.designCost + this.constructionCost + this.projectType);
    this.projects.push(newproject);
    this._todoService.addProject(newproject);
    //console.log(this.text);
    this.projectName = '';
    this.constructionCost = '';
    this.designCost = '';
    this.projectType = '';
  }

  deleteproject(projectName) {
    console.log('Project to be deleted: ' + projectName);
    for (var i = 0; i < this.projects.length; i++) {
      if (this.projects[i].name == projectName) {
        this.projects.splice(i, 1);
      }
    }
    this._todoService.deleteProject(projectName);
  }

  editproject(project) {
    // console.log(project);
    if(this.appState == 'defaultMode'){
      this.appState = 'editMode';
    }
    this.oldprojectName = project.name;
    this.projectName = project.name;
    this.designCost = project.designCost;
    this.constructionCost = project.constructionCost;
    this.projectType = project.type;
  }

  updateproject() {
    this.deleteproject(this.oldprojectName);
    this.addproject();
  }

  cancelEditMode() {
    if(this.appState == 'editMode'){
      this.appState = 'defaultMode';
    }
    this.oldprojectName = '';
    this.projectName = '';
    this.designCost = '';
    this.constructionCost = '';
    this.projectType = '';
  }

  getPostById(){
    
    this.ngZone.runOutsideAngular(() => {
      
      this._postsService.getPostById(this.postId).subscribe(post => this.ngZone.run(() =>
      { this.showPBForOneItem = true;
        this.specificPostById = post; 
        console.log(this.specificPostById)
      this.showPBForOneItem = false;
    }));
        
    })
    
  }
}

interface Post{
    id: number;
    title: string;
    body: string;
  }