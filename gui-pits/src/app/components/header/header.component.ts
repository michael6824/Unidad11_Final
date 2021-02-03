import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public user: User;
public findemail: String;
public FoundUser : [];

  constructor(private UserService: UserService) { 
    this.user = new User("","","",0,"","","");
  }

  ngOnInit(): void {}

  RegisterUser(){
    this.UserService.registraruser(this.user).subscribe(
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


  ShowUser(){
    this.UserService.showuser(this.findemail).subscribe(
      (res:any) => {
        if(res.statusCode != 200) {
          alert('No se encontró el usuario')
        } else{
          this.FoundUser = res.allUsers;
        }
      }
    )
  }

}
