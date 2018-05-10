import { GalleryService } from '../gallery.service';
import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { Location } from '@angular/common';
import {Image, Project} from './gallery.model';
import {pipe} from '@angular/core/src/render3/pipe';
import {filter, switchMap, tap} from 'rxjs/operators';
import {Observable, ObservableInput, Subscription} from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  @Input() selectedGallery: string = undefined;
  projects: Project[];
  selectedProject: string = undefined;

  constructor(
    private galleryService: GalleryService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {  }

  ngOnInit() {
    this.route.paramMap.subscribe(p => this.selectedGallery = p.get('category'));
    this.galleryService.getPortfolioConfig(this.selectedGallery).subscribe(p => this.projects = p);
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      switchMap(() => this.galleryService.getPortfolioConfig(this.selectedGallery))
    ).subscribe(p => this.projects = p);
  }
}
