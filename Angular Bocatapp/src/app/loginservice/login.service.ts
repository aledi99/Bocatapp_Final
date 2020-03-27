import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenResponse } from '../loginmodel/token-response';
const accessTokenKey = 'access_token';
const refreshTokenKey = 'refresh_token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private jwtHelper: JwtHelperService;
  accessToken$: Observable<string>;
  private logoutSubject: Subject<string>;
  logout$: Observable<string>;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    console.log('init auth');
    this.jwtHelper = new JwtHelperService()
    this.logoutSubject = new Subject<string>();
    this.logout$ = this.logoutSubject.asObservable();
  }


  private loadAccessToken(retrieveAccessToken: boolean, refreshToken?: string, username?: string, password?: string):
    Observable<TokenResponse> {
    console.log(retrieveAccessToken ? 'login' : 'refresh_token');
    const params = retrieveAccessToken ?
      new HttpParams()
        .set('username', username)
        .set('password', password)
        .set('grant_type', 'password') :
      new HttpParams()
        .set(refreshTokenKey, refreshToken)
        .set('grant_type', refreshTokenKey);
    return this.http.post<TokenResponse>( 'http://bocatapi.herokuapp.com/' + 'oauth/token', params,
      {
        headers: new HttpHeaders().append('Authorization',
          'Basic ' + btoa('bocatapp-rule-5' + ':' + 'secret'))
      })

    }

    login(username: string, password: string): Promise<TokenResponse> {

      return this.loadAccessToken(true, null, username, password).toPromise();
    }

    getRole(username : String) : Observable<String> {
      const headers = new HttpHeaders({
        'Content-Type': 'text/plain; charset=utf-8'
      })
    
        


      return this.http.get<String>('http://bocatapi.herokuapp.com/role/' + username,
      {
        headers, responseType: 'text' as 'json'
      }
      )
    }

}
