import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appNavReduceOnScroll]'
})
export class NavReduceOnScrollDirective {

  @HostListener('window:scroll', [])
  onWindowScroll() {
    //this.nav.nativeElement.style.classes.
    //var a = window.scrollY;
  }

  constructor(private nav: ElementRef) { }

}
