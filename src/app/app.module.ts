import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCorreoComponent } from './Components/lista-correo/lista-correo.component';
import { FormsModule } from '@angular/forms';
import { CorreoNuevoComponent } from './Components/correo-nuevo/correo-nuevo.component';
import { CorreoComponent } from './Components/correo/correo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCorreoComponent,
    CorreoNuevoComponent,
    CorreoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
