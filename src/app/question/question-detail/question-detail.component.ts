import { QuestionService } from './../question.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Question } from '../question.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  // indica que es componete nuestro
  selector: 'app-question-detail',
  // que tample va a utilizar
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css'],

  providers: [QuestionService],
})

export class QuestionDetailComponent implements OnInit, OnDestroy {

  /*
  question: Question = new Question(
    'Pregunta sobre android',
    'Que pregunta es sobre android?',
    new Date,
    'devicon-android-plain',
  );
  */

 question?: Question;
 loading = true;
 sub: any;

 constructor(
   private  questionService: QuestionService,
   private route: ActivatedRoute,
 ) { }

 ngOnInit() {
   this.sub = this.route.params.subscribe(params => {
    this.questionService
      .getQuestion(params.id)
      .then((question: Question) => {
        this.question = question;
        this.loading = false;
      });

   });
 }

 ngOnDestroy() {
   this.sub.unsubscribe();
 }
}
