import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from'@angular/common/http';
import {Observable} from "rxjs";
import { fine } from '../models/fines';

@Injectable({
  providedIn: 'root'
})
export class FineService {

  apiURL = 'http://localhost:3000/api/';
  selectedUser: fine = new fine("",true,0,"","",0,"")
  constructor(private _http: HttpClient) { }
  registrarfine(FineParams: fine): Observable<any> {
    let params = JSON.stringify(FineParams);
    let options = new HttpHeaders().set('Content-type','application/json');
    return this._http.post(this.apiURL + "fine/", params, {headers:options}).pipe((res) => res);
  }

  updatefine(FineParams: fine): Observable<any> {
    let params = JSON.stringify(FineParams);
    let id = FineParams._id;
    let options = new HttpHeaders().set('Content-type','application/json');
    return this._http.put(this.apiURL + "fine/" + id , params, {headers:options}).pipe((res) => res);
  }

  removefine(id: fine["_id"]): Observable<any> {
    let options = new HttpHeaders().set('Content-type','application/json');
    return this._http.delete(this.apiURL + "fine/" + id , {headers:options}).pipe((res) => res);
  }

  showfine(plate: fine["plate"],cc: fine["cc"], tipo: fine["type"]): Observable<any> {
    
    let options = {headers: new HttpHeaders({'Content-type':'application/json'})};
    return this._http.get(this.apiURL + "fine/"+plate+","+cc+","+tipo, options).pipe((res) => res);
  }

  showfines(): Observable<any> {
    
    let options = {headers: new HttpHeaders({'Content-type':'application/json'})};
    return this._http.get(this.apiURL + "allfines", options).pipe((res) => res);
  }
}
