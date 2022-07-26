import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from './register';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  private baseUrl="http://localhost:8080/login";
  constructor(private httpClient: HttpClient) { }

  loginUser(user: User ):Observable<object>{
    console.log(user.email )
    const id=user.email;
   return this.httpClient.post(this.baseUrl+id,user);
  }

  // public getUser(user.email){
  //   return this.httpClient.get(`${this.baseUrl}`)
  // }

  getUserById(user:User,email: String): Observable<Register>{
    const id=user.email;
    console.log(this.httpClient.get<Register>(`${this.baseUrl}/${id}`))
    return this.httpClient.get<Register>(`${this.baseUrl}/${id}`);
  }

}
