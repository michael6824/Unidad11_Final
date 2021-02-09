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
import {SesionComponent} from './components/sesion/sesion.component'
import {MyensurancesComponent} from './components/myensurances/myensurances.component'
import {MyfinesComponent} from './components/myfines/myfines.component'
import {MyvehiclesComponent} from './components/myvehicles/myvehicles.component'
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
    {path: 'admin/update', component: UpdateUserComponent},
    {path: 'myaccount', component: SesionComponent},
    {path: 'myaccount/myensurances', component: MyensurancesComponent},
    {path: 'myaccount/myfines', component: MyfinesComponent},
    {path: 'myaccount/myvehicles', component: MyvehiclesComponent}
];

export const routing = RouterModule.forRoot(appRoutes);