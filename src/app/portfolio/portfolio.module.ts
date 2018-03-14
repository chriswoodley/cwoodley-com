import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProjectComponent } from './components/project/project.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ],
  declarations: [ProjectComponent]
})
export class PortfolioModule { }
