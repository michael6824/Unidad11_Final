import { Component } from '@angular/core';
import{Routes, RouterModule} from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { QuienessomosComponent} from './components/quienessomos/quienessomos.component';
import {ServicesComponent} from './components/services/services.component'
import {ListUsersComponent} from './components/list-users/list-users.component'
import {UpdateUserComponent} from './components/update-user/update-user.component'
import {AdminHomeComponent} from './components/admin-home/admin-home.component'
import {ListVehiclesComponent} from './components/list-vehicles/list-vehicles.component'
import {ListEnsurancesComponent} from './components/list-ensurances/list-ensurances.component'
import {ListFinesComponent} from './components/list-fines/list-fines.component'


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'who', component: QuienessomosComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'admin', component: AdminHomeComponent},
    {path: 'admin/users', component: ListUsersComponent},
    {path: 'admin/ensurances', component: ListEnsurancesComponent},
    {path: 'admin/vehicles', component: ListVehiclesComponent},
    {path: 'admin/fines', component: ListFinesComponent},
    {path: 'admin/update', component: UpdateUserComponent}
];

export const routing = RouterModule.forRoot(appRoutes);