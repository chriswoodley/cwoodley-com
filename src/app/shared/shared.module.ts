import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CardComponent } from './card/card.component';
import { ChildHeightDirective } from './directives/child-height.directive';
import { MobileDropdownDirective } from './directives/mobile-dropdown.directive';
import { StickyHeaderDirective } from './directives/sticky-header.directive';
import { TrapEventDirective } from './directives/trap-event.directive';
import { EmailLinkDirective } from './directives/email-link.directive';
import { PageTitleDirective } from './directives/page-title.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    MobileDropdownDirective,
    ChildHeightDirective,
    StickyHeaderDirective,
    CardComponent,
    TrapEventDirective,
    EmailLinkDirective,
    PageTitleDirective
  ],
  exports: [
    MobileDropdownDirective,
    ChildHeightDirective,
    StickyHeaderDirective,
    TrapEventDirective,
    CardComponent,
    EmailLinkDirective,
    PageTitleDirective
  ]
})
export class SharedModule {}
