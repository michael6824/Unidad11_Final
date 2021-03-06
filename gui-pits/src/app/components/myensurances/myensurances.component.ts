import { Component, OnInit } from '@angular/core';
import {vehicle} from '../../models/vehicle';
import {VehicleService} from '../../services/vehicle.services';
import {ensurance} from '../../models/ensurances';
import {EnsuranceService} from '../../services/ensurances.services';
import {User} from '../../models/user';

@Component({
  selector: 'app-myensurances',
  templateUrl: './myensurances.component.html',
  styleUrls: ['./myensurances.component.scss']
})
export class MyensurancesComponent implements OnInit {
  public vehicle: vehicle;
  public user: User;
  public ensurance: ensurance;
  public findplate: String;
  public msg: boolean[] = [];
  public buttonName:any = 'Show';
  public findcc: Number;



public FoundEnsurance : [];
  public FoundEnsurances : any = [];
  public FoundEnsurancesfull : any = [];
  public FoundVehicles : any = [];
  constructor(private EnsuranceService: EnsuranceService, private VehicleService: VehicleService) { 
    this.ensurance = new ensurance("","",false,false,"",0,"");
    this.vehicle = new vehicle("",0,"","","");
    this.user = new User("","","",0,"","","");
  }

  ngOnInit() {
this.retrive_data();
    this.ShowEnsurance();
  }
  onEdit() {
    this.FoundVehicles.forEach((finevalue, index) => {
      this.findplate = finevalue.plate;
      
      this.ShowEnsurance();
     
    })
  }

  retrive_data(){
    this.user = JSON.parse(localStorage.getItem('user'))[0];
    this.findcc = this.user.cc;
    this.ShowVehiclebyuser();
}

  ShowEnsurance(){
    
    this.EnsuranceService.showensurance(this.findplate).subscribe(
      (res:any) => {
        if(res.statusCode != 200) {
          alert('No se encontró el usuario')
        } else{
          this.FoundEnsurances = res.allSures;
          this.FoundEnsurancesfull = this.FoundEnsurancesfull.concat(this.FoundEnsurances)
         
        }
      }
    )
  }

  ShowEnsurances(){
    this.EnsuranceService.showensurances().subscribe(
      (res:any) => {
        if(res.statusCode != 200) {
          alert('No se encontró el usuario')
        } else{
         
          this.FoundEnsurances = res.allSures;
        }
      }
    )
  }

  UpdateEnsurance(){
    this.FoundEnsurances.forEach((ensurancevalue, index) => {
      
      if(this.msg[index]){
        this.msg[index] = false;
       
        this.EnsuranceService.updateensurance(ensurancevalue).subscribe(
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
  RemoveEnsurance(ensurance){
        this.EnsuranceService.removeensurance(ensurance._id).subscribe(
          (res:any) => {
            if(res.statusCode != 200){
              alert('No se puedo registrar el usuario');
            }
            else{
              alert('Usuario Borrado');
              this.ShowVehiclebyuser();
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

  RegisterEnsurance(){
    this.EnsuranceService.registrarensurance(this.ensurance).subscribe(
    (res:any) => {
      if(res.statusCode != 200){
        alert('No se puedo registrar el usuario');
      }
      else{
        alert('Registro Exitoso');
        this.ShowVehiclebyuser();
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
          alert('No se encontró el usuario');
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
          this.FoundEnsurancesfull = [];
          this.onEdit();
        }
      }
    )
  }
}