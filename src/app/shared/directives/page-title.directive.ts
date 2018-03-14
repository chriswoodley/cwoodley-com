import { Directive, HostListener, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Directive({
  selector: '[appPageTitle]'
})
export class PageTitleDirective {

  // tslint:disable-next-line:no-input-rename
  @Input('appPageTitle')
  pageTitle: string;

  constructor(
    private service: Title
  ) { }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.service.setTitle(this.pageTitle);
  }

}
