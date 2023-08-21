import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentInterface } from 'src/app/common/models/comment/comment_interface';

@Injectable({providedIn: 'root'})
export class CommentService {
  constructor(private _http: HttpClient) { }
  getComments():Observable<CommentInterface[]>{
    return this._http.get<CommentInterface[]>("assets/json/comments.json");
  }
}