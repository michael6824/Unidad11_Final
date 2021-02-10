import { Component, OnInit } from '@angular/core';
import {vehicle} from '../../models/vehicle';
import {VehicleService} from '../../services/vehicle.services';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-myvehicles',
  templateUrl: './myvehicles.component.html',
  styleUrls: ['./myvehicles.component.scss']
})
export class MyvehiclesComponent implements OnInit {
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
    this.retrive_data();
  }
  onEdit(number) {
    if (this.msg[number]){
      this.msg[number] = false;
    } else{
    this.msg[number] = true;
  }}

  retrive_data(){
    this.ShowVehiclebyuser()
    this.user = JSON.parse(localStorage.getItem('user'))[0];
    console.log(this.user)
      }
  ShowVehicle(){
    console.log(this.findemail)
    this.VehicleService.showvehicle(this.findemail).subscribe(
      (res:any) => {
        if(res.statusCode != 200) {
          alert('No se encontró el usuario')
        } else{
          this.FoundVehicles = res.foundvehicle;
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

  ShowVehiclebyuser(){
    this.VehicleService.showvehiclebyuser(this.user.cc).subscribe(
      (res:any) => {
        if(res.statusCode != 200) {
          alert('No se encontró el usuario')
        } else{
         
          this.FoundVehicles = res.foundvehicle;
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