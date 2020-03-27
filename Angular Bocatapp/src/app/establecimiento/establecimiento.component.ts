import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { EstablecimientoService } from '../establecimientoservice/establecimiento.service';
import { EstablecimientoResponse } from '../models/establecimiento.interface';

@Component({
  selector: 'app-establecimiento',
  templateUrl: './establecimiento.component.html',
  styleUrls: ['./establecimiento.component.scss']
})
export class EstablecimientoComponent implements OnInit {

  form : FormGroup
  file: File
  nombre: string;
  descripcion:string;
  presupuesto:number;
  horaApertura:string;
  horaCierre:string;
  latitud:string;
  longitud:string;
  //gerenteId:number;

  constructor(private establecimientoService: EstablecimientoService, private formBuilder: FormBuilder, private router: Router)
   {
     this.form = this.formBuilder.group({
       imagen: [null],
       nombre: [''],
       descripcion: [''],
       presupuesto: [null],
       horaApertura: [''],
       horaCierre: [''],
       latitud: [''],
       longitud: ['']
       //gerenteId: [null]
     })

    }

  ngOnInit() {
  }

  uploadFile(event) {

    let reader = new FileReader();

    if(event.target.files && event.target.files.length > 0) {

      this.file = event.target.files[0];
    }
  }

  submitForm() {
    var body = new FormData();
    body.append('file', this.file);
    body.append('nombre', this.form.get('nombre').value);
    body.append('descripcion', this.form.get('descripcion').value);
    body.append('presupuesto', this.form.get('presupuesto').value);
    body.append('horaApertura', this.form.get('horaApertura').value);
    body.append('horaCierre', this.form.get('horaCierre').value);
    body.append('latitud', this.form.get('latitud').value);
    body.append('longitud', this.form.get('longitud').value);
    //body.append('gerenteId', this.form.get('gerenteId').value);

    console.log(body.get("file").valueOf());
    console.log(body.get("nombre").valueOf());
    console.log(body.get("descripcion").valueOf());
    console.log(body.get("presupuesto").valueOf());
    console.log(body.get("horaApertura").valueOf());
    console.log(body.get("horaCierre").valueOf());
    console.log(body.get("latitud").valueOf());
    console.log(body.get("longitud").valueOf());

;
    

    this.establecimientoService.añadirEstablecimiento(body).subscribe(resp => {
      if(resp)
      console.log(resp);
      location.reload();
    });
  }





}
