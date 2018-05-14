import { Component } from '@angular/core';
import { fadeAnimation } from './app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ fadeAnimation ]
})
export class AppComponent {
  getActivatedRoute(o): string {
    return o.isActivated ? o.activatedRoute + o.activatedRoute.snapshot.queryParams['category'] : '';
  }
}

