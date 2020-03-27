import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EstablecimientoService } from '../establecimientoservice/establecimiento.service';
import { CategoriaService } from '../categoriaservice/categoria.service';
import { EstablecimientoDto2 } from '../establecimientomodel/establecimientodto';
import { CategoriaDto2 } from '../establecimientomodel/categoriadto2';
import { EditEstablecimientoDto } from '../establecimientomodel/establecimiento.editdto';

@Component({
  selector: 'app-editar-establecimiento-dialog',
  templateUrl: './editar-establecimiento-dialog.component.html',
  styleUrls: ['./editar-establecimiento-dialog.component.scss']
})
export class EditarEstablecimientoDialogComponent implements OnInit {
  form2 : FormGroup;
  listaNombreCategoria : CategoriaDto2[];
  establecimiento : EstablecimientoDto2;
  nombreCategoria : CategoriaDto2;
  editEstablecimientoDto : EditEstablecimientoDto;
  nombreCategoriaSeleccionado : String;
  horaApertura : Date;
  horaCierre : Date;

  constructor(private establecimientoService : EstablecimientoService, private categoriaService : CategoriaService, @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<EditarEstablecimientoDialogComponent>) {
    this.nombreCategoriaSeleccionado = '';
  }

  ngOnInit() {
    this.getEstablecimiento();
    this.getCategorias();
  }

  getEstablecimiento() {
    this.establecimientoService.getEstablecimiento(this.data.id2).subscribe(resp => {
        this.establecimiento = resp;
    })
  }

  editEstablecimiento() {
    this.editEstablecimientoDto = new EditEstablecimientoDto(this.establecimiento.nombre, this.establecimiento.descripcion, this.establecimiento.horaApertura, this.establecimiento.horaCierre, this.establecimiento.localizacion.latitud, this.establecimiento.localizacion.longitud, this.establecimiento.abierto, this.nombreCategoriaSeleccionado);

    console.log(this.editEstablecimientoDto);

    this.establecimientoService.editEstablecimiento(this.data.id2, this.editEstablecimientoDto).subscribe(resp => {
      console.log(resp);
    });
  }

  getCategorias() {
    this.categoriaService.getCategoriaNames().subscribe(resp => {
      this.listaNombreCategoria = resp;
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
