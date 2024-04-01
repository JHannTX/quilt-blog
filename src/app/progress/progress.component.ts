import { Component, type OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/page-content/models/article-interfaces';
import { ProgressService } from 'src/page-content/progress/progress.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  urlSegment: string = '';
  page!: Article;

  // need to add routing to get which progress page we are going to
  constructor(private progressService: ProgressService, 
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
    this.page = this.progressService.page(this.urlSegment);
  }

}
