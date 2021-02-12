import { Component, OnInit } from '@angular/core';
import {vehicle} from '../../models/vehicle';
import {VehicleService} from '../../services/vehicle.services';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {Record} from '../../models/records';
import {RecordService} from '../../services/records.service';
@Component({
  selector: 'app-record-service',
  templateUrl: './record-service.component.html',
  styleUrls: ['./record-service.component.scss']
})
export class RecordServiceComponent implements OnInit {
  public vehicle: vehicle;
  public user: User;
  public record: Record;
public findplate: String;
  public msg: boolean[] = [];
  public buttonName:any = 'Show';

public FoundRecord : [];
  public FoundRecords : any = [];
  public FoundVehicles : any = [];
  public FoundUsers : any = [];
  constructor(private RecordService : RecordService, private VehicleService: VehicleService, private UserService: UserService) { 
    this.user = new User("","","",0,"","","");
    this.vehicle = new vehicle("",0,"","","");
    this.record = new Record("","",0,"","")
  }

  ngOnInit() {
  }
  onEdit(number) {
    if (this.msg[number]){
      this.msg[number] = false;
    } else{
    this.msg[number] = true;
  }}

  ShowRecord(){
    console.log(this.findplate)
    this.RecordService.showrecord(this.findplate).subscribe(
      (res:any) => {
        if(res.statusCode != 200) {
          alert('No se encontró el usuario')
        } else{
          this.FoundRecords = res.allrecords;
        }
      }
    )
  }

  ShowRecords(){
    this.RecordService.showrecords().subscribe(
      (res:any) => {
        if(res.statusCode != 200) {
          alert('No se encontró el usuario')
        } else{
         
          this.FoundRecords = res.allrecords;
        }
      }
    )
  }

  UpdateRecord(){
    this.FoundRecords.forEach((recordvalue, index) => {
      
      if(this.msg[index]){
        this.msg[index] = false;
        console.log(recordvalue)
        this.RecordService.updaterecord(recordvalue).subscribe(
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
  RemoveRecord(Record){
        this.RecordService.removerecord(Record._id).subscribe(
          (res:any) => {
            if(res.statusCode != 200){
              alert('No se puedo registrar el usuario');
            }
            else{
              alert('Usuario Borrado');
              this.ShowRecords()
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

  RegisterRecord(){
    this.RecordService.registrarrecord(this.record).subscribe(
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
    this.ShowUsers();
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
  ShowUsers(){
    
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