import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  postQuestion(question: any) {
    this.http.post('https://localhost:44377/api/questions', question).subscribe(res => console.log(res))
  }
}
