import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menuIsActive = false;

  constructor(private router: Router, private titleService: Title) {}

  public toggleMenu(event: MouseEvent) {
    event.preventDefault();
    this.menuIsActive = !this.menuIsActive;
  }

  ngOnInit() {
    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }

      document.body.scrollTop = 0;
    });
  }

  @HostListener('window:resize', ['$event'])
  hideMenu(event) {
    this.menuIsActive = false;
  }
}
