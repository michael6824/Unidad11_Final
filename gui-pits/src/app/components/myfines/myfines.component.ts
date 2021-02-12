import { Component, OnInit } from '@angular/core';
import {vehicle} from '../../models/vehicle';
import {VehicleService} from '../../services/vehicle.services';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {fine} from '../../models/fines';
import {FineService} from '../../services/fines.services';


@Component({
  selector: 'app-myfines',
  templateUrl: './myfines.component.html',
  styleUrls: ['./myfines.component.scss']
})
export class MyfinesComponent implements OnInit {
  public tipo: boolean;
  public user: User;
  public vehicle: vehicle;
  public findcc: Number;
  public findplate: String;
  public msg: boolean[] = [];
  public buttonName:any = 'Show';
public fine: fine;
public FoundVehicle : [];
  public FoundVehicles : any = [];
  public FoundUsers : any = [];
  public FoundFines : any = [];
  public FoundFinescc : any = [];
  public FoundFinesplate : any = [];
  public FoundFinesplatefull : any = [];
  constructor(private VehicleService: VehicleService, private UserService: UserService, private FineService: FineService) { 
    this.vehicle = new vehicle("",0,"","","");
    this.user = new User("","","",0,"","","");
    this.fine = new fine("",true,0,"","",0,"");
  }

  ngOnInit() {
    this.retrive_data();
  }
  onEdit() {
    this.FoundVehicles.forEach((finevalue, index) => {
      this.findplate = finevalue.plate;
      
      this.ShowFine();
     
    })      
  }
  retrive_data(){
    this.user = JSON.parse(localStorage.getItem('user'))[0];
    this.findcc = this.user.cc;
    this.tipo = false;
    this.ShowFine();
    this.ShowVehiclebyuser();
}
  ShowFine(){
    this.FineService.showfine(this.findplate,this.findcc,this.tipo).subscribe(
      (res:any) => {
        
        if(res.statusCode != 200) {
          alert('No se encontró el usuario')
        } else{
          if (!this.tipo){
            this.FoundFinescc = res.foundvehicle;
          } else{
            this.FoundFinesplate = res.foundvehicle;
            this.FoundFinesplatefull= this.FoundFinesplatefull.concat(this.FoundFinesplate)
          }
          
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

  ShowVehiclebyuser(){
    
    this.VehicleService.showvehiclebyuser(this.user.cc).subscribe(
      (res:any) => {
        if(res.statusCode != 200) {
          alert('No se encontró el usuario')
        } else{
          this.tipo = true;
          this.FoundVehicles = res.foundvehicle;
          this.onEdit();
        }
      }
    )
  }
}
