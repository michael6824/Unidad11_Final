import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MisserviciosComponent } from './components/misservicios/misservicios.component';
import { ContentservicesComponent } from './components/contentservices/contentservices.component'
const appRoutes: Routes = [
    { path: '', component: MisserviciosComponent },
    { path: 'crear', component: MisserviciosComponent },
    { path: 'listar', component: ContentservicesComponent }
];

export const routing = RouterModule.forRoot(appRoutes);