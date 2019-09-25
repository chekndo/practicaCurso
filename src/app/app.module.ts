import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorreoComponent } from './Components/correo/correo.component';
import { ListaCorreoComponent } from './Components/lista-correo/lista-correo.component';
import { CorreoNuevoComponent } from './Components/correo-nuevo/correo-nuevo.component';


@NgModule({
  declarations: [
    AppComponent,
    CorreoComponent,
    ListaCorreoComponent,
    CorreoNuevoComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
