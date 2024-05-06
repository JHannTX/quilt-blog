import { Component, type OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Title } from 'src/page-content/models/article-interfaces';
import { ProgressService } from 'src/page-content/progress/progress.service';

@Component({
  selector: 'progress-home',
  templateUrl: './progress-home.component.html',
  styleUrls: ['./progress-home.component.css'],
})
export class ProgressHomeComponent implements OnInit {
  titles$!: Observable<Title[]>;
  private title: string = 'progress';

  constructor(private progressService: ProgressService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void { 
    this.route.title
    .subscribe((title) => {
      if(title!!) {
        this.title = title;
      }
    });

    if(this.title === 'progress') {
      this.titles$ = this.progressService.progressTitleList();
    } else if(this.title === 'completed') {
      this.titles$ = this.progressService.completedTitleList();
    } else if(this.title === 'designing') {
      this.titles$ = this.progressService.designingTitleList();
    }
  }

  onClick(title: Title) {
    this.router.navigate([title.urlSegment], {relativeTo: this.route})
  }
}
