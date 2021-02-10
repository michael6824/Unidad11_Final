import { Component, OnInit } from '@angular/core';
import {vehicle} from '../../models/vehicle';
import {VehicleService} from '../../services/vehicle.services';
import {ensurance} from '../../models/ensurances';
import {EnsuranceService} from '../../services/ensurances.services';

@Component({
  selector: 'app-myensurances',
  templateUrl: './myensurances.component.html',
  styleUrls: ['./myensurances.component.scss']
})
export class MyensurancesComponent implements OnInit {
  public vehicle: vehicle;
  public ensurance: ensurance;
  public findplate: String;
  public msg: boolean[] = [];
  public buttonName:any = 'Show';

public FoundEnsurance : [];
  public FoundEnsurances : any = [];
  public FoundVehicles : any = [];
  constructor(private EnsuranceService: EnsuranceService, private VehicleService: VehicleService) { 
    this.ensurance = new ensurance("","",false,false,"",0,"");
    this.vehicle = new vehicle("",0,"","","");
  }

  ngOnInit() {
  }
  onEdit(number) {
    if (this.msg[number]){
      this.msg[number] = false;
    } else{
    this.msg[number] = true;
  }}

  ShowEnsurance(){
    console.log(this.findplate)
    this.EnsuranceService.showensurance(this.findplate).subscribe(
      (res:any) => {
        if(res.statusCode != 200) {
          alert('No se encontró el usuario')
        } else{
          this.FoundEnsurances = res.allSures;
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
        console.log(ensurancevalue)
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
              this.ShowEnsurances()
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
    console.log("hi")
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
}