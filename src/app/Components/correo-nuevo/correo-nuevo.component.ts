import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-correo-nuevo',
  templateUrl: './correo-nuevo.component.html',
  styleUrls: ['./correo-nuevo.component.scss']
})
export class CorreoNuevoComponent implements OnInit {

  correoNuevo: FormGroup;
  enviado = false;

  constructor(private formBuilder: FormBuilder) {  }

  ngOnInit() {
    this.correoNuevo = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      cuerpo: ['', [Validators.required, Validators.minLength(10)]],
      destinatario: ['', [Validators.required, Validators.email]],
    });
  }

  get formulario() { return this.correoNuevo.controls; }

  onSubmit() {
    this.enviado = true;

    if (this.correoNuevo.invalid) {
        return;
    }

    let correo = this.correoNuevo.value;
    correo.leido= false;
    correo.emisor= 'mckndo@gmail.com';

    alert("Correo Enviado \nEliminamos el formulario");
    this.onReset();
  }

  onReset() {
    this.enviado = false;
    this.correoNuevo.reset();
  }

}
