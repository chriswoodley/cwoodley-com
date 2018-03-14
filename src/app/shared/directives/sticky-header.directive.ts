import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStickyHeader]'
})
export class StickyHeaderDirective {
  @HostBinding('class') classes = 'green-bg';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private stick(isStuck: boolean): void {
    const isOffCanvasActive = !!this.el.nativeElement.closest(
      '.off-canvas.is-active'
    );

    if (isStuck) {
      this.classes = 'green-bg sticky sticky--top';
      this.renderer.setStyle(
        this.el.nativeElement.nextElementSibling,
        'margin-top',
        this.el.nativeElement.offsetHeight + 'px'
      );

      if (isOffCanvasActive) {
        this.renderer.setStyle(
          (<HTMLElement>this.el.nativeElement).firstElementChild,
          'position',
          'relative'
        );

        this.renderer.setStyle(
          (<HTMLElement>this.el.nativeElement).firstElementChild,
          'left',
          63 + '%'
        );
      }
    } else {
      this.classes = 'green-bg';
      this.renderer.setStyle(
        this.el.nativeElement.nextElementSibling,
        'margin-top',
        ''
      );
      if (isOffCanvasActive) {
        this.renderer.removeStyle(
          (<HTMLElement>this.el.nativeElement).firstElementChild,
          'position'
        );

        this.renderer.removeStyle(
          (<HTMLElement>this.el.nativeElement).firstElementChild,
          'left'
        );
      }
    }
  }

  @HostListener('window:scroll', ['$event'])
  private onScroll(e: Event): void {
    const top =
      ((<Document>e.target).documentElement &&
        (<Document>e.target).documentElement.scrollTop) ||
      (<Document>e.target).body.scrollTop;

    this.stick(this.el.nativeElement.offsetTop < top);
  }
}
