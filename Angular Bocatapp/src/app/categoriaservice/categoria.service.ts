import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriaDto2 } from '../establecimientomodel/categoriadto2';

const URL_BASE = 'http://bocatapi.herokuapp.com/api';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http : HttpClient) { }

  public getCategoriaNames(): Observable<CategoriaDto2[]> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
      })
    };

    return this.http.get<CategoriaDto2[]>(URL_BASE + '/categorias/name',
      requestOptions
      );
  
}

  
}
