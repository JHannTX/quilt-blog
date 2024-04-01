import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressComponent } from './progress/progress.component';
import { ProgressHomeComponent } from './progress/progress-home/progress-home.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { HomeComponent } from './home/home.component';
import { RandomThoughtComponent } from './random-thoughts/random-thought.component';
import { RandomThoughtHomeComponent } from './random-thoughts/random-thought-home/random-thought-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent,
    ProgressHomeComponent,
    ArticleCardComponent,
    HomeComponent,
    RandomThoughtComponent,
    RandomThoughtHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
