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
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ListVehiclesComponent } from './components/list-vehicles/list-vehicles.component';
import { ListEnsurancesComponent } from './components/list-ensurances/list-ensurances.component';
import { ListFinesComponent } from './components/list-fines/list-fines.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { MyensurancesComponent } from './components/myensurances/myensurances.component';
import { MyvehiclesComponent } from './components/myvehicles/myvehicles.component';
import { MyfinesComponent } from './components/myfines/myfines.component';
import { RecordsComponent } from './components/records/records.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { EnsuranceServiceComponent } from './components/ensurance-service/ensurance-service.component';
import { VehicleServiceComponent } from './components/vehicle-service/vehicle-service.component';
import { FineServiceComponent } from './components/fine-service/fine-service.component';
import { RecordServiceComponent } from './components/record-service/record-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    QuienessomosComponent,
    ServicesComponent,
    SesionComponent,
    ListUsersComponent,
    ListVehiclesComponent,
    ListEnsurancesComponent,
    ListFinesComponent,
    UpdateUserComponent,
    AdminHomeComponent,
    MyensurancesComponent,
    MyvehiclesComponent,
    MyfinesComponent,
    RecordsComponent,
    WorkshopsComponent,
    EnsuranceServiceComponent,
    VehicleServiceComponent,
    FineServiceComponent,
    RecordServiceComponent
  ],
  imports: [
    BrowserModule, routing, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
