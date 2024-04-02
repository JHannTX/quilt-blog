import { Injectable } from '@angular/core';
import { Article, Title} from '../models/article-interfaces';
import { of } from 'rxjs';
import { techniquePages } from './technique-pages';

@Injectable({
  providedIn: 'root'
})
export class TechniqueService {
  private articles: Article[] = techniquePages;

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
