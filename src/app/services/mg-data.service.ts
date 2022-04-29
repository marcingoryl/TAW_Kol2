import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MGDataService {

  private url = 'https://taw-posts.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get(this.url + '/api/posts');
  }

  getOne(id: string){
    return this.httpClient.get(this.url + '/api/posts/'+id);
  }
}
