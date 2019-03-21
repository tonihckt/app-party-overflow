import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Material angular
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import 'hammerjs';

// componentes crados van declaraton
import { GreetComponent } from './components/greet/greet.component';

import { QuestionDetailComponent } from './question/question-detail/question-detail.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionFormComponent } from './question/question-form/question-form.component';
import { AnswerFormComponent } from './answers/answer-form.component';

import { SigninScreenComponent } from './auth/signin/app-signin-component';
import { SignupScreenComponent } from './auth/signup/app-signup-component';


import { MomentModule } from 'ngx-moment';

import { Routing } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    QuestionDetailComponent,
    QuestionListComponent,
    QuestionFormComponent,
    AnswerFormComponent,
    SigninScreenComponent,
    SignupScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    Routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
