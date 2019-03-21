import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Question } from './question.model';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

import urljoin from 'url-join';
//import * as urljoin from 'url-join';
//import urljoin = require('url-join');


import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class QuestionService {

  private questionsUrl: string;

  constructor(private http: HttpClient) {
    //this.questionsUrl = 'http://localhost:3000/api';

    this.questionsUrl = urljoin (environment.apiUrl, 'questions');

  }
  getQuestions(): Promise<void | Question[]> {
    return this.http.get(this.questionsUrl)
      .toPromise()
      //.then(response => response.json() as Question [])
      .then(response => response as Question [])
      //.then( response => JSON.parse(JSON.stringify(response as Question[])))
      .catch(this.handleError);
  }

  getQuestion(id: any): Promise<void | Question> {
    const url = urljoin(this.questionsUrl, id);
    return this.http.get(url)
      .toPromise()
      .then(response => response as Question)
      .catch(this.handleError);
  }

  addQuestion(question: Question) {
    // genera string a partir de la pregunta
    const body = JSON.stringify(question);
    const headers = new HttpHeaders ({'Content-type': 'application/json'});

    return this.http.post(this.questionsUrl, body, { headers})
      //.map((response: HttpResponse) => response.json())
      //.catch((error: HttpResponse) => Observable.throw(error.json));
      .pipe(map((response: Response) => response.json()),
      catchError((error: Response) => Observable.throw(error.json())));
  }

  handleError(error: any) {
    const errMsg = error.message ? error.message :
      error.status ? `${error.status} - ${error.statusTest}` : 'server error';
    console.log(errMsg);
  }

}
