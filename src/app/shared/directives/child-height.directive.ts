import {
  AfterViewChecked,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Directive({
  selector: '[appChildHeight]'
})
export class ChildHeightDirective implements OnChanges, AfterViewChecked {
  // tslint:disable-next-line:no-input-rename
  @Input('appChildHeight') private myChildHeight: boolean;

  private isExpanded$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.isExpanded$.next(changes.myChildHeight.currentValue);
  }

  ngAfterViewChecked() {
    this.isExpanded$.subscribe(isExpanded => {
      isExpanded ? this.expand() : this.collapse();
    });
  }

  private collapse(): void {
    if (this.el.nativeElement.children.item(0) !== null) {
      const height = this.el.nativeElement.children.item(0).offsetHeight;
      this.renderer.setStyle(this.el.nativeElement, 'max-height', height + 'px');
    }
  }

  private expand(): void {
    this.renderer.setStyle(this.el.nativeElement, 'max-height', 9999 + 'px');
  }

  @HostListener('window:resize')
  private updateHeightOnResize(): void {
    if (!this.isExpanded$.value) {
      this.collapse();
    }
  }
}
