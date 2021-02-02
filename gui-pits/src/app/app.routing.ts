import { Component } from '@angular/core';
import{Routes, RouterModule} from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { QuienessomosComponent} from './components/quienessomos/quienessomos.component';
import {ServicesComponent} from './components/services/services.component'
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'who', component: QuienessomosComponent},
    {path: 'services', component: ServicesComponent}
];

export const routing = RouterModule.forRoot(appRoutes);