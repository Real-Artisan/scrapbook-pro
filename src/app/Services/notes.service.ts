import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  
  private headers = new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Access-Contol-Allow-Origin': '*',
      "access-control-expose-headers": "Set-Cookie",
      "Access-Control-Allow-Credentials": "true" }
  );

  constructor(private http: HttpClient) { }

  public createNote(noteBody: { title:string, content:string})
  {
    return this.http.post(`${environment.apiUrl}/note/`, noteBody, { headers:this.headers, withCredentials:true });
  }

  public getMyNotes()
  {
    return this.http.get(`${environment.apiUrl}/note/`, {headers:this.headers, withCredentials:true});
  }

  public showCurrentNote(id:number)
  {
    return this.http.get(`${environment.apiUrl}/note/`+id);
  }

}
