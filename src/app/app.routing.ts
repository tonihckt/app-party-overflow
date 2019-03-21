import { Component } from '@angular/core';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { Routes, RouterModule } from '@angular/router';
import { SigninScreenComponent } from './auth/signin/app-signin-component';
import { SignupScreenComponent } from './auth/signup/app-signup-component';

import { QUESTION_ROUTES } from './question/question.routing';

const APP_ROUTE: Routes = [
  { path: '', component: QuestionListComponent, pathMatch: 'full' },
  { path: 'signin', component: SigninScreenComponent },
  { path: 'signup', component: SignupScreenComponent },
  { path: 'questions', children: QUESTION_ROUTES },

];


export const Routing = RouterModule.forRoot(APP_ROUTE);
