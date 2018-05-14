import {animate, style, transition, trigger} from '@angular/animations';

export const fadeAnimation =
  trigger('fadeAnimation', [
    transition('*<=>*', [
      style({ opacity: 0 }),
      animate('0.6s', style({ opacity: 1 }))
    ])
  ]);
