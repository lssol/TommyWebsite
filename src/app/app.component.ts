import { Component } from '@angular/core';
import {routeAnimation} from './app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ routeAnimation ]
})
export class AppComponent {
  getPage(appOutlet): string {
    return appOutlet.activatedRouteData['animation'];
  }
}
