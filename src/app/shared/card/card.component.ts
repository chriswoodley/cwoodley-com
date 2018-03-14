import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Project } from '../../portfolio/models/project';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() project: Project;

  constructor() {}

  ngOnInit() {}
}
