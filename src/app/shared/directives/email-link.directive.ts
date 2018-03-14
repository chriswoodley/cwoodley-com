import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appEmailLink]'
})
export class EmailLinkDirective {

  constructor() { }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    window.location.href = 'mailto:chriswoodley@me.com';
  }
}
