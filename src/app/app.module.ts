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
import { TechniqueComponent } from './techniques/technique.component';
import { TechniqueHomeComponent } from './techniques/technique-home/technique-home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent,
    ProgressHomeComponent,
    ArticleCardComponent,
    HomeComponent,
    RandomThoughtComponent,
    RandomThoughtHomeComponent,
    TechniqueComponent,
    TechniqueHomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
