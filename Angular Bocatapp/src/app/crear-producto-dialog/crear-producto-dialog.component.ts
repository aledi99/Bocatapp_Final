import { Component, OnInit, Inject } from '@angular/core';
import { ProductoService } from '../productoservice/producto.service';
import { map } from 'rxjs/operators';
import { HttpEventType } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crear-producto-dialog',
  templateUrl: './crear-producto-dialog.component.html',
  styleUrls: ['./crear-producto-dialog.component.scss']
})
export class CrearProductoDialogComponent implements OnInit {
  form : FormGroup
  file: File
  nombre: string;
  descripcion: string;
  precio: number;
  gluten: boolean;
  lactosa: boolean;
  marked = false;
  marked2 = false;




  constructor(private productoService : ProductoService, @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<CrearProductoDialogComponent>) {
    this.form = this.formBuilder.group({
      imagen: [null],
      nombre: [''],
      descripcion: [''],
      precio: [null],
      gluten: [false],
      lactosa: [false],
    })
   }

  ngOnInit() {
  }

  toggleVisibility(e){
    this.marked= e.target.checked;
  }

  toggleVisibility2(e){
    this.marked2 = e.target.checked;
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
    body.append('precio', this.form.get('precio').value);
    body.append('glucosa', this.form.get('gluten').value);
    body.append('lactosa', this.form.get('lactosa').value);

    console.log(body.get("file").valueOf());
    console.log(body.get("nombre").valueOf());
    console.log(body.get("descripcion").valueOf());
    console.log(body.get("precio").valueOf());
    console.log(body.get("glucosa").valueOf());
    console.log(body.get("lactosa").valueOf());

    this.productoService.newProducto(body).subscribe(resp => {
      console.log(resp);
      location.reload();
      this.onNoClick();
    
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
