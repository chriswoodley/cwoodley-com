import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appTrapEvent]'
})
export class TrapEventDirective {

  constructor() { }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

}
