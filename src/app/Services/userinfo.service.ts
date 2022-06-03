import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
headers = new HttpHeaders(
  {
    'Content-Type': 'application/json',
    'Access-Contol-Allow-Origin': '*',
    "access-control-expose-headers": "Set-Cookie",
    'Access-Control-Allow-Credentials': 'true',
  });
  constructor( private http: HttpClient ) { }
public isAuthenticated()
{
  return this.http.get(`${environment.apiUrl}/user/`, {headers:this.headers, withCredentials:true}).pipe(map(result => result));
}


}
