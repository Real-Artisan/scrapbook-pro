import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Contol-Allow-Origin': '*',
    "access-control-expose-headers": "Set-Cookie"});
    
user:any;
result:any;
userInfo:any;


  constructor( 
    private http: HttpClient,
    private router: Router
  ) { }

  public register(registerData: { email:string, first_name:string, password:string, last_name:string })
  {
    return this.http.post(`${environment.apiUrl}/user/`, registerData, {headers: this.headers});
  }

  public login(loginData: { email:string, password:string })
  {
    return this.http.post(`${environment.apiUrl}/user/login/v2`, loginData, { headers: this.headers, withCredentials:true });
  }
}
