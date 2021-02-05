import { Component, OnInit } from '@angular/core';
import {vehicle} from '../../models/vehicle';
import {VehicleService} from '../../services/vehicle.services';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.scss']
})
export class ListVehiclesComponent implements OnInit {
  public user: User;
  public vehicle: vehicle;
  public findemail: number;
  public msg: boolean[] = [];
  public buttonName:any = 'Show';

public FoundVehicle : [];
  public FoundVehicles : any = [];
  public FoundUsers : any = [];
  constructor(private VehicleService: VehicleService, private UserService: UserService) { 
    this.vehicle = new vehicle("",0,"","","");
    this.user = new User("","","",0,"","","");
  }

  ngOnInit() {
  }
  onEdit(number) {
    if (this.msg[number]){
      this.msg[number] = false;
    } else{
    this.msg[number] = true;
  }}

  ShowVehicle(){
    this.VehicleService.showvehicle(this.findemail).subscribe(
      (res:any) => {
        if(res.statusCode != 200) {
          alert('No se encontró el usuario')
        } else{
          this.FoundVehicles = res.allVehicles;
        }
      }
    )
  }

  ShowVehicles(){
    this.VehicleService.showvehicles().subscribe(
      (res:any) => {
        if(res.statusCode != 200) {
          alert('No se encontró el usuario')
        } else{
         
          this.FoundVehicles = res.allUsers;
        }
      }
    )
  }

  UpdateVehicle(){
    this.FoundVehicles.forEach((vehiclevalue, index) => {
      
      if(this.msg[index]){
        this.msg[index] = false;
        console.log(vehiclevalue)
        this.VehicleService.updatevehicle(vehiclevalue).subscribe(
          (res:any) => {
            if(res.statusCode != 200){
              alert('No se puedo registrar el usuario');
            }
            else{
              alert('Registro Exitoso');
            }
          },
          (error) => {
            var errorMensaje = <any>error;
            if ( errorMensaje != null){
              console.log(error);
            }
          }
          )
      }
      
  });
    
  }
  RemoveVehicle(vehicle){
    
        this.VehicleService.removevehicle(vehicle.plate).subscribe(
          (res:any) => {
            if(res.statusCode != 200){
              alert('No se puedo registrar el usuario');
            }
            else{
              alert('Usuario Borrado');
              this.ShowVehicles()
            }
          },
          (error) => {
            var errorMensaje = <any>error;
            if ( errorMensaje != null){
              console.log(error);
            }
          }
          );
      
      
  
    
  }

  RegisterVehicle(){
    this.VehicleService.registrarvehicle(this.vehicle).subscribe(
    (res:any) => {
      if(res.statusCode != 200){
        alert('No se puedo registrar el usuario');
      }
      else{
        alert('Registro Exitoso');
      }
    },
    (error) => {
      var errorMensaje = <any>error;
      if ( errorMensaje != null){
        console.log(error);
      }
    }
    )
  }

  ShowUsers(){
    console.log("hi")
    this.UserService.showusers().subscribe(
      (res:any) => {
        if(res.statusCode != 200) {
          alert('No se encontró el usuario');
        } else{
          this.FoundUsers = res.allUsers;
        }
      }
    )
  }
}