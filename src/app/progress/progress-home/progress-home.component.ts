import { Component, type OnInit } from '@angular/core';
import { ProgressService } from 'src/page-content/progress/progress.service';

@Component({
  selector: 'progress-home',
  templateUrl: './progress-home.component.html',
  styleUrls: ['./progress-home.component.css'],
})
export class ProgressHomeComponent implements OnInit {

  constructor(private progressService: ProgressService) {}

  ngOnInit(): void { 
    
  }
}
