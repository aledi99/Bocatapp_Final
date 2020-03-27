import { Component, OnInit } from '@angular/core';
import { EstablecimientoService } from 'src/app/establecimientoservice/establecimiento.service';
import { EstablecimientoDto2 } from 'src/app/establecimientomodel/establecimientodto';
import { EditarEstablecimientoDialogComponent } from 'src/app/editar-establecimiento-dialog/editar-establecimiento-dialog.component';
import { MatDialog } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/categoriaservice/categoria.service';
import { CategoriaDto2 } from 'src/app/establecimientomodel/categoriadto2';

@Component({
  selector: 'app-dashboard-perfil-local',
  templateUrl: './dashboard-perfil-local.component.html',
  styleUrls: ['./dashboard-perfil-local.component.scss']
})
export class DashboardPerfilLocalComponent implements OnInit {
  establecimiento : EstablecimientoDto2;
  errorMess = null;
  form : FormGroup
  file: File
  nombre: string;
  descripcion:string;
  presupuesto:number;
  horaApertura:string;
  horaCierre:string;
  latitud:string;
  longitud:string;
  listaNombreCategoria: CategoriaDto2[];
  nombreCategoria:CategoriaDto2;


  constructor(private establecimientoService : EstablecimientoService,  public dialog: MatDialog, private formBuilder: FormBuilder, private router: Router, private categoriaService: CategoriaService) {

    this.form = this.formBuilder.group({
      imagen: [null],
      nombre: [''],
      descripcion: [''],
      presupuesto: [null],
      horaApertura: [''],
      horaCierre: [''],
      latitud: [''],
      longitud: [''],
      nombreCategoria: ['']
      
    })
    this.establecimiento == null;
   }


  ngOnInit() {
    this.loadMyLocal();
    this.getCategorias();
  }

  loadMyLocal() {
    console.log("entra");
    this.establecimientoService.getMyLocal().subscribe(resp => {
      this.establecimiento = resp;
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

    this.establecimientoService.getImageLocal(filename).subscribe(resp => {
      retrieveResonse = resp;
      base64data = retrieveResonse.picByte;
      retrievedImage = 'data:image/png;base64,' + base64data;
    }).unsubscribe();

    return retrievedImage;

  }

  openDialog(id : number): void {
    const dialogRef = this.dialog.open(EditarEstablecimientoDialogComponent, {
      data: { id2: id},
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
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
    body.append('nombreCategoria', this.form.get('nombreCategoria').value);
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
      this.router.navigate(['/dashboard/me/establecimiento']);
      location.reload();
    });
  }

  getCategorias() {
    this.categoriaService.getCategoriaNames().subscribe(resp => {
      this.listaNombreCategoria = resp;
    })
  }
  

}
