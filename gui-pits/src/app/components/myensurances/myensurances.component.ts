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
  public user: vehicle;
  public ensurance: ensurance;
  public findemail: String;
  public msg: boolean[] = [];
  public buttonName:any = 'Show';

public FoundEnsurance : [];
  public FoundEnsurances : any = [];
  public FoundVehicles : any = [];
  constructor(private EnsuranceService: EnsuranceService, private VehicleService: VehicleService) { 
    this.ensurance = new ensurance("","",false,false,"",0,"");
    this.user = new vehicle("",0,"","","");
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
    console.log(this.findemail)
    this.EnsuranceService.showensurance(this.findemail).subscribe(
      (res:any) => {
        if(res.statusCode != 200) {
          alert('No se encontró el usuario')
        } else{
          this.FoundEnsurances = res.foundensurance;
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
         
          this.FoundEnsurances = res.allVehicles;
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
    
        this.EnsuranceService.removeensurance(ensurance.plate).subscribe(
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
          this.FoundVehicles = res.allVehicles;
        }
      }
    )
  }
}