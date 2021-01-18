import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  get isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  register(credentials: any) {
    this.http.post(`https://localhost:44377/api/account`, credentials, { responseType: 'text' }).subscribe(res => this.authenticate(res));
  }

  login(credentials: any) {
    this.http.post(`https://localhost:44377/api/account/login`, credentials, { responseType: 'text' }).subscribe(res => this.authenticate(res));
  }

  authenticate(res: any) {
    localStorage.setItem('token', res);

    this.router.navigate(['/']);
  }

  logout() {
    localStorage.removeItem('token');
  }

}
