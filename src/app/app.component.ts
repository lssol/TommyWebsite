import {Component, HostBinding} from '@angular/core';
import {routeAnimation} from './app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ routeAnimation ],
  host: { '[@routeAnimation]': '' }
})
export class AppComponent {
}

