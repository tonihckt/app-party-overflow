import { Question } from './../question/question.model';
import { Answer } from './answer.model';
import { User } from '../auth/user/user.model';
import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component ({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css'],
})

export class AnswerFormComponent {
  @Input() question: Question;
  onSubmit(form: NgForm) {
    console.log(form.value.description);
    const answer = new Answer(
      form.value.description,
      this.question,
      new Date(),
      new User(null, null, 'Miau', 'Chaou'),
    );
    this.question.answers.unshift(answer);
    form.reset();
  }
}
