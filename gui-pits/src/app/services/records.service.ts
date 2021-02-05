import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from'@angular/common/http';
import {Observable} from "rxjs";
import { record } from '../models/records';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  apiURL = 'http://localhost:3000/api/';
  selectedUser: record = new record("",0,"","","");
  constructor(private _http: HttpClient) { }
  registrarrecord(RecordParams: record): Observable<any> {
    let params = JSON.stringify(RecordParams);
    let options = new HttpHeaders().set('Content-type','application/json');
    return this._http.post(this.apiURL + "record/", params, {headers:options}).pipe((res) => res);
  }

  updaterecord(RecordParams: record): Observable<any> {
    let params = JSON.stringify(RecordParams);
    let id = RecordParams.plate;
    let options = new HttpHeaders().set('Content-type','application/json');
    return this._http.put(this.apiURL + "record/" + id , params, {headers:options}).pipe((res) => res);
  }

  removerecord(id: record["_id"]): Observable<any> {
    let options = new HttpHeaders().set('Content-type','application/json');
    console.log(id)
    return this._http.delete(this.apiURL + "record/" + id , {headers:options}).pipe((res) => res);
  }

  showrecord(email: record["cc"]): Observable<any> {
    
    let options = {headers: new HttpHeaders({'Content-type':'application/json'})};
    return this._http.get(this.apiURL + "record/"+email, options).pipe((res) => res);
  }

  showrecords(): Observable<any> {
    
    let options = {headers: new HttpHeaders({'Content-type':'application/json'})};
    return this._http.get(this.apiURL + "allrecords", options).pipe((res) => res);
  }
}
