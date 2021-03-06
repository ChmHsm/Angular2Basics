import { Injectable, NgZone } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  private allPostsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private postByIdUrl = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private http: Http) {
    console.log('Posts service intialized...');
   }

getAllPosts(){
  
     return this.http.get(this.allPostsUrl)
               .map(this.extractData);
   }

   getPostById(id: string){
  
     return this.http.get(this.postByIdUrl+id)
               .map(this.extractData);
   }

  private extractData(res: Response) {
    return res.json();
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
