import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './gallery/gallery.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  constructor(private http: HttpClient) { }

  getPortfolioConfig(category: string): Observable<Project[]> {
    return this.http.get<Project[]>('assets/portfolio/portfolio.json')
      .pipe(
        map(projects => projects.filter(project => this.filterProjects(category, project)))
      );
  }
  filterProjects(category: string, project: Project): boolean {
      return project.category === category;
  }
}
