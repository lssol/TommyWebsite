import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Project} from './gallery.model';
import {first, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  constructor(private http: HttpClient) { }

  getProjects(category: string): Observable<Project[]> {
    return this.http.get<Project[]>('assets/portfolio/portfolio.json')
      .pipe(
        map(projects => projects.filter(project => this.filterProjects(category, project)))
      );
  }
  getProject(projectName: string): Observable<Project> {
    return this.http.get<Project[]>('assets/portfolio/portfolio.json')
      .pipe(
        map(projects => projects.filter(project => project.name == projectName)[0]),
      );
  }

  filterProjects(category: string, project: Project): boolean {
      return project.category === category;
  }
}
