import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from'@angular/common/http';
import {Observable} from "rxjs";
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL = 'http://localhost:3000/api/';
  selectedUser: User = new User("","","",0,"","","");
  constructor(private _http: HttpClient) { }
  registraruser(UserParams: User): Observable<any> {
    let params = JSON.stringify(UserParams);
    let options = new HttpHeaders().set('Content-type','application/json');
    return this._http.post(this.apiURL + "user/", params, {headers:options}).pipe((res) => res);
  }

  updateuser(UserParams: User): Observable<any> {
    let params = JSON.stringify(UserParams);
    let id = UserParams._id;
    let options = new HttpHeaders().set('Content-type','application/json');
    return this._http.put(this.apiURL + "user/" + id , params, {headers:options}).pipe((res) => res);
  }

  removeuser(id: User["_id"]): Observable<any> {
    let options = new HttpHeaders().set('Content-type','application/json');
    console.log(id)
    return this._http.delete(this.apiURL + "user/" + id , {headers:options}).pipe((res) => res);
  }

  showuser(email: User["email"]): Observable<any> {
    
    let options = {headers: new HttpHeaders({'Content-type':'application/json'})};
    return this._http.get(this.apiURL + "user/"+email, options).pipe((res) => res);
  }

  checkpass(email: User["email"], pass: User["pass"]): Observable<any> {
    
    let options = {headers: new HttpHeaders({'Content-type':'application/json'})};
    return this._http.get(this.apiURL + "usercheck/"+email+","+pass, options).pipe((res) => res);
  }


  showusers(): Observable<any> {
    
    let options = {headers: new HttpHeaders({'Content-type':'application/json'})};
    return this._http.get(this.apiURL + "allUsers/", options).pipe((res) => res);
  }
}
