import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ProjectsService } from '../../core/projects.service';
import { Project } from '../../portfolio/models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects$: Observable<Project[]>;
  isExpanded = false;
  seeMoreBtnText = 'See More Projects';

  constructor(
    private service: ProjectsService
  ) {}

  ngOnInit() {
    this.projects$ = this.service.getProjects();
  }

  public toggleSeeMore(event: MouseEvent): void {
    event.preventDefault();
    this.isExpanded = !this.isExpanded;
    this.seeMoreBtnText = this.isExpanded ? 'See Less Projects' : 'See More Projects';
  }
}
