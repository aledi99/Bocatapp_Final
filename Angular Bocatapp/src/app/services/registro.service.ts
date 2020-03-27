import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import { SignUpDto } from '../models/signup.dto';
import { SignUpResponse } from '../models/signup-response.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

const URL_BASE = 'http://bocatapi.herokuapp.com';

const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('miToken')
  })
};


@Injectable({
  providedIn: 'root'
})

export class RegistroService {
  private jwtHelper: JwtHelperService;
  accessToken$: Observable<string>;
  private logoutSubject: Subject<string>;
  logout$: Observable<string>;

  constructor(private http: HttpClient, private router : Router) { }

  public Registro(form : FormData): Observable<SignUpResponse> {
  

    return this.http.post<SignUpResponse>(
      URL_BASE + '/gerente/register',
      form      
    )
  }

  
  
  
  
  /*signup(email: string, username:string, password:string, nombre:string, apellidos:string, edad:number, tlfContacto:number): Observable<SignUpResponse>{
    return this.http.post<SignUpResponse>( 'http://localhost:9000/' + 'gerente/register/', params,
    
  }*/

    



}
