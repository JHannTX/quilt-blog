import { Component, type OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Title } from 'src/page-content/models/article-interfaces';
import { TechniqueService } from 'src/page-content/techniques/technique.service';

@Component({
  selector: 'technique-home',
  templateUrl: './technique-home.component.html',
  styleUrls: ['./technique-home.component.css'],
})
export class TechniqueHomeComponent implements OnInit {
  titles$!: Observable<Title[]>;

  constructor(private techniqueService: TechniqueService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void { 
    this.titles$ = this.techniqueService.titleList();
  }

  onClick(title: Title) {
    this.router.navigate([title.urlSegment], {relativeTo: this.route})
  }
}
