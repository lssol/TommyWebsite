import {Component, HostListener, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { fadeAnimation } from './app.animation';
import * as $ from "jquery";
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ fadeAnimation ]
})
export class AppComponent implements OnInit {
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

  ngOnInit(): void {
    $(window).on('load', function() {
      setTimeout(function() {
        $('#loading').fadeOut(1000);
      }, 800);
    });
  }

  toggleScrolling(newValue): void {
    this.menuActivated = newValue;
    if (this.menuActivated) {
      $('body').bind('touchmove', function(e){e.preventDefault()})
    } else {
      $('body').unbind('touchmove')
    }
  }

}

