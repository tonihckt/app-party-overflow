import { QuestionService } from './../question.service';
import { Question } from './../question.model';
import { Component, OnInit } from '@angular/core';

/*
const q = new Question (
  '¿Como se hace un titulo?',
  'Esta es mi pregunta...',
  new Date(),
  'devicon-android-plain',
);
*/

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],

  providers: [QuestionService]
})

export class QuestionListComponent implements OnInit {
  constructor(private questionService: QuestionService) {}
  //questions: Question[] =  new Array(10).fill(q);

  questions: Question[];
  loading = true;

  ngOnInit() {
    this.loading = true;
    this.questionService
      .getQuestions()
      .then((questions: Question[]) => {
        this.questions = questions;
        this.loading = false;
      });
  }
}
