import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from'@angular/common/http';
import {Observable} from "rxjs";
import { workshop } from '../models/workshop';

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {

  apiURL = 'http://localhost:3000/api/';
  selectedUser: workshop = new workshop("","","","","",0,"","",0)
  constructor(private _http: HttpClient) { }
  registrarworkshop(WorkshopParams: workshop): Observable<any> {
    let params = JSON.stringify(WorkshopParams);
    let options = new HttpHeaders().set('Content-type','application/json');
    return this._http.post(this.apiURL + "workshop/", params, {headers:options}).pipe((res) => res);
  }

  updateworkshop(WorkshopParams: workshop): Observable<any> {
    let params = JSON.stringify(WorkshopParams);
    let id = WorkshopParams.plate;
    let options = new HttpHeaders().set('Content-type','application/json');
    return this._http.put(this.apiURL + "workshop/" + id , params, {headers:options}).pipe((res) => res);
  }

  removeworkshop(id: workshop["_id"]): Observable<any> {
    let options = new HttpHeaders().set('Content-type','application/json');
    console.log(id)
    return this._http.delete(this.apiURL + "workshop/" + id , {headers:options}).pipe((res) => res);
  }

  showworkshop(email: workshop["cc"]): Observable<any> {
    
    let options = {headers: new HttpHeaders({'Content-type':'application/json'})};
    return this._http.get(this.apiURL + "workshop/"+email, options).pipe((res) => res);
  }

  showworkshops(): Observable<any> {
    
    let options = {headers: new HttpHeaders({'Content-type':'application/json'})};
    return this._http.get(this.apiURL + "allworkshops", options).pipe((res) => res);
  }
}
