import {AfterViewChecked, AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, switchMap} from 'rxjs/operators';
import {Location} from '@angular/common';
import {Image, Project} from '../gallery.model';
import {GalleryService} from '../gallery.service';

declare var UnityLoader;
declare var UnityProgress;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, AfterViewInit {
  project: Project;
  selectedProject: string = undefined;

  constructor(
    private galleryService: GalleryService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
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

  ngAfterViewInit() {
    var gameInstance;
    if (!gameInstance)
    {
      window.setTimeout(function() {
        gameInstance = UnityLoader.instantiate("gameContainer", "assets/portfolio/Branding/popland/Build/Web5.json", {onProgress: UnityProgress});
      }, 3000);

    }
  }
}
