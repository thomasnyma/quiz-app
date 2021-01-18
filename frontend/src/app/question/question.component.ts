import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question: any = {};
  quizId: any;

  constructor(public api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get('quizId');
    this.api.questionSelected.subscribe(question => this.question = question);
  }

  post(question: any) {
    question.quizId = this.quizId;
    this.api.postQuestion(question);
  }

}
