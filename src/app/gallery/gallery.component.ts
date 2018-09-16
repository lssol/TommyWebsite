import { GalleryService } from '../gallery.service';
import {AfterViewInit, Component, Input, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { Location } from '@angular/common';
import {Image, Project} from '../gallery.model';
import {filter, switchMap, tap} from 'rxjs/operators';
import Rellax from 'rellax';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit, AfterViewInit {
  selectedGallery: string = undefined;
  projects: Project[];

  constructor(
    private galleryService: GalleryService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {  }

  ngOnInit() {
    this.route.paramMap.subscribe(p => this.selectedGallery = p.get('category'));
    this.galleryService.getProjects(this.selectedGallery).subscribe(p => this.projects = p);
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      switchMap(() => this.galleryService.getProjects(this.selectedGallery))
    ).subscribe(p => this.projects = p);
  }

  ngAfterViewInit(): void {
    new Rellax('.rellax');
  }
}
