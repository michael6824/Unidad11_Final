import { Component } from '@angular/core';
import{Routes, RouterModule} from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { QuienessomosComponent} from './components/quienessomos/quienessomos.component';
import {ServicesComponent} from './components/services/services.component'
import {ListUsersComponent} from './components/list-users/list-users.component'
import {UpdateUserComponent} from './components/update-user/update-user.component'
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'who', component: QuienessomosComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'admin', component: ListUsersComponent},
    {path: 'admin/update', component: UpdateUserComponent}
];

export const routing = RouterModule.forRoot(appRoutes);