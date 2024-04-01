import { Injectable } from '@angular/core';
import { Article, Title} from '../models/article-interfaces';
import { of } from 'rxjs';
import { randomThoughtPages } from './random-thoughts-pages';

@Injectable({
  providedIn: 'root'
})
export class RandomThoughtService {
  private articles: Article[] = randomThoughtPages;

  fullPagesList() {
    return of(this.articles)
  }

  titleList() {
    let list: Title[] = [];
    for(let page of this.articles) {
      list.push(page.title);
    }

    return of(list);
  }

  page(title: string) {
    for(let page of this.articles) {
      if(page.title.urlSegment === title) {
        return page;
      }
    }

    return this.emptyArticle();
  }

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
