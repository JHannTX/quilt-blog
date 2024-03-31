import { Component, Input, type OnInit } from '@angular/core';
import { ProgressTitle } from 'src/page-content/models/progress-interfaces';

@Component({
  selector: 'article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css'],
})
export class ArticleCardComponent implements OnInit {
    @Input() title!: ProgressTitle;

    constructor() {}

    ngOnInit(): void { 

    }
}
