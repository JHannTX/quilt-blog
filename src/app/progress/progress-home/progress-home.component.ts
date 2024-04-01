import { Component, type OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProgressTitle } from 'src/page-content/models/progress-interfaces';
import { ProgressService } from 'src/page-content/progress/progress.service';

@Component({
  selector: 'progress-home',
  templateUrl: './progress-home.component.html',
  styleUrls: ['./progress-home.component.css'],
})
export class ProgressHomeComponent implements OnInit {
  titles$!: Observable<ProgressTitle[]>;

  constructor(private progressService: ProgressService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void { 
    this.titles$ = this.progressService.titleList();
  }

  onClick(title: ProgressTitle) {
    this.router.navigate([title.urlSegment], {relativeTo: this.route})
  }
}
