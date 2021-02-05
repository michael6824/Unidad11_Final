import { Component, OnInit } from '@angular/core';
import {vehicle} from '../../models/vehicle';
import {VehicleService} from '../../services/vehicle.services';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {fine} from '../../models/fines';
import {FineService} from '../../services/fines.services';

@Component({
  selector: 'app-list-fines',
  templateUrl: './list-fines.component.html',
  styleUrls: ['./list-fines.component.scss']
})
export class ListFinesComponent implements OnInit {

  public user: User;
  public vehicle: vehicle;
  public findemail: number;
  public msg: boolean[] = [];
  public buttonName:any = 'Show';
public fine: fine;
public FoundVehicle : [];
  public FoundVehicles : any = [];
  public FoundUsers : any = [];
  public FoundFines : any = [];
  constructor(private VehicleService: VehicleService, private UserService: UserService, private FineService: FineService) { 
    this.vehicle = new vehicle("",0,"","","");
    this.user = new User("","","",0,"","","");
    this.fine = new fine("",true,0,"","",0,"");
  }

  ngOnInit() {
  }
  onEdit(number) {
    if (this.msg[number]){
      this.msg[number] = false;
    } else{
    this.msg[number] = true;
  }}

  ShowFine(){
    this.FineService.showfine(this.findemail).subscribe(
      (res:any) => {
        if(res.statusCode != 200) {
          alert('No se encontró el usuario')
        } else{
          this.FoundFines = res.allFines;
        }
      }
    )
  }

  ShowFines(){
    this.FineService.showfines().subscribe(
      (res:any) => {
        if(res.statusCode != 200) {
          alert('No se encontró el usuario')
        } else{
         
          this.FoundFines = res.allUsers;
        }
      }
    )
  }

  UpdateFine(){
    this.FoundFines.forEach((finevalue, index) => {
      
      if(this.msg[index]){
        this.msg[index] = false;
        console.log(finevalue)
        this.FineService.updatefine(finevalue).subscribe(
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
  RemoveFine(fine){
    
        this.FineService.removefine(fine.plate).subscribe(
          (res:any) => {
            if(res.statusCode != 200){
              alert('No se puedo registrar el usuario');
            }
            else{
              alert('Usuario Borrado');
              this.ShowFines()
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

  RegisterFine(){
    this.FineService.registrarfine(this.fine).subscribe(
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
