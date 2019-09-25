import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo: any;
  
  constructor() {
    this.correo = {
      titulo: 'ASUNTO MAIL',
      cuerpo: 'Aqui va el cuerpo del correo',
      emisor: 'mckndo@gmail.com',
      destinatario: 'mckndo@gmail.com'
    }
   }

  
  ngOnInit() {
  }

}
