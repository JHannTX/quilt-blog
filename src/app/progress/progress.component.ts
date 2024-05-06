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
  title: string = 'progress';

  // need to add routing to get which progress page we are going to
  constructor(private progressService: ProgressService, 
    private route: ActivatedRoute) {}

  ngOnInit(): void { 
    this.route.title
      .subscribe((title) => {
        if(title!!) {
          this.title = title;
          console.log('Title', this.title);
        }
      });

    this.route.paramMap
      .subscribe((params) => {
        if(params.has('urlSegment')) {
          this.urlSegment = params.get('urlSegment')!;
          this.setUpContent();
          console.log('Param Map', this.title);
        }
      });
  }

  setUpContent() {
    console.log('Set Up', this.title);
    if(this.title === 'progress') {
      this.page = this.progressService.progressPage(this.urlSegment);
    } else if(this.title === 'completed') {
      this.page = this.progressService.completedPage(this.urlSegment);
    } else if(this.title === 'designing') {
      this.page = this.progressService.designingPage(this.urlSegment);
    }
  }

}
