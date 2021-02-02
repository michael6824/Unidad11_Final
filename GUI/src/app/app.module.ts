import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing} from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentservicesComponent } from './components/contentservices/contentservices.component';
import { MisserviciosComponent } from './components/misservicios/misservicios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    QuienessomosComponent,
    SesionComponent,
    FooterComponent,
    ContentservicesComponent,
    MisserviciosComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
