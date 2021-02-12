import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from'@angular/common/http';
import {Observable} from "rxjs";
import { vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  apiURL = 'http://localhost:3000/api/';
  selectedUser: vehicle = new vehicle("",0,"","","");
  constructor(private _http: HttpClient) { }
  registrarvehicle(VehicleParams: vehicle): Observable<any> {
    let params = JSON.stringify(VehicleParams);
    let options = new HttpHeaders().set('Content-type','application/json');
    return this._http.post(this.apiURL + "vehicle/", params, {headers:options}).pipe((res) => res);
  }

  updatevehicle(VehicleParams: vehicle): Observable<any> {
    let params = JSON.stringify(VehicleParams);
    let id = VehicleParams.plate;
    let options = new HttpHeaders().set('Content-type','application/json');
    return this._http.put(this.apiURL + "vehicle/" + id , params, {headers:options}).pipe((res) => res);
  }

  removevehicle(id: vehicle["_id"]): Observable<any> {
    let options = new HttpHeaders().set('Content-type','application/json');
    console.log(id)
    return this._http.delete(this.apiURL + "vehicle/" + id , {headers:options}).pipe((res) => res);
  }

  showvehicle(email: vehicle["cc"]): Observable<any> {
    
    let options = {headers: new HttpHeaders({'Content-type':'application/json'})};
    return this._http.get(this.apiURL + "vehicle/"+email, options).pipe((res) => res);
  }

  showvehiclebyuser(email: vehicle["cc"]): Observable<any> {
    
    let options = {headers: new HttpHeaders({'Content-type':'application/json'})};
    return this._http.get(this.apiURL + "Vehiclebyuser/"+email, options).pipe((res) => res);
  }

  showvehicles(): Observable<any> {
    
    let options = {headers: new HttpHeaders({'Content-type':'application/json'})};
    return this._http.get(this.apiURL + "allvehicles", options).pipe((res) => res);
  }
}
