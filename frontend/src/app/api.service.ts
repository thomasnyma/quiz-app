import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';

const endPoint = 'https://localhost:44377';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();

  private selectedQuiz = new Subject<any>();
  quizSelected = this.selectedQuiz.asObservable();

  constructor(private http: HttpClient) {}

  getQuestions(quizId: any) {
    return this.http.get(`${endPoint}/api/questions/${quizId}`);
  }
  
  getQuizzes() {
    return this.http.get(`${endPoint}/api/quizzes`);
  }

  postQuestion(question: any) {
    this.http.post(`${endPoint}/api/questions`, question).subscribe(res => console.log(res))
  }

  putQuestion(question: any) {
    this.http.put(`${endPoint}/api/questions/${question.id}`, question).subscribe(res => console.log(res))
  }

  putQuiz(quiz: any) {
    this.http.put(`${endPoint}/api/quizs/${quiz.id}`, quiz).subscribe(res => console.log(res))
  }

  postQuiz(quiz: any) {
    this.http.post(`${endPoint}/api/quizzes`, quiz).subscribe(res => console.log(res))
  }

  selectQuestion(question: any) {
    this.selectedQuestion.next(question);
  }

  selectQuiz(quiz: any) {
    this.selectedQuiz.next(quiz);
  }
}
