import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, switchMap} from 'rxjs/operators';
import {Project} from '../gallery.model';
import {GalleryService} from '../gallery.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project: Project;
  selectedProject: string = undefined;

  constructor(
    private galleryService: GalleryService,
    private route: ActivatedRoute,
    private router: Router,
  ) {  }

  ngOnInit() {
    this.route.paramMap.subscribe(p => this.selectedProject = p.get('id'));
    this.galleryService.getProject(this.selectedProject)
      .subscribe(p => {
        this.project = p;
      });
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      switchMap(() => this.galleryService.getProject(this.selectedProject))
    ).subscribe(p => {
        this.project = p;
      });
  }
}
