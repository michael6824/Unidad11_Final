import { Component, OnInit } from '@angular/core';
import {vehicle} from '../../models/vehicle';
import {VehicleService} from '../../services/vehicle.services';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {fine} from '../../models/fines';
import {FineService} from '../../services/fines.services';

@Component({
  selector: 'app-fine-service',
  templateUrl: './fine-service.component.html',
  styleUrls: ['./fine-service.component.scss']
})
export class FineServiceComponent implements OnInit {

  public tipo: false;
  public user: User;
  public vehicle: vehicle;
  public findcc: number;
  public findplate: String;
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
    this.FineService.showfine(this.findplate,this.findcc,this.tipo).subscribe(
      (res:any) => {
        console.log(res)
        if(res.statusCode != 200) {
          alert('No se encontró el usuario')
        } else{
          this.FoundFines = res.foundvehicle;
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
         
          this.FoundFines = res.allfines;
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
    
        this.FineService.removefine(fine._id).subscribe(
          (res:any) => {
            if(res.statusCode != 200){
              alert('No se puedo borrar la multa');
            }
            else{
              alert('Multa Borrada');
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
   if(this.fine.type){
     this.fine.cc=null;
   } else{
     this.fine.plate="";
   }
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

    this.fine.cc = null;
    this.fine.plate = "";

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
    this.ShowVehicles();
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
