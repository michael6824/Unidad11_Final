import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  public user: User;
  public findemail: String;
  public show:boolean = false;
  public buttonName:any = 'Show';

public FoundUser : [];
  public FoundUsers : any = [];
  constructor(private UserService: UserService) { 
    this.user = new User("","","",0,"","","");
  }

  ngOnInit() {
  }
  onEdit(product: User) {
    this.UserService.selectedUser = Object.assign({}, product);
  }

  ShowUser(){
    this.UserService.showuser(this.findemail).subscribe(
      (res:any) => {
        if(res.statusCode != 200) {
          alert('No se encontró el usuario')
        } else{
          this.FoundUsers = res.allUsers;
        }
      }
    )
  }

  ShowUsers(){
    this.UserService.showusers().subscribe(
      (res:any) => {
        if(res.statusCode != 200) {
          alert('No se encontró el usuario')
        } else{
          this.FoundUsers = res.allUsers;
        }
      }
    )
  }
}
