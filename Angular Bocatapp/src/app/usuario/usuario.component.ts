import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Cliente } from '../models/cliente.interface';
import { Gerente } from '../models/gerente.interface';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  clientes: Cliente[];
  gerentes: Gerente[];
  opciones: true;
  
  
  columnsToDisplay = ['nombre','apellidos', 'username'];

  constructor(
    private usuarioService: UsuariosService,
  
  ) { }

  ngOnInit() {
    
      this.getListaClientes();
      this.getListaGerentes();      
  
    
  }

  getListaClientes(){
    this.usuarioService.getListaClientes().subscribe(resp =>{
      this.clientes = resp;
    });
  }

  getListaGerentes(){
    this.usuarioService.getListaGerentes().subscribe(resp =>{
      this.gerentes = resp;
    });
  }

  
}
