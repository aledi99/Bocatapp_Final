import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.interface';
import { Gerente } from '../models/gerente.interface';
import { Usuario } from '../models/usuario.interface';

const URL_BASE = 'http://bocatapi.herokuapp.com';

const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  public getListaClientes(): Observable<Cliente[]> {

    const requestOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + sessionStorage.getItem('access_token'),
      })
    };

    return this.http.get<Cliente[]>(
      URL_BASE + '/client/list',
      requestOptions
    );
  }

  public getListaGerentes(): Observable<Gerente[]> {

    const requestOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + sessionStorage.getItem('access_token'),
      })
    };

    return this.http.get<Gerente[]>(
      URL_BASE + '/gerente/list',
      requestOptions
    );
  }

  public getClienteLogged(): Observable<Cliente>{
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
      })
    };

    return this.http.get<Cliente>(
      URL_BASE + '/client/me/',
      requestOptions);
  }
}
