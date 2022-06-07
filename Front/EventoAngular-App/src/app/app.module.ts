import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosComponent } from './Components/eventos/eventos.component';
import { PalestrantesComponent } from './Components/palestrantes/palestrantes.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './Components/footer/footer.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ContatosComponent } from './Components/contatos/contatos.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { TituloComponent } from './shared/nav/titulo/titulo.component';


import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgToastModule } from 'ng-angular-popup';
import { NgxSpinnerModule } from 'ngx-spinner';


import { EventoService } from './services/evento.service';
import { DateTimePipe } from './Helpers/DateTime.pipe';

@NgModule(
  {
  declarations: [
    AppComponent,
    EventosComponent,
      PalestrantesComponent,
      NavComponent,
      FooterComponent,
      ContatosComponent,
      PerfilComponent,
      DateTimePipe,
      DashboardComponent,
      TituloComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    FormsModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    NgToastModule,
    NgxSpinnerModule
  ],
  providers: [
    EventoService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
