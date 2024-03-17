import { Injectable } from '@angular/core';
import { ProgressArticle, ProgressTitle} from '../models/progress-interfaces';
import { progressPages } from './progress-pages';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private articles: ProgressArticle[] = progressPages;

  fullPagesList() {
    return of(this.articles)
  }

  titleList() {
    let list: ProgressTitle[] = [];
    for(let page of this.articles) {
      list.push(page.title);
    }

    return of(list);
  }

  page(title: string) {
    for(let page of this.articles) {
      if(page.title.title === title) {
        return page;
      }
    }

    return this.emptyArticle();
  }

  emptyArticle() {
    let article: ProgressArticle = {
      title: {
        title: "",
        urlSegment: ""
      },
      sections: {
        header: {
          header: ""
        },
        content: []
      }
    }

    return article;
  }

}
