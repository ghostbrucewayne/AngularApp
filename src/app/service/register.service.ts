import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { registermodel } from '../registermodel/registermodel';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private corsHeaders: HttpHeaders = new HttpHeaders();
  private baseURL = 'http://localhost:9098/api/v1/register';
  constructor(private httpClient: HttpClient) {
    this.corsHeaders= new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });  }

    getregisterList(): Observable<registermodel[]> {
      return this.httpClient.get<registermodel[]>(`${this.baseURL}`);
      }

  createRegister(register: registermodel): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,register);
  }
  getLoginByEmail(EmailID: string): Observable<registermodel>{
    console.log(this.httpClient.get<registermodel>(`${this.baseURL}/${EmailID}`));
    return this.httpClient.get<registermodel>(`${this.baseURL}/${EmailID}`);
  }

}
