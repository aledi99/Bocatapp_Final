import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../productoservice/producto.service';
import { ProductoResponse } from '../productomodel/producto';
import { MatDialog } from '@angular/material';
import { CrearProductoDialogComponent } from '../crear-producto-dialog/crear-producto-dialog.component';
import { ProductoDto2 } from '../productomodel/productofull';
import { BorrarProductoDialogComponent } from '../borrar-producto-dialog/borrar-producto-dialog.component';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  listaProductos : ProductoDto2[];
  producto : ProductoDto2;
  errorMess = null;
  

  constructor(private productoService: ProductoService, public dialog: MatDialog) {
    
  }

  ngOnInit() {
    this.loadMyProducts();
  }

  loadMyProducts() {
    console.log("entra");
    this.productoService.getMyProductos().subscribe(resp => {
      this.listaProductos = resp;
      console.log(resp);
      this.errorMess=null;
    }, error => {
      
      this.errorMess = error.error.message;
    });
  }
  
  getImage(filename : String) {
    var retrieveResonse = null;
    var base64data = null;
    var retrievedImage = null;

    this.productoService.getImage(filename).subscribe(resp => {
      retrieveResonse = resp;
      base64data = retrieveResonse.picByte;
      retrievedImage = 'data:image/png;base64,' + base64data;
    }).unsubscribe();

    return retrievedImage;

  }

  openDialog2(id : number): void {
    const dialogRef = this.dialog.open(BorrarProductoDialogComponent, {
      data: { id2: id},
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(CrearProductoDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
