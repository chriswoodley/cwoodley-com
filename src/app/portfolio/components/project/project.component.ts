import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ActivatedRoute, Params } from '@angular/router';
import { ProjectsService } from '../../../core/projects.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project$: Observable<Project>;

  constructor(
    private service: ProjectsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.project$ = this.service.getProject(params.slug);
    });
  }
}
