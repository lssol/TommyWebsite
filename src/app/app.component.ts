import {Component, HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';
import { fadeAnimation } from './app.animation';
import * as $ from "jquery";
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ fadeAnimation ]
})
export class AppComponent {
  router: Router;
  reduceHeader = false;
  @Input() menuActivated: boolean;
  @HostListener('window:scroll') onScroll() {
      this.reduceHeader = window.scrollY > 0;
  }
  getActivatedRoute(o): string {
    return o.isActivated ? o.activatedRoute + o.activatedRoute.snapshot.queryParams['category'] : '';
  }

  constructor(router: Router) {
    this.router = router;
    this.router.events.subscribe((val) => this.toggleScrolling(false))
  }

  toggleScrolling(newValue): void {
    this.menuActivated = newValue;
    if (this.menuActivated) {
      $('body').addClass('stop-scrolling');
    } else {
      $('body').removeClass('stop-scrolling');
    }
  }
}

