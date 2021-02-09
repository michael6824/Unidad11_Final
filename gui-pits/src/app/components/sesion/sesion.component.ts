import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.scss']
})
export class SesionComponent implements OnInit {
  public user: User;
  public FoundUser : [];
  public user_storage: any;
  constructor() { 
    this.user = new User("","","",0,"","","");
  }

  ngOnInit(): void {
    this.retrive_data();
  }

  retrive_data(){
   
this.user_storage = JSON.parse(localStorage.getItem('user'));
console.log(this.user_storage)
  }
  
}
