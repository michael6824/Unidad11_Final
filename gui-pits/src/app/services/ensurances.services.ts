import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from'@angular/common/http';
import {Observable} from "rxjs";
import { ensurance } from '../models/ensurances';

@Injectable({
  providedIn: 'root'
})
export class EnsuranceService {

  apiURL = 'http://localhost:3000/api/';
  selectedUser: ensurance = new ensurance("","",true,true,"",0,"")
  constructor(private _http: HttpClient) { }
  registrarensurance(EnsuranceParams: ensurance): Observable<any> {
    let params = JSON.stringify(EnsuranceParams);
    let options = new HttpHeaders().set('Content-type','application/json');
    return this._http.post(this.apiURL + "ensurance/", params, {headers:options}).pipe((res) => res);
  }

  updateensurance(EnsuranceParams: ensurance): Observable<any> {
    let params = JSON.stringify(EnsuranceParams);
    let id = EnsuranceParams.plate;
    let options = new HttpHeaders().set('Content-type','application/json');
    return this._http.put(this.apiURL + "ensurance/" + id , params, {headers:options}).pipe((res) => res);
  }

  removeensurance(id: ensurance["_id"]): Observable<any> {
    let options = new HttpHeaders().set('Content-type','application/json');
    return this._http.delete(this.apiURL + "ensurance/" + id , {headers:options}).pipe((res) => res);
  }

  showensurance(plate: ensurance["plate"]): Observable<any> {
    
    let options = {headers: new HttpHeaders({'Content-type':'application/json'})};
    return this._http.get(this.apiURL + "ensurance/"+plate, options).pipe((res) => res);
  }

  showensurances(): Observable<any> {
    
    let options = {headers: new HttpHeaders({'Content-type':'application/json'})};
    return this._http.get(this.apiURL + "allEnsurances", options).pipe((res) => res);
  }
}
