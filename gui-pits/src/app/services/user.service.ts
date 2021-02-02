import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from'@angular/common/http';
import {Observable} from "rxjs";
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL = 'http://localhost:3000/api/';

  constructor(private _http: HttpClient) { }
  registraruser(UserParams: User): Observable<any> {
    let params = JSON.stringify(UserParams)
    let options = new HttpHeaders().set('Content-type','application/json');
    return this._http.post(this.apiURL, params, {headers:options}).pipe((res) => res);
  }
}
