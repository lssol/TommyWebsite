import {animate, style, transition, trigger} from '@angular/animations';

export const routeAnimation =
  trigger('animRoutes', [
    transition('*<=>*', [
      style({ opacity: 0 }),
      animate('0.6s', style({ opacity: 1 }))
    ])
  ]);
