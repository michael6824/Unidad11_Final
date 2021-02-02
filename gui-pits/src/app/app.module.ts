import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing} from './app.routing';
import{FormsModule} from '@angular/forms'
import{ HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { ServicesComponent } from './components/services/services.component';
import { SesionComponent } from './components/sesion/sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    QuienessomosComponent,
    ServicesComponent,
    SesionComponent
  ],
  imports: [
    BrowserModule, routing, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }