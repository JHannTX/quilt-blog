import { Component, type OnInit } from '@angular/core';
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

  constructor(private progressService: ProgressService) {}

  ngOnInit(): void { 
    this.titles$ = this.progressService.titleList();
  }
}
