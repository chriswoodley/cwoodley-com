import { Injectable } from '@angular/core';
import { Project, ProjectModel } from '../portfolio/models/project';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { shareReplay, map, tap, filter } from 'rxjs/operators';

@Injectable()
export class ProjectsService {
  project: Project;

  constructor(
    private http: HttpClient
  ) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('assets/data/projects.json')
      .pipe(
        map(res => res.map(r => ProjectModel(r))),
        shareReplay()
      );
  }

  getProject(slug: string): Observable<Project> {
    return this.http.get<Project[]>('assets/data/projects.json')
      .pipe(
        map(res => res.map(r => ProjectModel(r))),
        map(projects => projects.find(p => p.slug.toLowerCase() === slug.toLowerCase())),
        shareReplay()
      );
  }
}
