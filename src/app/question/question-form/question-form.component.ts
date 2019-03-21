import { NgForm } from '@angular/forms';
import { Question } from './../question.model';
import { Component } from '@angular/core';
import devIcons from '../devicons';

@Component({
  selector: 'app-question-form',
  templateUrl: 'question-form.component.html',
  styleUrls: ['question-form.component.css'],
})

export class QuestionFormComponent {
  icons: Object[] = devIcons;
  selectedIcon: 'none';


  getIconVersion(icon: any) {
    let version = '';
    if (icon.versions.font.includes('plain-wordmark')) {
      version = 'plain-wordmark';
    } else {
      version = icon.versions.font[0];
    }

    if (icon.name === 'illustrator') {
      version = icon.versions.svg[0];
    }
    return version;
  }

  onClick(icon) {
    this.selectedIcon = icon;
  }

  onSubmit(form: NgForm) {
    const q = new Question (
      form.value.title,
      form.value.description,
      new Date(),
      form.value.icon,
    );
    console.log(q);
  }

}
