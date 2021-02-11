import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FinishedComponent } from '../finished/finished.component';

@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.css'],
})
export class PlayQuizComponent implements OnInit {
  constructor(
    public api: ApiService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  quizId: any;
  questions: any;

  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get('quizId');
    this.api.getQuestions(this.quizId).subscribe((res) => {
      this.questions = res;

      this.questions.forEach((q: any) => {
        q.answers = [q.correctAnswer, q.answer1, q.answer2, q.answer3];
        shuffle(q.answers);
      });
    });
  }

  finish() {
    let correct = 0;
    this.questions.forEach((q: any) => {
      if (q.correctAnswer == q.selectedAnswer) correct++;
    });

    const dialogRef = this.dialog.open(FinishedComponent, {
      data: { correct, total: this.questions.length },
    });
    console.log(correct);
  }

  step = 0;
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}

function shuffle(a: any) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}
