import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from'@angular/common/http';
import {Observable} from "rxjs";
import { Record } from '../models/Records';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  apiURL = 'http://localhost:3000/api/';
  selectedUser: Record = new Record("","",0,"","");
  constructor(private _http: HttpClient) { }
  registrarrecord(RecordParams: Record): Observable<any> {
    let params = JSON.stringify(RecordParams);
    let options = new HttpHeaders().set('Content-type','application/json');
    return this._http.post(this.apiURL + "Record/", params, {headers:options}).pipe((res) => res);
  }

  updaterecord(RecordParams: Record): Observable<any> {
    let params = JSON.stringify(RecordParams);
    let id = RecordParams._id;
    let options = new HttpHeaders().set('Content-type','application/json');
    return this._http.put(this.apiURL + "Record/" + id , params, {headers:options}).pipe((res) => res);
  }

  removerecord(id: Record["_id"]): Observable<any> {
    let options = new HttpHeaders().set('Content-type','application/json');
    console.log(id)
    return this._http.delete(this.apiURL + "Record/" + id , {headers:options}).pipe((res) => res);
  }

  showrecord(email: Record["plate"]): Observable<any> {
    
    let options = {headers: new HttpHeaders({'Content-type':'application/json'})};
    return this._http.get(this.apiURL + "Record/"+email, options).pipe((res) => res);
  }

  showrecords(): Observable<any> {
    
    let options = {headers: new HttpHeaders({'Content-type':'application/json'})};
    return this._http.get(this.apiURL + "allRecords", options).pipe((res) => res);
  }
}
