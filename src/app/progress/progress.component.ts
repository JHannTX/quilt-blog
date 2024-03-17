import { Component, type OnInit } from '@angular/core';
import { ProgressArticle } from 'src/page-content/models/progress-interfaces';
import { ProgressService } from 'src/page-content/progress/progress.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  urlSegment: string = '';
  page: ProgressArticle = this.progressService.emptyArticle();

  constructor(private progressService: ProgressService) {}

  ngOnInit(): void { 
    this.urlSegment = 'derp';

    this.page = this.progressService.page("derp");
  }

}
