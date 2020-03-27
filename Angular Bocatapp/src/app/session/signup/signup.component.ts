import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { CustomValidators } from 'ng2-validation';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/services/registro.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form : FormGroup
  file: File
  email: string;
  username:string;
  password:string;
  nombre:string;
  apellidos:string;
  edad:number;
  tlfContacto:number;

  constructor(private registroService: RegistroService,private formBuilder: FormBuilder, private router: Router)
  {
    this.form = this.formBuilder.group({
      imagen: [null],
      email: [''],
      username: [''],
      password: [''],
      nombre: [''],
      apellidos: [''],
      edad: [null],
      tlfContacto: [null]

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
    body.append('email', this.form.get('email').value);
    body.append('username', this.form.get('username').value);
    body.append('password', this.form.get('password').value);
    body.append('nombre', this.form.get('nombre').value);
    body.append('apellidos', this.form.get('apellidos').value);
    body.append('edad', this.form.get('edad').value);
    body.append('tlfContacto', this.form.get('tlfContacto').value);

;

    this.registroService.Registro(body).subscribe(resp => {
      console.log(resp);
      this.router.navigate(['/']);
    });
  }



  
}
