import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
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
public correct: false;
public pass: String;
public save_user: User;
public user_storage: any;

  constructor(private UserService: UserService) { 
    this.user = new User("","","",0,"","","");
  }

  ngOnInit(): void {
    //localStorage.removeItem("user");
    this.correct = JSON.parse(localStorage.getItem('correct'));
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  closes(){
    this.correct = false;
    localStorage.removeItem("user");
    localStorage.removeItem("correct");
  }

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

SaveUser(){
  const userString = JSON.stringify(this.save_user);
  const correctString = JSON.stringify(this.correct);
  localStorage.setItem('user',userString);
  localStorage.setItem('correct',correctString);
}
  ShowUser(){
    this.UserService.checkpass(this.findemail, this.pass).subscribe(
      (res:any) => {
        if(res.statusCode != 200) {
          alert('No se encontró el usuario')
        } else{
          
          this.correct = res.correct;
          this.save_user = res.user;
          this.SaveUser();
        }
      }
    )
  }

}
