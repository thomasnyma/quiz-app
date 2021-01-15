import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  question: any = {};
  questions: any;

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.api.getQuestions().subscribe(res => this.questions = res);
  }

  post(question: any) {
    this.api.postQuestion(question);
  }

}
