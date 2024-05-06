import { Injectable } from '@angular/core';
import { Article, Title} from '../models/article-interfaces';
import { progressPages } from './progress-pages';
import { of } from 'rxjs';
import { completedPages } from './completed-pages';
import { designingPages } from './designing-pages';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private progressArticles: Article[] = progressPages;
  private completedArticles: Article[] = completedPages;
  private designingArticles: Article[] = designingPages;

  // Not implemented for other page sets, don't think it is needed
  fullPagesList() {
    return of(this.progressArticles)
  }

  // Title list functions

  progressTitleList() {
    let list: Title[] = [];
    for(let page of this.progressArticles) {
      list.push(page.title);
    }

    return of(list);
  }

  completedTitleList() {
    let list: Title[] = [];
    for(let page of this.completedArticles) {
      list.push(page.title);
    }

    return of(list);
  }

  designingTitleList() {
    let list: Title[] = [];
    for(let page of this.designingArticles) {
      list.push(page.title);
    }

    return of(list);
  }

  // Page functions

  progressPage(title: string) {
    for(let page of this.progressArticles) {
      if(page.title.urlSegment === title) {
        return page;
      }
    }

    return this.emptyArticle();
  }

  completedPage(title: string) {
    for(let page of this.completedArticles) {
      if(page.title.urlSegment === title) {
        return page;
      }
    }

    return this.emptyArticle();
  }

  designingPage(title: string) {
    for(let page of this.designingArticles) {
      if(page.title.urlSegment === title) {
        return page;
      }
    }

    return this.emptyArticle();
  }

  // Helper functions

  emptyArticle() {
    let article: Article = {
      title: {
        title: "",
        urlSegment: ""
      },
      sections: [{
        header: {
          header: ""
        },
        content: []
      }]
    }

    return article;
  }

}
