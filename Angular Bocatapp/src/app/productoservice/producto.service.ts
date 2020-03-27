import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoResponse } from '../productomodel/producto';
import { ProductoDto2 } from '../productomodel/productofull';

const URL_BASE = 'http://bocatapi.herokuapp.com/api';
const URL_BASE2 = 'http://bocatapi.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  public getMyProductos(): Observable<ProductoDto2[]>{
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
      })
    };

    return this.http.get<ProductoDto2[]>(
      URL_BASE + '/local/me/productos/',
      requestOptions);
  }

  public newProducto(form : FormData): Observable<ProductoDto2> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + sessionStorage.getItem('access_token'),
      })
    };

    return this.http.post<ProductoDto2>(
      URL_BASE + '/producto/',
      form,
      requestOptions,
    )
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

  public deleteProducto(id : number) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
      })
    };

    return this.http.delete(
      URL_BASE + '/producto/' + id,
      requestOptions
    )
  }
}
