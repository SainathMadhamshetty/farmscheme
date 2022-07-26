import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl="http://localhost:8080/register";
  constructor(private httpClient: HttpClient) { }

  registerUser(register:Register):Observable<Object> {

    return this.httpClient.post(`${this.baseUrl}`,register);
  }
}
