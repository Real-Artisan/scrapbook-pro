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
    'Access-Contol-Allow-Origin': '*'
  });
  constructor( private http: HttpClient ) { }
public isAuthenticated()
{
  if(sessionStorage.getItem("userInfo"))
  {
    return true;
  }
  else
  {
    return false;
  }
}


}