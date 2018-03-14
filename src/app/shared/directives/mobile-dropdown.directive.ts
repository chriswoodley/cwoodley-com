import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMobileDropdown]'
})
export class MobileDropdownDirective {
  public isActive = false;

  constructor() {}

  @HostListener('tap', ['$event'])
  onTap(e): void {
    this.isActive = !this.isActive;
  }

  @HostBinding('class.menu__sub-item--parent-is-active')
  get onActive() {
    return this.isActive;
  }
}
