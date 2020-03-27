import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstablecimientoDto2 } from '../establecimientomodel/establecimientodto';
import { EditEstablecimientoDto } from '../establecimientomodel/establecimiento.editdto';
import { Router } from '@angular/router';
import { EstablecimientoResponse } from '../models/establecimiento.interface';

const URL_BASE = 'http://bocatapi.herokuapp.com/api';
const URL_BASE2 = 'http://bocatapi.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class EstablecimientoService {

  constructor(private http: HttpClient, private router: Router) { }


  public añadirEstablecimiento(form: FormData) : Observable<EstablecimientoResponse>{

    const requestOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + sessionStorage.getItem('access_token'),
    })
  };

    return this.http.post<EstablecimientoResponse>(
      URL_BASE + '/local/',
      form,
      requestOptions
    )
  }

  public getEstablecimientos(): Observable<EstablecimientoDto2[]>{
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
      })
    };

    return this.http.get<EstablecimientoDto2[]>(
      URL_BASE + '/local/',
      requestOptions);
  }

  public getEstablecimiento(id : number): Observable<EstablecimientoDto2> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
      })
    };

    return this.http.get<EstablecimientoDto2>(
      URL_BASE + '/local/' + id,
      requestOptions
    )
  }

  public editEstablecimiento(id : number, establecimiento : EditEstablecimientoDto) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
      })
    };

    return this.http.put(
      URL_BASE + '/local/' + id,
      establecimiento,
      requestOptions
    )
  }

  public getMyLocal() : Observable<EstablecimientoDto2> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
      })
    };

    return this.http.get<EstablecimientoDto2>(
      URL_BASE + '/local/me/',
      requestOptions);
  }

  public getImage(filename : String) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
      })
    };

    return this.http.get(
      URL_BASE2 + '/downloadFile/' +  filename
    )
  }

  public getImageLocal(filename : String) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
      })
    };

    return this.http.get(
      URL_BASE2 + '/downloadFile/' +  filename
    )
  }
}
