import { Component, type OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/page-content/models/article-interfaces';
import { TechniqueService } from 'src/page-content/techniques/technique.service';

@Component({
  selector: 'app-technique',
  templateUrl: './technique.component.html',
  styleUrls: ['./technique.component.css']
})
export class TechniqueComponent implements OnInit {
  urlSegment: string = '';
  page!: Article;

  // need to add routing to get which progress page we are going to
  constructor(private techniqueService: TechniqueService, 
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
    this.page = this.techniqueService.page(this.urlSegment);
  }

}
