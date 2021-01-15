import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();

  constructor(private http: HttpClient) {}

  getQuestions() {
    return this.http.get('https://localhost:44377/api/questions');
  }

  postQuestion(question: any) {
    this.http.post('https://localhost:44377/api/questions', question).subscribe(res => console.log(res))
  }

  putQuestion(question: any) {
    this.http.put(`https://localhost:44377/api/questions/${question.id}`, question).subscribe(res => console.log(res))
  }

  postQuiz(quiz: any) {
    this.http.post('https://localhost:44377/api/quizzes', quiz).subscribe(res => console.log(res))
  }

  selectQuestion(question: any) {
    this.selectedQuestion.next(question);
  }
}
