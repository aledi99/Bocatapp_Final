import { Component, OnInit, Inject } from '@angular/core';
import { ProductoService } from '../productoservice/producto.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-borrar-producto-dialog',
  templateUrl: './borrar-producto-dialog.component.html',
  styleUrls: ['./borrar-producto-dialog.component.scss']
})
export class BorrarProductoDialogComponent implements OnInit {
  id : number;

  constructor(private productoService : ProductoService, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<BorrarProductoDialogComponent>) {
    
   }

  ngOnInit() {
    this.id = this.data.id2;
  }

  eliminarProducto() {
    this.productoService.deleteProducto(this.id).subscribe(resp => {
      console.log(resp);
      location.reload();
    })   
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

  }

  

