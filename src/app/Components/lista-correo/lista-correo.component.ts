import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-correo',
  templateUrl: './lista-correo.component.html',
  styleUrls: ['./lista-correo.component.scss']
})
export class ListaCorreoComponent implements OnInit {

  correos: any[];

  constructor() {
    const correo1 = {
      titulo:"Correo 1",
      cuerpo: 'Cuerpo correo 1',
      emisor: 'mckndo@gmail.com',
      destinatario: 'mckndo@gmail.com',
      leido: true,
    };
    const correo2 = {
      titulo:"Correo 2",
      cuerpo: 'Cuerpo correo 2',
      emisor: 'mckndo@gmail.com',
      destinatario: 'mckndo@gmail.com',
      leido: true,
    };
    const correo3 = {
      titulo:"Correo 3",
      cuerpo: 'Cuerpo correo 3',
      emisor: 'mckndo@gmail.com',
      destinatario: 'mckndo@gmail.com',
      leido: false,
    };
    this.correos = [];
    this.correos.push(correo1);
    this.correos.push(correo2);
    this.correos.push(correo3);
   }

   
  ngOnInit() {
  }

}
