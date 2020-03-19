import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
link = 'http://localhost:3000/api/users/login';
  constructor(
    private http: HttpClient
  ) { }
  login(credentials){
    return this.http.post(this.link, credentials);
  }
}
