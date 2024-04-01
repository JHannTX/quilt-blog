import { Component, type OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Title } from 'src/page-content/models/article-interfaces';
import { RandomThoughtService } from 'src/page-content/random-thoughts/random-thoughts.service';

@Component({
  selector: 'random-thought-home',
  templateUrl: './random-thought-home.component.html',
  styleUrls: ['./random-thought-home.component.css'],
})
export class RandomThoughtHomeComponent implements OnInit {
  titles$!: Observable<Title[]>;

  constructor(private randomThoughtService: RandomThoughtService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void { 
    this.titles$ = this.randomThoughtService.titleList();
  }

  onClick(title: Title) {
    this.router.navigate([title.urlSegment], {relativeTo: this.route})
  }
}
