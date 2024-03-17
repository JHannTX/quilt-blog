import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProgressComponent } from './progress/progress.component';
import { ProgressHomeComponent } from './progress/progress-home/progress-home.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'progress/:urlSegment',
    component: ProgressComponent
  },
  {
    path: 'progress',
    component: ProgressHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
