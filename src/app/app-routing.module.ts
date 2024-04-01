import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProgressComponent } from './progress/progress.component';
import { ProgressHomeComponent } from './progress/progress-home/progress-home.component';
import { HomeComponent } from './home/home.component';
import { RandomThoughtComponent } from './random-thoughts/random-thought.component';
import { RandomThoughtHomeComponent } from './random-thoughts/random-thought-home/random-thought-home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'progress/:urlSegment',
    component: ProgressComponent
  },
  {
    path: 'progress',
    component: ProgressHomeComponent
  },
  {
    path: 'random-thought/:urlSegment',
    component: RandomThoughtComponent
  },
  {
    path: 'random-thought',
    component: RandomThoughtHomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
