import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  question = {};
  questions: any;

  constructor(public api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const quizId = this.route.snapshot.paramMap.get('quizId');
    this.api.getQuestions(quizId).subscribe(res => this.questions = res);
  }

}
