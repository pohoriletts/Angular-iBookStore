import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../IPost';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  createNewPost(post: IPost): Observable<IPost> {
    return this.http.post<IPost>('https://jsonplaceholder.typicode.com/posts', post);
  }
}