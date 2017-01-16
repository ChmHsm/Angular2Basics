import { Injectable } from '@angular/core';
import { Init } from './init-projects';

@Injectable()
export class TodoService extends Init{

  constructor() { 
    super();
    console.log('Service initialized...');
    this.load();
  }

  getProjects(){
    return JSON.parse(localStorage.getItem('projects'));
  }

}
