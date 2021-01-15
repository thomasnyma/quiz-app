import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question: any = {};

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.api.questionSelected.subscribe(question => this.question = question)
  }

  post(question: any) {
    this.api.postQuestion(question);
  }

}
