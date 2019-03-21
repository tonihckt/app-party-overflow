import { QuestionFormComponent } from './question-form/question-form.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { QuestionListComponent } from './question-list/question-list.component';

export const QUESTION_ROUTES = [
  { path: '', component: QuestionListComponent },
  { path: 'new', component: QuestionFormComponent },
  { path: ':id', component: QuestionDetailComponent },
];
