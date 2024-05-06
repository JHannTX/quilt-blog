import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProgressComponent } from './progress/progress.component';
import { ProgressHomeComponent } from './progress/progress-home/progress-home.component';
import { HomeComponent } from './home/home.component';
import { RandomThoughtComponent } from './random-thoughts/random-thought.component';
import { RandomThoughtHomeComponent } from './random-thoughts/random-thought-home/random-thought-home.component';
import { TechniqueComponent } from './techniques/technique.component';
import { TechniqueHomeComponent } from './techniques/technique-home/technique-home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'progress/:urlSegment',
    component: ProgressComponent,
    title: 'progress'
  },
  {
    path: 'progress',
    component: ProgressHomeComponent,
    title: 'progress'
  },
  {
    path: 'completed/:urlSegment',
    component: ProgressComponent,
    title: 'completed'
  },
  {
    path: 'completed',
    component: ProgressHomeComponent,
    title: 'completed'
  },
  {
    path: 'designing/:urlSegment',
    component: ProgressComponent,
    title: 'designing'
  },
  {
    path: 'designing',
    component: ProgressHomeComponent,
    title: 'designing'
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
    path: 'technique/:urlSegment',
    component: TechniqueComponent
  },
  {
    path: 'technique',
    component: TechniqueHomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
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
