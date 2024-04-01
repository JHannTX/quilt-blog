import { Component, type OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/page-content/models/article-interfaces';
import { RandomThoughtService } from 'src/page-content/random-thoughts/random-thoughts.service';

@Component({
  selector: 'app-random-thought',
  templateUrl: './random-thought.component.html',
  styleUrls: ['./random-thought.component.css']
})
export class RandomThoughtComponent implements OnInit {
  urlSegment: string = '';
  page!: Article;

  // need to add routing to get which progress page we are going to
  constructor(private randomThoughtService: RandomThoughtService, 
    private route: ActivatedRoute) {}

  ngOnInit(): void { 
    this.route.paramMap
      .subscribe((params) => {
        if(params.has('urlSegment')) {
          this.urlSegment = params.get('urlSegment')!;
          this.setUpContent();
        }
      });
  }

  setUpContent() {
    this.page = this.randomThoughtService.page(this.urlSegment);
  }

}
