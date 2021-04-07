import {Component, HostListener, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  reduceHeader: boolean;
  @HostListener('window:scroll') onScroll() {
    this.reduceHeader = window.scrollY > 130;
  }

  @HostListener('window:resize') 
  @HostListener('window:load') 
  onResize() {
    let video = document.querySelector("iframe")
    let currentWidth = video.getBoundingClientRect().width
    video.height = (currentWidth * 9 / 16) + "px"
  }
  constructor(
    private galleryService: GalleryService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {  }

  public safe(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url + "?controls=0")
  }


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
